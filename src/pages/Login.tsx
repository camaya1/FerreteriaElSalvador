import { useContext, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "../styles/Login.scss";
import ContextCreate from "../interface/Context";
import { MessageInterface } from "../interface/Api";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";

import logo from "../assets/ferreteria-logo.png"; // Logo de la Ferretería

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const context = useContext(ContextCreate);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState<MessageInterface>({
    open: false,
    type: "success",
    text: "",
  });

  const sendDataLogin = async (data: any) => {
    setLoading(true);
    axios
      .post("http://localhost:3000/api/v1/auth", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response.data);
        context.setUser({
          token: response.data.token,
          user: {
            name: response.data.user.name,
            email: response.data.user.email,
            rolId: response.data.user.rolId,
          },
        });
        navigate("/home/products");
      })
      .catch((error) => {
        console.error(error);
        setMessage({
          open: true,
          type: "error",
          text: "Credenciales incorrectas",
        });
      });
    setLoading(false);
  };

  return (
    <>
      <Notification message={message} setMessage={setMessage} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="root-content-login">
        <div className="card-login">
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={logo}
              alt="Logo de la Ferretería"
              style={{ width: "100px", height: "100px" }}
            />
          </div>

          <form onSubmit={handleSubmit(sendDataLogin)}>
            <div className="input-cards">
              <TextField
                label="Correo electrónico"
                placeholder="example@email.com"
                id="txt-email"
                type="email"
                sx={{
                  marginBottom: "1.3rem",
                  marginTop: "3rem",
                }}
                helperText={errors?.email?.message?.toString() ?? ""}
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es requerido",
                  },
                })}
              />
              <TextField
                label="Contraseña"
                placeholder="*********"
                type={showPassword ? "text" : "password"}
                sx={{
                  marginBottom: "2rem",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                helperText={
                  errors?.password?.message
                    ? String(errors.password.message)
                    : ""
                }
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida",
                  },
                })}
              />
              <Button type="submit" variant="contained" color="primary">
                Iniciar sesión
              </Button>
            </div>
          </form>
          <div className="footer-login">
            <Divider flexItem>¿Olvidaste tu contraseña?</Divider>
            <p>Solicitar cambio de contraseña</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

const Login = () => {
    const { login } = useAuth();
    const { handleSubmit, register } = useForm();
    const onSubmit = (data: any) => {
        login(data.username, data.password);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <input {...register('password')} />
        <button type="submit">Login</button>
        </form>
    );
}

export default Login;
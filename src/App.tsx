import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Router from './router/Router';

const App = () => {
    const router = createBrowserRouter(Router);

	return (
		<RouterProvider router={router}>
		</RouterProvider>
	)
}

export default App


import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context";



import './style/post.css'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>

	)
}

export default App;

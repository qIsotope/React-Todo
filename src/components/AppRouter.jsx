import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context';
import { Login } from '../pages/Login';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../routes/routes'



export const AppRouter = () => {
	const { isAuth } = useContext(AuthContext)
	return (
		isAuth
			? < Routes >
				{privateRoutes.map(r => <Route key={r.path} path={r.path} exact={r.exact} element={r.component} />)}
				< Route path='*' element={< Posts />} />
			</Routes >
			: < Routes >
				{publicRoutes.map(r => <Route key={r.path} path={r.path} exact={r.exact} element={r.component} />)}
				< Route path='*' element={< Login />} />
			</Routes >


	)
}

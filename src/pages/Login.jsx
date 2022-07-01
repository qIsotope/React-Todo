import React, { useContext } from 'react'
import { MyButton } from '../components/UI/button/MyButton'
import { MyInput } from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

export const Login = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext)

	const login = (e) => {
		e.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}

	return (
		<form style={{ marginTop: '15px' }}
			onSubmit={login}
		>
			<MyInput placeholder="LOGIN" />
			<MyInput placeholder="PASSWORD" />
			<MyButton> LOGIN </MyButton>
		</form >
	)
}

import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';
import { MyButton } from '../button/MyButton';

export const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const exit = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	return (
		<div className="navbar">
			<MyButton onClick={exit}>
				EXIT
			</MyButton>
			<div className="navbar__links">
				<Link to='/about'> ABOUT</Link>
				<Link to='/posts'> POSTS</Link>
			</div>
		</div>
	)
}

import React from 'react'
import { Link } from "react-router-dom";
export const Error = () => {
	return (
		<div className="errorPage">
			<h1>This page is not FOUND</h1>
			<h2>Redirect to <Link to='/posts'> POSTS</Link></h2>
		</div>
	)
}

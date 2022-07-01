import React from 'react'
import classes from './myInput.module.css'
export const MyInput = (props) => {
	return (
		<input className={classes.myInput} {...props} />
	)
}

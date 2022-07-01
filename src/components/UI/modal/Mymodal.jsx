import React from 'react'
import classes from './modal.module.css'
export const MyModal = ({ children, visible, setVisible }) => {

	const rootClasses = [classes.modal]
	if (visible) {
		rootClasses.push(classes.modalActive)
	}
	return (
		<div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
			<div onClick={(e) => e.stopPropagation()} className={classes.modalBody}>
				{children}
			</div>
		</div >
	)
}

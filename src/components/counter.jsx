import React, { useState } from 'react'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	)
}

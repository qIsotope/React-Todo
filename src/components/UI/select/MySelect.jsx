import React from 'react'

export const MySelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<select value={value}
			onChange={event => onChange(event.target.value)}>
			<option disabled>{defaultValue}</option>
			{options.map(option =>
				<option key={option.value} value={option.value}>{option.title}</option>
			)}
		</select>
	)
}

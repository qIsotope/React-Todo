import React from 'react'
import { MyInput } from '../input/MyInput'
import { MySelect } from '../select/MySelect'


export const MyFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<hr style={{ marginTop: '20px', marginBottom: '20px' }} />
			<MySelect defaultValue={'sorting'} options={[{ value: 'title', title: 'For Name' },
			{ value: 'body', title: 'For Description' }]}
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
			/>
			<MyInput style={{ marginTop: '20px', marginBottom: '10px' }} placeholder='FIND'
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })} />
		</div>
	)
}

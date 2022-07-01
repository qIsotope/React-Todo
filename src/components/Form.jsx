import React, { useState } from 'react'
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
export const Form = (props) => {
	const [post, setPost] = useState({ title: '', description: '' })
	const addNewPost = (e) => {
		e.preventDefault();
		props.setPosts([...props.posts, { ...post, id: Date.now() }])
		setPost({ title: '', description: '' })
		props.setModal(false)
	}
	return (
		<form>
			<MyInput value={post.title}
				onChange={(event) => setPost({ ...post, title: event.target.value })} type="text"
				placeholder="TITLE"
				style={{ marginTop: '10px', marginBottom: '10px' }}
			/>
			<MyInput value={post.description}
				onChange={(event) => setPost({ ...post, description: event.target.value })} type="text"
				placeholder="DESCRIPTION"
				style={{ marginTop: '10px', marginBottom: '10px' }} />
			<MyButton style={{ marginTop: '10px', marginBottom: '10px' }} onClick={addNewPost}>Add POST</MyButton>
		</form>
	)
}

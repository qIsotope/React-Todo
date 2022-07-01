import React from 'react'
import { MyButton } from './UI/button/MyButton'
import { useNavigate } from "react-router-dom";



export const Post = (props) => {
	const navigate = useNavigate();
	return (
		<div className="postItem">
			<div className="post-content">
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>{props.post.body}</div>
			</div>
			<div className="post-buttons">
				<MyButton onClick={() => props.deletePost(props.post)}>DELETE</MyButton>
				<MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>OPEN</MyButton>
			</div>
		</div>
	)
}

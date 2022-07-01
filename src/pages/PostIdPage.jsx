import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/loader/loader';
export const PostIdPage = () => {

	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const params = useParams()

	const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
		setPost(response.data)
	})
	const [fetchCommentById, isCommentLoading, commentError] = useFetching(async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchCommentById(params.id)
	}, [])
	return (
		<div className="post-information">
			<h1>POST ID PAGE WITH ID {params.id}</h1>
			{isPostLoading
				? <Loader />
				: <h1>{post.id}. {post.title}</h1>
			}

			<h1>
				Comments
			</h1>
			{isCommentLoading
				? <Loader />
				: <div style={{ marginTop: '15px' }}> {comments.map(comm => <div key={comm.id} style={{ marginTop: '15px' }}>
					<h2>{comm.email}</h2>
					<h4>{comm.body}</h4>
				</div>)}</div>
			}

		</div>

	)
}

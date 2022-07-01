import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from 'react-transition-group'
import { Post } from './post'

export const PostList = (props) => {
	if (!props.post.length) {
		return <h1 style={{ textAlign: 'center' }}>NO POSTS</h1>
	}
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{props.title}</h1>
			<div className="posts">
				<TransitionGroup>
					{props.post.map((p, index) =>
						<CSSTransition
							key={p.id}
							timeout={350}
							classNames="post">
							<Post post={p} number={index + 1} deletePost={props.deletePost} />
						</CSSTransition>

					)}


				</TransitionGroup>
			</div>
		</div>
	)
}

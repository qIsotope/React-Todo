import axios from "axios";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Form } from "../components/Form";
import { PostList } from "../components/postList";
import { MyButton } from "../components/UI/button/MyButton";
import { MyFilter } from "../components/UI/filter/MyFilter";
import { Loader } from "../components/UI/loader/loader";
import { MyModal } from "../components/UI/modal/Mymodal";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

import '../style/post.css'
import { getArrayOfPages, getPagesCount } from "../utils/getPagesCount";
import { Pagination } from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import { MySelect } from "../components/UI/select/MySelect";

function Posts() {
	const lastElement = useRef()
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page,
			}
		})
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})


	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts()
	}, [page, limit])

	const searchedAndSortedPosts = usePosts(posts, filter.query, filter.sort)


	const deletePost = (currentPost) => {
		setPosts(posts.filter(post => post.id !== currentPost.id))
	}



	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)} style={{ marginTop: '20px' }}>ADD NEW POST</MyButton>
			<MyFilter lter filter={filter} setFilter={setFilter} />
			<MySelect defaultValue='LIMIT' value={limit}
				onChange={(value) => setLimit(value)}
				options={[
					{ value: 5, title: '5' },
					{ value: 10, title: '10' },
					{ value: 25, title: '25' },
					{ value: -1, title: 'ALL' }
				]

				} />
			<MyModal visible={modal} setVisible={setModal}>
				<Form setModal={setModal} posts={searchedAndSortedPosts} setPosts={setPosts} />
			</MyModal>
			{
				postError &&
				<h1>ERROR: ${postError}</h1>
			}
			{isPostLoading
				&& <Loader />
			}
			<div><PostList post={searchedAndSortedPosts} title={'LIST OF POSTS'} deletePost={deletePost} />
				<div ref={lastElement} style={{ height: '20px', backgroundColor: 'red' }}></div>
				<Pagination totalPages={totalPages} page={page} /></div>
		</div>
	);
}

export default Posts;

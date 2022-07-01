import React from 'react'
import { getArrayOfPages } from '../../../utils/getPagesCount'

export const Pagination = ({ changePage, totalPages, page }) => {
	let arrayPages = getArrayOfPages(totalPages)
	return (
		<div className="pagination">
			{arrayPages.map(p => <span
				key={p} className={page === p
					? 'pagination-item pagination-active'
					: 'pagination-item'}>{p}
			</span>)}
		</div>
	)
}

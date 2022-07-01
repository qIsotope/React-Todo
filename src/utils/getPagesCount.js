export const getPagesCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}

export const getArrayOfPages = (totalPages) => {
	let arrayPages = [];
	for (let i = 0; i < totalPages; i++) {
		arrayPages.push(i + 1)
	}
	return arrayPages
}
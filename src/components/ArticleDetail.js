import React from "react";

const ArticleDetail=({selectedArticle, onSectionClick}) => {
	
	const handleClick = function() {
		onSectionClick(selectedArticle.sectionName)
	}
	
	return(
		<div>
			<h2>
			<a href={selectedArticle.webUrl}>{selectedArticle.webTitle}</a>
			</h2>
			<button onClick={handleClick} >Filter by Section: {selectedArticle.sectionName}</button>
			<p>Published: {selectedArticle.webPublicationDate.slice(0, 10)}</p>

		</div>
	)
}

export default ArticleDetail;
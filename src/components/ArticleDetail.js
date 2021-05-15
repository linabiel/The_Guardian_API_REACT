import React from "react";

const ArticleDetail=({selectedArticle}) => {
	return(
		<div>
			<h2>
			<a href={selectedArticle.webUrl}>{selectedArticle.webTitle}</a>
			</h2>
			<p>Section: {selectedArticle.sectionName}</p>
			<p>Published: {selectedArticle.webPublicationDate.slice(0, 10)}</p>
		</div>
	)
}

export default ArticleDetail;
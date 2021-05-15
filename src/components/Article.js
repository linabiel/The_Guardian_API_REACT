import React from "react";

const Article = ({article}) => {
	
	return(
		<li>
			<p>Article: {article.webTitle}</p>
			<p>Genre: {article.sectionName} </p>
		</li>
	)
}

export default Article;
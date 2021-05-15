import React from "react";
import Article from "./Article";

const ArticleList = ({articles}) => {
	
	const articleItems = articles.map((article, index) => {
		return <Article article={article} key={index}/>
	})
	
	return(
		<div>
			<ol>
				{articleItems}
			</ol>
		</div>
	)
}

export default ArticleList;
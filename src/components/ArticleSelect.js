import React from "react";
import Article from "./Article";

const ArticleSelect = ({articles, onArticleSelected}) => {
	
	const handleChange = function(event) {
		const chosenArticle = articles[event.target.value];
		onArticleSelected(chosenArticle);
	}
	
	const articleItems = articles.map((article, index) => {
		return <Article article={article} key={index} onChange={onArticleSelected} />;
    })
	
    const newLocal = <option value={articles.index}> {articles}</option>;
    return (
        <div>
            <select name="article" id="article" value={articles.index} onChange={handleChange}>
                {articleItems}
            </select>
        </div>
    )

}

export default ArticleSelect;
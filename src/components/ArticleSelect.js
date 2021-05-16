import React from "react";

const ArticleSelect = ({articles, onArticleSelected}) => {
	
	const handleChange = function(event) {
		const chosenArticle = articles[event.target.value];
		onArticleSelected(chosenArticle);
	}
	
    const ArticleOptions = articles.map((article, index) => {
      return <option value={index} key={index}>{article.webTitle}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose an Article</option>
            {ArticleOptions}
        </select>
    )

}

export default ArticleSelect;
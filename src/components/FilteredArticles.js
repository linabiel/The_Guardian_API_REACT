import React from "react";

const FilteredArticles = (articles, onSectionClick, sectionName) => {
	
	// const  onClick
	
	const filteredItems = articles.filter((article) => article.sectionName === "Global development")
	console.log(filteredItems)
	return(
		<div>
			<ol>
				By Section: {filteredItems}
			</ol>
		</div>
	)
}
export default FilteredArticles;
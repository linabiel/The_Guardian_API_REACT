import React, { useEffect, useState } from 'react';
import ArticleList from "../components/ArticleList";
import ArticleSelect from "../components/ArticleSelect";

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    
    useEffect(() => {
        getArticles();
    }, [])
    
    const getArticles = function () {
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
            .then(res => res.json())
            .then(articles => setArticles(articles.response.results))
    };
    
    const onArticleSelected = function (article) {
        setSelectedArticle(article);
    };
    
    return(
        <>
            {/*<ArticleList articles={articles} />*/}
            <ArticleSelect articles={articles} onArticleSelected={onArticleSelected} />
            {selectedArticle ? <ArticleDetail selectedArticle={selectedArticle} /> : null}
        </>
    );
};

export default ArticleContainer;
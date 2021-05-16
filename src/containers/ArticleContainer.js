import React, { useEffect, useState } from 'react';
import ArticleList from "../components/ArticleList";
import ArticleSelect from "../components/ArticleSelect";
import ArticleDetail from "../components/ArticleDetail";
import FilteredArticles from "../components/FilteredArticles";
import './ArticleContainer.css';

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedSection, setSelectedSection] = useState([])
    
    useEffect(() => {
        getArticles();
    }, [])
    
    useEffect(() => {
        getFilteredArticles();
    }, [selectedSection])
    
    const getArticles = function () {
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
            .then(res => res.json())
            .then(articles => setArticles(articles.response.results))
    };
    
    const getFilteredArticles = function () {
        FilteredArticles(articles, selectedSection)
    }
    
    const onArticleSelected = function (article) {
        setSelectedArticle(article);
    };
    
    const onSectionClick = function (article) {
        setSelectedSection(article)
    }
    
    return(
        <>
            {/*<ArticleList articles={articles} />*/}
            <ArticleSelect articles={articles} onArticleSelected={onArticleSelected} />
            {selectedArticle ? <ArticleDetail onSectionClick={onSectionClick}
                                              selectedArticle={selectedArticle} /> : null}
            {/*<FilteredArticles articles={articles} />*/}
        </>
    );
};

export default ArticleContainer;
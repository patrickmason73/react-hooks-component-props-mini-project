import React from "react";
import Article from "./Article";

function ArticleList({ article }) {
    return (
        <main>
            {article.map((post) => {
                return <Article title={post.title} date={post.date} preview={post.preview} id={post.id}/>
            })}
        </main>
    )
}

export default ArticleList
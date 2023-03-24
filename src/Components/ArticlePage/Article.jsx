import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./article.css";

const Article = ({ data }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const articleID = encodeURIComponent(id);

  useEffect(() => {
    const [article] = data.filter((article) => article.id === articleID);
    setArticle(article);
  }, [articleID, data]);

  return (
    <>
      {!article ? (
        <div>LOADING ARTICLE</div>
      ) : (
        <div className="content">
          <figure>
            <img src={article.fields.thumbnail} alt="article-related-img" />
          </figure>
          <main>
            <div className="title">
              <a
                href={article.webUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.fields.headline}
              </a>
            </div>
            <div className="bodyText">{article.fields.bodyText}</div>
            <div className="author">
              {" "}
              - {article.fields.byline}- {article.webPublicationDate}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Article;

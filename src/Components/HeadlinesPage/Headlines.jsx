import React from "react";
import { NavLink } from "react-router-dom";
import "./headlines.css";

function Headlines(props) {
  const news = props.data.map((eachArticle) => {
    const { id, webPublicationDate } = eachArticle;
    const { headline, thumbnail, byline, bodyText } = eachArticle.fields;
    let formattedTime = new Date(webPublicationDate);
    let truncatedText = bodyText.substring(0, 150);

    return (
      <article key={id}>
        <div className="article">
          <div className="content">
            <div className="header">
              <h1>
                <NavLink to={`/article/${id}`} activeclass="active">
                  {headline}
                </NavLink>
              </h1>
              <p>
                <em>
                  {" "}
                  - {byline}, {formattedTime.toLocaleDateString()}
                </em>
              </p>
            </div>
          </div>

          <figure>
            <div className="fig-image">
              <img src={thumbnail} alt="article" />
              <figcaption className="figure-caption">
                {truncatedText} . . .
                <NavLink to={`/article/${id}`} activeclass="active">
                  <span>Read more</span>
                </NavLink>
              </figcaption>
            </div>
          </figure>
        </div>
        <hr />
      </article>
    );
  });
  return (
    <div>
      {props.data.length === 0 && <p key="loading">Loading headlines ...</p>}
      {news}
    </div>
  );
}

export default Headlines;

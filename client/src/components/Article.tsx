import { Link } from "react-router-dom";
import { IArticle } from "../interfaces/artticleInterface";
import { getImageUrl } from "../utils/getImageUrl";

function Article({ article }: { article: IArticle }) {
  const imageUrl = getImageUrl(article);

  const parts = article.id.split("/");
  const id = parts.pop();

  return (
    <div
      className="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--highlight js-teaser"
      data-id=""
    >
      <div className="o-teaser__content">
        <div className="o-teaser__meta">
          <Link
            className="o-teaser__tag"
            data-trackable="teaser-tag"
            to={`/details/${id}`}
            aria-label="Category: Sexual misconduct allegations"
          >
            {article.standfirst}
          </Link>
        </div>
        <div className="o-teaser__heading">
          <Link
            to={`/details/${id}`}
            data-trackable="heading-link"
            className="js-teaser-heading-link"
          >
            {article.title}
          </Link>
        </div>
        <p className="o-teaser__standfirst">
          <Link
            to={`/details/${id}`}
            data-trackable="standfirst-link"
            tabIndex={-1}
            className="js-teaser-standfirst-link"
          >
            {article.mainImage.description}
          </Link>
        </p>
      </div>
      <div className="o-teaser__image-container js-teaser-image-container">
        <Link
          to={`/details/${id}`}
          data-trackable="image-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div
            className="o-teaser__image-placeholder"
            style={{ paddingBottom: "56.2500%" }}
          >
            <img
              className="o-teaser__image"
              src={imageUrl}
              alt="Financial Times"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Article;

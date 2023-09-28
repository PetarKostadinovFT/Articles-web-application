import { Link } from "react-router-dom";
import {
  IArticle,
  Member,
  MemberObject,
} from "../interfaces/artticleInterface";

function Article({ article }: { article: IArticle }) {
  let imageUrl = "";

  if (Array.isArray(article.mainImage.members)) {
    if (article.mainImage.members.length > 0) {
      imageUrl = (article.mainImage.members[0] as Member).binaryUrl;
    }
  } else if (article.mainImage.members) {
    imageUrl = (article.mainImage.members as MemberObject).binaryUrl;
  }

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
            to="/details"
            aria-label="Category: Sexual misconduct allegations"
          >
            {article.mainImage.description}
          </Link>
        </div>
        <div className="o-teaser__heading">
          <Link
            to="/details"
            data-trackable="heading-link"
            className="js-teaser-heading-link"
          >
            {article.title}
          </Link>
        </div>
        <p className="o-teaser__standfirst">
          <Link
            to="/details"
            data-trackable="standfirst-link"
            tabIndex={-1}
            className="js-teaser-standfirst-link"
          >
            {article.standfirst}
          </Link>
        </p>
      </div>
      <div className="o-teaser__image-container js-teaser-image-container">
        <Link
          to="/details"
          data-trackable="image-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div
            className="o-teaser__image-placeholder"
            style={{ paddingBottom: "56.2500%" }}
          >
            {imageUrl && (
              <img className="o-teaser__image" src={imageUrl} alt="Article" />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Article;

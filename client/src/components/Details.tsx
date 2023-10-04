import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageUrl } from "../utils/getImageUrl";
import { IArticle } from "../interfaces/artticleInterface";
import { fetchDetails } from "../utils/fetchDetails";

function Details() {
  const [article, setArticle] = useState<IArticle[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchArticle() {
      try {
        const response = await fetchDetails(id);
        setArticle(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, [id]);

  function extractTextFromXML(node: Node, count: number) {
    let text = "";

    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }

    if (node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        text += extractTextFromXML(node.childNodes[i], count);
      }
    }
    return text;
  }

  const selectedArticle = article.length > 0 ? article[0] : null;
  const bodyText: { [key: string]: string } = {};

  if (selectedArticle && selectedArticle.bodyXML) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(
      selectedArticle.bodyXML,
      "application/xml"
    );

    let tagCount = 1;

    const rootNode = xmlDoc.documentElement;
    for (let i = 0; i < rootNode.childNodes.length; i++) {
      const tagText = extractTextFromXML(rootNode.childNodes[i], tagCount);
      if (tagText) {
        bodyText[`bodyText${tagCount}`] = tagText.trim();
        tagCount++;
      }
    }
  }

  const imageUrl = selectedArticle ? getImageUrl(selectedArticle) : "";
  const title = selectedArticle ? selectedArticle.title : "";

  return (
    <>
      <div
        className="o-teaser o-teaser--package o-teaser--hero o-teaser--centre o-teaser--has-image js-teaser"
        data-id=""
      >
        <div className="o-teaser__content">
          <div className="o-teaser__meta">
            <Link
              className="o-teaser__tag"
              data-trackable="teaser-tag"
              to="https://www.ft.com/magazine"
              aria-label="Category: FT Magazine"
            >
              FT Magazine
            </Link>
          </div>
          <div className="o-teaser__heading">
            <p>{title}</p>
            <p className="o-layout__main o-layout-typography">
              {bodyText.bodyText1}
            </p>
          </div>
        </div>
        <div className="o-teaser__image-container js-teaser-image-container">
          <div
            className="o-teaser__image-placeholder"
            style={{ paddingBottom: "56.2500%" }}
          >
            <img className="o-teaser__image" src={imageUrl} alt="" />
          </div>
        </div>
      </div>

      <div className="o-layout" data-o-component="o-layout">
        <div className="o-layout__main o-layout-typography">
          <div data-o-component="o-syntax-highlight"></div>
          <div className="o-layout__main o-layout-typography">
            <div data-o-component="o-syntax-highlight">
              <h1 id="an-example-documentation-layout">Read All</h1>
              <div className="o-editorial-layout-wrapper">
                {Object.keys(bodyText).map((key) => (
                  <p key={key}>{bodyText[key]}</p>
                ))}

                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ullam vero cum voluptatem eius dolor?
                  </p>
                  <cite>Lorem, ipsum.</cite>
                </blockquote>

                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quaerat!
                  </p>
                  <footer>
                    <cite>Lorem, ipsum dolor.</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

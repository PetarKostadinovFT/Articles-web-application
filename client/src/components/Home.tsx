import React, { useEffect, useRef } from "react";
import Article from "./Article";
import _ from "lodash";
import { useAuth } from "../context/userContext";
import useArticleFetch from "../utils/useArticleFetch";
import { Link } from "react-router-dom";

function Home(): JSX.Element {
  const { isAuthenticated } = useAuth();

  const {
    allArticles,
    queryString,
    handleSearchChange,
    fetchArticles,
    pageNumber,
    setCurrPage,
  } = useArticleFetch();

  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (queryString) {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }

      delayTimerRef.current = setTimeout(() => {
        fetchArticles();
      }, 1000);
    } else {
      fetchArticles();
    }

    return () => {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [queryString, isAuthenticated, pageNumber]);

  const handleNextPage = () => {
    setCurrPage(pageNumber + 1);
  };

  const handlePrevPage = () => {
    setCurrPage(pageNumber - 1);
  };

  return (
    <>
      <div className="o-layout" data-o-component="o-layout">
        <div className="o-layout__header"></div>
        <div className="o-layout__main o-layout-typography">
          <div data-o-component="o-syntax-highlight">
            <div className="col-md-4">
              <div className="sidebar pt-4">
                <h3>Search News</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={queryString}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
            <br className="demo-break" />
            <br className="demo-break" />
            <h3 id="sub-section-2">Latest News</h3>
            <div>
              <div className="row">
                {allArticles.map((article) => (
                  <Article key={article.id} article={article} />
                ))}
              </div>
              {/* Pagination controls */}
              <div className="o-buttons-pagination">
                <button
                  onClick={handlePrevPage}
                  className="o-buttons o-buttons--big o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only"
                  disabled={pageNumber === 1}
                >
                  <span className="o-buttons-icon__label">
                    Previous results
                  </span>
                </button>
                {[0, 1, 2, 3, 4, 5].map((pageNumber) => (
                  <Link
                    to="#"
                    key={pageNumber}
                    className={`o-buttons o-buttons--big o-buttons--secondary ${
                      pageNumber * 6 === pageNumber ? "active" : ""
                    }`}
                    onClick={() => setCurrPage(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </Link>
                ))}
                <button
                  onClick={handleNextPage}
                  className="o-buttons o-buttons--big o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only"
                  disabled={pageNumber === 6}
                >
                  <span className="o-buttons-icon__label">Next results</span>
                </button>
              </div>
              <br className="demo-break" />
            </div>
            <h2 id="tables">Tables</h2>
            <p>
              The
              <code>table</code>
              element spans both columns automatically, but we recommend you use
              a responsive
              <Link to="https://registry.origami.ft.com/components/o-table">
                o-table
              </Link>
              and apply the
              <code>o-layout__main__full-span</code>
              class.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              rem libero inventore ab nisi pariatur!
            </p>
            <blockquote>
              <p>
                Blockquote... lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Omnis ea suscipit iusto perspiciatis harum,
                qui maxime necessitatibus facilis, quo natus rem accusamus
                autem! Magnam pariatur, perferendis molestiae et tenetur
                repudiandae.
              </p>
              <footer>by Origami Team</footer>
            </blockquote>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              doloribus eum maiores dolor ipsam expedita aut rerum animi soluta
              veritatis eaque quia quisquam, ratione tenetur facere iste cum
              quos? Repudiandae?
            </p>
            <div className="o-layout__main__full-span">
              <div className="o-table-container">
                <div className="o-table-overlay-wrapper">
                  <div className="o-table-scroll-wrapper">
                    <table
                      className="o-table o-table--horizontal-lines o-table--responsive-overflow"
                      data-o-component="o-table"
                      data-o-table-responsive="overflow"
                    >
                      <thead>
                        <tr>
                          <th scope="col" role="columnheader">
                            Fruit
                          </th>
                          <th scope="col" role="columnheader">
                            Genus
                          </th>
                          <th scope="col" role="columnheader">
                            Characteristic
                          </th>
                          <th
                            scope="col"
                            role="columnheader"
                            data-o-table-data-type="numeric"
                            className="o-table__cell--numeric"
                          >
                            Cost (GBP)
                          </th>
                          <th
                            scope="col"
                            role="columnheader"
                            data-o-table-data-type="numeric"
                            className="o-table__cell--numeric"
                          >
                            Cost (EUR)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dragonfruit</td>
                          <td>Stenocereus</td>
                          <td>Juicy</td>
                          <td className="o-table__cell--numeric">3</td>
                          <td className="o-table__cell--numeric">2.72</td>
                        </tr>
                        <tr>
                          <td>Durian</td>
                          <td>Durio</td>
                          <td>Smelly</td>
                          <td className="o-table__cell--numeric">1.75</td>
                          <td className="o-table__cell--numeric">1.33</td>
                        </tr>
                        <tr>
                          <td>Naseberry</td>
                          <td>Manilkara</td>
                          <td>Chewy</td>
                          <td className="o-table__cell--numeric">2</td>
                          <td className="o-table__cell--numeric">1.85</td>
                        </tr>
                        <tr>
                          <td>Strawberry</td>
                          <td>Fragaria</td>
                          <td>Sweet</td>
                          <td className="o-table__cell--numeric">1.5</td>
                          <td className="o-table__cell--numeric">1.69</td>
                        </tr>
                        <tr>
                          <td>Apple</td>
                          <td>Malus</td>
                          <td>Crunchy</td>
                          <td className="o-table__cell--numeric">0.5</td>
                          <td className="o-table__cell--numeric">0.56</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-layout__footer"></div>
      </div>
    </>
  );
}

export default Home;

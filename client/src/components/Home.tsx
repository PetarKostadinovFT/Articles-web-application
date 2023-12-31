import Article from "./Article";
import TopBaner from "./TopBaner";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Loading from "../helpersComponent/Loading";
import { useArticleData } from "../customHooks/useArticleData";
import "../styles/home.scss";

function Home() {
  window.scrollTo(0, 0);
  const {
    isLoading,
    isAuthenticated,
    currPage,
    allArticles,
    queryString,
    hasError,
    handleNextPage,
    handlePrevPage,
    handleSearchChange,
    totalPages,
  } = useArticleData();

  return (
    <>
      <div className="o-layout home" data-o-component="o-layout">
        <div className="o-layout__header"></div>
        <div className="o-layout__main ">
          {!isAuthenticated && <TopBaner />}
          <div data-o-component="o-syntax-highlight">
            {isAuthenticated && allArticles.length > 0 && (
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
            )}
            <br className="demo-break" />
            <br className="demo-break" />
            <h3 id="sub-section-2">Latest News</h3>
            <div>
              <div className="row articles">
                {isLoading && !hasError ? (
                  <Loading />
                ) : allArticles.length === 0 ? (
                  <Loading />
                ) : (
                  allArticles.map((article) => (
                    <Article key={article.id} article={article} />
                  ))
                )}
              </div>
              {/* Pagination controls */}
              {isAuthenticated && allArticles.length > 0 && (
                <Pagination
                  currPage={currPage}
                  totalPages={totalPages}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                />
              )}
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
              <p>{}</p>
              <footer>by Origami Team</footer>
            </blockquote>
            <p>{}</p>
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

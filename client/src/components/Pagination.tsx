import { Link, useParams } from "react-router-dom";

interface PaginationProps {
  currPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

function Pagination({
  currPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) {
  const { pageNumber } = useParams();
  const pageFromUrl = Number(pageNumber);
  let dots: number | string = "...";
  if (pageFromUrl > 7) {
    totalPages = 7;
  }
  let pagesToShow: (number | string)[] = [1, 2, 3, 4, 5];
  pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
  if (pageFromUrl > totalPages) {
    pagesToShow = Array.from(
      { length: totalPages },
      (_, i) => i + pageFromUrl - totalPages + 1
    );
  }

  if (pageFromUrl > 6) {
    pagesToShow.splice(3, 1, dots);
    pagesToShow.splice(0, 3, 1, 2, 3);
  }
  dots = pageFromUrl - 3;
  return (
    <div className="o-buttons-pagination">
      <button
        onClick={handlePrevPage}
        className="o-buttons o-buttons--big o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only"
        disabled={pageFromUrl === 1}
      >
        <span className="o-buttons-icon__label">Previous results</span>
      </button>
      {pagesToShow.map((pageNumber) =>
        pageNumber === "..." ? (
          <span
            key={"987654321"}
            className="o-buttons-pagination__ellipsis o-buttons-pagination__ellipsis--big"
          >
            ...
          </span>
        ) : (
          <Link
            to={`/articles/page/${pageNumber}`}
            key={pageNumber}
            className={`o-buttons o-buttons--big o-buttons--secondary `}
            onClick={() => handleNextPage()}
          >
            {pageNumber}
          </Link>
        )
      )}

      <span
        key={"123456789"}
        className="o-buttons-pagination__ellipsis o-buttons-pagination__ellipsis--big"
      >
        ...
      </span>

      <Link
        to={`/articles/page/${666}`}
        key={pageNumber}
        className={`o-buttons o-buttons--big o-buttons--secondary `}
        onClick={() => handleNextPage()}
      >
        {Number(666)}
      </Link>
      <button
        disabled={pageFromUrl === 666}
        onClick={handleNextPage}
        className="o-buttons o-buttons--big o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only"
      >
        <span className="o-buttons-icon__label">Next results</span>
      </button>
    </div>
  );
}

export default Pagination;

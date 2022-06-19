import "./Pagination.css";

export default function Pagination({
  currentPage,
  numOfPages,
  onPrev,
  onNext,
}) {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === numOfPages;

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        disabled={prevDisabled}
        onClick={onPrev}
      >
        &lt;
      </button>
      <span className="pagination__counter">
        {currentPage}
        <span className="pagination__counter--slash">/</span>
        {numOfPages}
      </span>
      <button
        className="pagination__button"
        disabled={nextDisabled}
        onClick={onNext}
      >
        &gt;
      </button>
    </div>
  );
}

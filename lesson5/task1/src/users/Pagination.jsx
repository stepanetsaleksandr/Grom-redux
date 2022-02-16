import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems }) => {
  const isPrevPageAvaible = currentPage + 1 !== 1;
  const isNextPageAvaible = (currentPage + 1) * 3 < totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvaible}>
        {isPrevPageAvaible && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvaible}>
        {isNextPageAvaible && "→"}
      </button>
    </div>
  );
};

export default Pagination;

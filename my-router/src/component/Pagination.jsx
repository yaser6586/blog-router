import PropTypes from "prop-types";

function Pagination({ totalPosts, postPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center  items-center">
      <div className=" join  m-auto">
        {pageNumbers.map((numbers) => (
          <button
            onClick={() => paginate(numbers)}
            key={numbers}
            className={
              currentPage === numbers
                ? "join-item btn bg-slate-800 "
                : "join-item btn"
            }
          >
            {numbers}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
Pagination.propTypes = {
  totalPosts: PropTypes.number,
  postPerPage: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

import PropTypes from "prop-types";

function Pagination({ totalPosts, postPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex join ">
      {pageNumbers.map((numbers) => (
        <button
          onClick={() => paginate(numbers)}
          key={numbers}
          className="join-item btn"
        >
          {numbers}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
Pagination.propTypes = {
  totalPosts: PropTypes.number,
  postPerPage: PropTypes.number,
  paginate: PropTypes.func,
};

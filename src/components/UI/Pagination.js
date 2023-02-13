import classes from "./Pagination.module.css";

const Pagination = (props) => {
  let pages = [];
  let i;
  for (i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={classes.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => props.setCurrentPage(page)}
            className={page === props.currentPage ? classes.active : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

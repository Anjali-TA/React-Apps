import classes from "./ItemsSummary.module.css";

const ItemsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Amazing Products, Delivered To You</h2>
      <p>
        Choose your favourite product from our broad range of available items
        and make yourself comfortable.
      </p>
      <p>
        All the items available are best in quality.
      </p>
    </section>
  );
};

export default ItemsSummary;

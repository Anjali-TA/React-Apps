import Input from "../UI/Input";
import classes from "./ItemFilter.module.css";

const ItemFilter = (props) => {
  const priceRadioClickHandler = event => {
    console.log(event.target.value);
    props.onChangePriceFilter(event.target.value);
  }
  return (
    <>
    <h4> Filter By Price:</h4>
    <div className={classes.controls}>
      <Input
        label="Low to High"
        onClick= {priceRadioClickHandler}
        input={{
          id: "price-low",
          type: "radio",
          name: "price",
          value: "LH",
          className: "radio",
        }}
      />
      <Input
        label="High to Low"
        onClick = {priceRadioClickHandler}
        input={{
          id: "price-high",
          type: "radio",
          name: "price",
          value: "HL",
          className: "radio"
        }}
      />
    </div>
    </>
  );
};

export default ItemFilter;

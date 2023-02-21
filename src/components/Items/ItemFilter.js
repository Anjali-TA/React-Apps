import Input from "../UI/Input";
import classes from "./ItemFilter.module.css";

const ItemFilter = (props) => {
  const priceRadioClickHandler = event => {
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
          checked: props.filterVal === "LH"
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
          className: "radio",
          checked: props.filterVal === "HL"
        }}
      />
    </div>
    </>
  );
};

export default ItemFilter;

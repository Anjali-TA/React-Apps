import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ItemForm.module.css";

const ItemForm = (props) => {
  const amountInputRef = useRef();
  const [selectedSize, setSelectedSize] = useState("");

  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidSize, setIsValidSize] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValidSize(true);
    setIsValidAmount(true);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    if (selectedSize.trim().length === 0) {
      setIsValidSize(false);
      return;
    }
    props.onAddToCart({ amount: enteredAmountNumber, size: selectedSize });
    setSelectedSize("");
  };
  const radioClickHandler = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>

      <div className={classes.controls}>
        {props.availableSizes.map((val) => (
          <Input
            key={val + props.id}
            label={val}
            onChange={radioClickHandler}
            input={{
              id: val + props.id,
              type: "radio",
              value: val,
              name: "size" + props.id,
              checked: selectedSize === val,
              className: "radio",
            }}
          />
        ))}
      </div>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please Enter a valid amount (1-5). </p>}
      {!isValidSize && <p>Please select size </p>}
    </form>
  );
};
export default ItemForm;

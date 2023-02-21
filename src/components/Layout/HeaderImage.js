import shoppingImage from "../../assets/shopping.webp";
import classes from "./Header.module.css";

const HeaderImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={shoppingImage} alt="A shopping website!" />
    </div>
  );
};
export default HeaderImage;

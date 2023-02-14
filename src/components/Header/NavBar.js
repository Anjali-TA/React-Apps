import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <Card >
      <header className={styles.header}>
      {/* <h2> Hey, {props.username}</h2> */}
        <nav>
          <ul>
            <li>
              <NavLink className = {({isActive}) => isActive ? styles.active : undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className = {({isActive}) => isActive ? styles.active : undefined} to="/contact">Contact Us</NavLink>
            </li>
            <button onClick={props.onLogout}> Logout</button>
          </ul>
        </nav>
      </header>
    </Card>
  );
};
export default NavBar;

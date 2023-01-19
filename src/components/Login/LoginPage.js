import Card from "../UI/Card";
import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  return (
    <Card className={styles.login}>
      <h2> Hey, Login To shortend App</h2>
      <div id="signInDiv"></div>
    </Card>
  );
};

export default LoginPage;

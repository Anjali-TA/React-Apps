import { useState } from "react";
import styles from "./LinkForm.module.css";

const LinkForm = (props) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [linkIsTouched, setLinkIsTouched] = useState(false);
  const enteredLinkIsValid =
    link.trim() !== "" &&
    link.match(
      /(http(s)?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|http(s)?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
  const enteredLinkIsInvalid = !enteredLinkIsValid && linkIsTouched;

  const linkChangeHandler = (event) => {
    setLink(event.target.value);
  };
  const linkBlurHandler = (event) => {
    setLinkIsTouched(true);
  };
  async function shortenLinkHandler() {
    /*  Checking API for shortening URL */
    try {
      setLinkIsTouched(true);
      setError(null);
      if (link.trim().length === 0) {
        return;
      }
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=" + link
      );
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const result = {
        id: Math.random().toString(),
        original_link: data.result.original_link,
        short_link: data.result.short_link,
      };
      props.addShortUrl(result);
      setLink("");
      setLinkIsTouched(false);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section>
      <form>
        <div className={styles["form-control"]}>
          <label>Enter URL</label>
          <input
            type="text"
            value={link}
            onChange={linkChangeHandler}
            onBlur={linkBlurHandler}
          />
        </div>
        {enteredLinkIsInvalid && <p className={styles['error-text']}>Please enter valid URL.</p>}
        {error && <p className={styles['error-text']}>{error}</p>}
        <button type="button" onClick={shortenLinkHandler}>
          Shorten Url
        </button>
      </form>
    </section>
  );
};
export default LinkForm;

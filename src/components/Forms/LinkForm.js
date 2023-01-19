import { useState } from "react";
import styles from "./LinkForm.module.css";

const LinkForm = (props) => {
  const [link, setLink] = useState("");

  const linkChangeHandler = (event) => {
    setLink(event.target.value);
  };

  async function shortenLinkHandler() {
    /*  Checking API for shortening URL */
    if(link.trim().length === 0){
      return;
    }
    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + link
    );
    const data = await response.json();
    const result = {
      id: Math.random().toString(),
      original_link: data.result.original_link,
      short_link: data.result.short_link,
    };
    props.addShortUrl(result);
    setLink("");
  }

  return (
    <section>
      <form>
        <div className={styles["form-control"]}>
          <input type="text" value={link} onChange={linkChangeHandler} />
        </div>
        <button type="button" onClick={shortenLinkHandler}>
          Shorten Url
        </button>
      </form>
    </section>
  );
};
export default LinkForm;

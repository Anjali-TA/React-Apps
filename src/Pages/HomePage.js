import { useOutletContext } from "react-router-dom";
import LinkForm from "../components/Forms/LinkForm";
import LinksList from "../components/Links/LinksList";

function HomePage() {
  const [shortenedUrls, setShortenedUrl] = useOutletContext();

  const addShortUrlsHandler = (url) => {
    setShortenedUrl((prevState) => {
      return [url, ...prevState];
    });
  };

  return (
    <>
      <LinkForm addShortUrl={addShortUrlsHandler} />
      <section>
        {shortenedUrls.length > 0 && <LinksList links={shortenedUrls} />}
        {shortenedUrls.length === 0 && <p>Found No Shortened Links.</p>}
      </section>
    </>
  );
}

export default HomePage;

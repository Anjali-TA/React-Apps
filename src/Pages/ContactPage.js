import classes from "./ContactPage.module.css";
function ContactPage() {
  return (
    <section>
      <div className={classes["address"]}>
        <h2>Contact Us</h2>
        <p>RMZ Millenia Business Park-2</p>
        <p>Chennai,India</p>
      </div>

      <form>
        <div className={classes["form-control"]}>
          <label>Your Email</label>
          <input />
          <label>Your Question</label>
          <textarea rows="4" cols="50" />
          <button type="button">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;

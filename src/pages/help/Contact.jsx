import { Form, redirect, useActionData } from "react-router";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST">
        <label>
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

const contactAction = async ({ request }) => {
  const data = await request.formData();
  console.log(request);
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }
  return redirect("/");
};

export default Contact;

export { contactAction };

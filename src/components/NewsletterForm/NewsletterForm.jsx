/* eslint-disable prettier/prettier */
import { useState } from 'react';
// Services
import { newsletterService } from '../../services/api/newsletter/newsletter.service';

const defaultNewsletterField = {
  email: '',
};

function NewsletterForm() {
  const [emailField, setEmailField] = useState(defaultNewsletterField);
  const { email } = emailField;

  const handleFormInputChange = async (event) => {
    // setHasMsg(false)
    const { name, value } = event.target;
    const emailInput = { ...emailField, [name]: value };
    setEmailField(emailInput);
    // console.log(event.target.value);
  };

  // Sets the form to it's initial state in the original object.
  const resetFormFields = () => {
    setEmailField(defaultNewsletterField);
  };

  const handleSubmit = async (e) => {
    // setLoading(true)
    console.log('submitting');
    e.preventDefault();

    try {
      await newsletterService
        .subscribe({ email })
        .then((res) => {
          console.log(res);
          resetFormFields();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      console.log('Error Subscribing User:', error, 'App');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <iframe
          id="SubscriptionForm"
          title="This is a unique title"
          src="https://embeds.beehiiv.com/0890e8d8-e651-43a8-8a83-c25835c05402?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: 0,
            backgroundColor: 'transparent',
          }}
        ></iframe> */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleFormInputChange}
          />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default NewsletterForm;

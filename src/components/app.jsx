import React, { useState } from "react";
import { ContactForm } from "./contact-form";
import { Message } from "./message";
import { UserPanel } from "./user-panel";

const CONTACT_FORM_DEFAULTS = {
  name: "",
  email: "",
  option: "A",
  select: "1",
  message: "",
  terms: false,
};

export const App = () => {
  const [isContactSent, setIsContactSent] = useState(false);
  const [contact, setContact] = useState(CONTACT_FORM_DEFAULTS);
  const [currentUser, setCurrentUser] = useState(null);

  const contactChanged = (field, value) =>
    setContact((prevContact) => ({ ...prevContact, [field]: value }));

  const sendContact = (newContact) => {
    setIsContactSent(true);
  };

  const logIn = () =>
    setCurrentUser({
      name: "Test User",
      email: "user@example.com",
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="pull-right">
            <button className="btn btn-default" onClick={logIn}>
              <i className="glyphicon glyphicon-user"></i> Log In
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">{currentUser && <UserPanel user={currentUser} />}</div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2>Contact us</h2>
          <p>Please fill in the form on the right to get a fast reply</p>
          <img
            style={{ width: "100%" }}
            src="http://via.placeholder.com/300x200"
            alt="placeholder"
          />
        </div>

        <div className="col-md-8">
          <ContactForm data={contact} onChange={contactChanged} onSubmit={sendContact} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {isContactSent && (
            <Message
              title="Thank you for contacting us!"
              message="Your message has been sent successfully. We will get back to you soon."
            />
          )}
        </div>
      </div>
    </div>
  );
};

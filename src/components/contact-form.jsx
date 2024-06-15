import React from "react";
import { object, func } from "prop-types";

const defaultData = {
  name: "",
  email: "",
  option: "",
  select: "",
  message: "",
  terms: false,
};

const radioOptions = [
  { id: "A", label: "Option A" },
  { id: "B", label: "Option B" },
  { id: "C", label: "Option C" },
];

const selectOptions = [
  { id: "1", label: "I have question about my membership" },
  { id: "2", label: "I have technical question" },
  { id: "3", label: "I would like to change membership" },
  { id: "4", label: "Other question" },
];

export const ContactForm = ({ data = defaultData, onChange, onSubmit }) => {
  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    onChange(target.name, value);
  };

  const isSelected = (key, option) => {
    return data[key] === option;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
      <h3>Contact Form</h3>

      <div className="form-group">
        <label htmlFor="input-name" className="form-label">
          Your Name:
        </label>
        <input
          id="input-name"
          name="name"
          className="form-control"
          value={data.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-email" className="form-label">
          Your Best Email:
        </label>
        <input
          id="input-email"
          name="email"
          className="form-control"
          value={data.email}
          onChange={handleChange}
        />
      </div>

      <label className="form-label">Select your membership option:</label>
      <div className="form-group row">
        {radioOptions.map((opt) => (
          <label key={opt.id} htmlFor={`input-option-${opt.id}`} className="form-label col-xs-4">
            <input
              id={`input-option-${opt.id}`}
              type="radio"
              name="option"
              value={opt.id}
              checked={isSelected("option", opt.id)}
              onChange={handleChange}
            />
            {opt.label}
          </label>
        ))}
      </div>

      <hr />

      <div className="form-group">
        <label htmlFor="input-select" className="form-label">
          What can we help you with:
        </label>
        <select
          id="input-select"
          className="form-control"
          name="select"
          value={data.select}
          onChange={handleChange}
        >
          {selectOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="input-message" className="form-label">
          Message:
        </label>
        <textarea
          id="input-message"
          name="message"
          rows="10"
          placeholder="Please type your question here"
          className="form-control"
          value={data.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-terms" className="form-label">
          <input
            id="input-terms"
            type="checkbox"
            name="terms"
            checked={data.terms}
            onChange={handleChange}
          />{" "}
          I agree to terms and conditions
        </label>
      </div>

      <button type="submit" className="contactform-submit">
        Send
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  data: object.isRequired,
};

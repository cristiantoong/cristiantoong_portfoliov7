import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Heading } from "../globalStyles";

import { useForm, ValidationError } from "@formspree/react";

import { client } from "../client.js";

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [state, handleSubmit] = useForm("xjvzwdqa");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "contact"]{
        para1,
        para2,
        emailLink,
        email,
      }`
      )
      .then((data) => setContactData(data))
      .catch(console.error);
  }, []);

  if (state.succeeded) {
    return <p>The form was submitted successfully.</p>;
  }

  return (
    <>
      <ContactContainer id="contact">
        <Heading>Contact</Heading>

        <ContactMain>
          {contactData &&
            contactData.map((item, index) => {
              return (
                <ContactLeft key={index}>
                  <p>{item.para1}</p>
                  <p>{item.para2}</p>
                  <a
                    href={`mailto:${item.emailLink}`}
                    className="email-address"
                  >
                    email: {item.email}
                  </a>
                </ContactLeft>
              );
            })}

          <ContactRight>
            <ContactForm>
              {/* <form action="https://formspree.io/f/mgeqvzgb" className="contact__form-main" method="POST" data-netlify="true" id="form">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit" value="Send">Submit</button>
            </form> */}

              <form
                onSubmit={handleSubmit}
                className="contact__form-main"
                id="form"
              >
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </ContactForm>
          </ContactRight>
        </ContactMain>
      </ContactContainer>
    </>
  );
};

export default Contact;

//container
const ContactContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 4rem;
  max-width: 1600px;
`;

const ContactMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1160px) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContactLeft = styled.div`
  width: 40%;
  margin-top: 2rem;
  & > * {
    margin-bottom: 2rem;
    font-weight: 300;
  }

  a {
    color: #329345;
    font-weight: 500;
  }
  @media screen and (max-width: 1160px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// const ContactEmailAddress = styled.div`
//   font-weight: 400;
// `;

const ContactRight = styled.div`
  width: 40%;
  @media screen and (max-width: 1160px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.div`
  form {
    input {
      width: 100%;
      display: block;
      margin-bottom: 40px;
      border: none;
      outline: none;
      padding: 14px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 1rem;
      margin-top: 10px;
      background-color: #0d0d0b;
      border-radius: 2px;
    }
    label {
      width: 100%;
      font-weight: 300;
    }
    textarea {
      width: 100%;
      resize: none;
      display: block;
      margin-bottom: 30px;
      border: none;
      outline: none;
      padding: 14px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 1rem;
      margin-top: 10px;
      background-color: #0d0d0b;
      border-radius: 2px;
    }
    button {
      width: 100%;
      display: block;
      border: none;
      outline: none;
      padding: 16px;
      background: #329345;
      border: none;
      border-radius: 2px;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

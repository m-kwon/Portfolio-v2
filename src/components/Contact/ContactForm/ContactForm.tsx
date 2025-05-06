import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RandomReveal } from 'react-random-reveal';
import { ignoreCharacters, revealCharacters } from '../../../utils/utils';
import LanguageContext from '../../../contexts/LanguageContext';
import { getContactFormText, getSendButtonText } from '../getContactText';
import './ContactForm.css';

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactForm: React.FC<Props> = ({
  setShowPopup,
  setPopupMessage,
}: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const { language } = useContext(LanguageContext);
  const { nameText, emailText, messageText } = getContactFormText(language);
  const sendButtonText = getSendButtonText(language);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if already submitting or form is invalid
    if (isSubmitting || !form.current) return;

    setIsSubmitting(true);

    if (
      process.env.REACT_APP_SERVICE_ID &&
      process.env.REACT_APP_TEMPLATE_ID &&
      process.env.REACT_APP_PUBLIC_KEY
    ) {
      // Log to confirm environment variables are loaded
      console.log('Sending email with EmailJS...');

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setPopupMessage('Message sent!');
          setShowPopup(true);
          form.current?.reset();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setPopupMessage('Something went wrong!');
          setShowPopup(true);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      console.error('Missing EmailJS environment variables');
      setPopupMessage('Configuration error. Please contact the administrator.');
      setShowPopup(true);
      setIsSubmitting(false);
    }
  };

  return (
    <></>
    // <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
    //   <label>
    //     <RandomReveal
    //       isPlaying
    //       duration={1}
    //       characters={nameText}
    //       characterSet={revealCharacters}
    //       ignoreCharacterSet={ignoreCharacters}
    //     />
    //   </label>
    //   <input type="text" name="from_name" required />

    //   <label>
    //     <RandomReveal
    //       isPlaying
    //       duration={1}
    //       characters={emailText}
    //       characterSet={revealCharacters}
    //       ignoreCharacterSet={ignoreCharacters}
    //     />
    //   </label>
    //   <input type="email" name="from_email" required />

    //   <label>
    //     <RandomReveal
    //       isPlaying
    //       duration={1}
    //       characters={messageText}
    //       characterSet={revealCharacters}
    //       ignoreCharacterSet={ignoreCharacters}
    //     />
    //   </label>
    //   <textarea name="message" required />

    //   <button type="submit" disabled={isSubmitting}>
    //     <RandomReveal
    //       isPlaying
    //       duration={1}
    //       characters={sendButtonText}
    //       characterSet={revealCharacters}
    //       ignoreCharacterSet={ignoreCharacters}
    //     />
    //   </button>
    // </form>
  );
};
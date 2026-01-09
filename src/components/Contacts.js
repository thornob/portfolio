import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import emailjs from "emailjs-com";
import './Contacts.css';

function Contacts() {

  const [listContacts] = useState([
    { title: 'Email', value: 'nuretahsin5@gmail.com', link: 'mailto:nuretahsin5@gmail.com' },
    { title: 'LinkedIn', value: 'Nure Tahsin Mia', link: 'https://www.linkedin.com/in/nure-tahsin/' },
    { title: 'Phone Number', value: '+8801954260486', link: 'https://wa.me/8801954260486' },
    { title: 'Instagram', value: '__quietmuse__', link: 'https://www.instagram.com/__quietmuse__/' },
    { title: 'Facebook', value: 'Tahsin Ornob', link: 'https://www.facebook.com/tahsin.ornob.07/' },
    { title: 'Twitter', value: 'Tahsin Ornob', link: 'https://x.com/TahsinOrno76312' }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "service_8q80xa6";   // EmailJS Service ID
    const TEMPLATE_ID = "template_eybt9gb"; // EmailJS Template ID
    const PUBLIC_KEY = "4V1ggZ6IznTVDhoIN";   // EmailJS Public Key

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        alert("Message Sent Successfully! Check your Gmail.");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Check console for details.");
      });

    e.target.reset();
  };

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I’m always open to connecting! Whether you have a project, a collaboration idea, 
        or just want to say hello, feel free to reach out! 
      </div>

      <div className="contact-container">

        {/* LEFT SIDE: MESSAGE FORM */}
        <form 
          className="left-box" 
          onSubmit={sendEmail} 
          ref={(el) => el && divs.current.push(el)}
        >
          <h3>Write a Message</h3>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write your message..." required />

          <button type="submit">Send</button>
        </form>

        {/* RIGHT SIDE: SOCIAL LINKS */}
        <div className="right-box" ref={(el) => el && divs.current.push(el)}>
          <h3>Connect with me</h3>
          <div className="list">
            {listContacts.map((value, key) => (
              <a 
                className="social-item" 
                href={value.link} 
                key={key} 
                target="_blank" 
                rel="noreferrer"
              >
                <span className="label">{value.title}</span>
                <span className="value">{value.value}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacts;

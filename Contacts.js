import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+8801954260486',
      link: 'https://wa.me/8801954260486' 
    },
    {
      title: 'Email',
      value: 'nuretahsin5@gmail.com',
      link: 'mailto:nuretahsin5@gmail.com' 
    },
    {
      title: 'Instagram',
      value: '__quietmuse__',
      link: 'https://www.instagram.com/__quietmuse__/'
    },
    {
      title: 'Facebook',
      value: 'tahsin.ornob.07',
      link: 'https://www.facebook.com/tahsin.ornob.07/'
    },
    {
      title: 'Twitter',
      value: '@TahsinOrno76312',
      link: 'https://x.com/TahsinOrno76312'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I’m always open to connecting! Whether you have a project, a collaboration idea, or just want to say hello, feel free to reach out via phone, email, or social media. I’d love to hear from you!      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>{value.title}</h3>
            {value.link ? (
              <a href={value.link} target="_blank" rel="noopener noreferrer">
                {value.value}
              </a>
            ) : (
              <div>{value.value}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;

// src/components/ContactList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacts`);
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <Link to="/user-dashboard/add-contact" className="btn">Add Contact</Link>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <Link to={`/user-dashboard/contacts/${contact._id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

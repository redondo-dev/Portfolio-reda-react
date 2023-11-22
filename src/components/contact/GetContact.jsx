import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetContact = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
   
      const response = await axios.get('http://localhost/portfolio/messages.php');
      console.log(response.config);

      setContactData(response.data.data);
      console.log(response.data.data)

    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  return (
    <div>
      <h2>Contact Data</h2>
      {contactData && contactData.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Contenu</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.nom}</td>
                <td>{contact.email}</td>
                <td>{contact.contenu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contact data available</p>
      )}
    </div>
  );
};

export default GetContact;


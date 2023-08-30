import React, { useState } from 'react';
import {validateEmail} from '../utils/helpers';
function Form() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'fullName') {
            setFullName(inputValue);
          } else {
            setMessage(inputValue)
          }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || fullName) {
            setErrorMessage('Email or Contact Name is invalid');
            return;
            
        }
        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${fullName}`);
        setFullName('');
        setEmail('');
        setMessage('');
    };
 return (
    <div>
      <p>
        Contact me!
      </p>
      <form className="form">
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="FirstFull Name"
        />
       
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
 )
}
export default Form;
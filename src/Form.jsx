import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = (message, options) => toast(message, options);

const Form = () => {
  const [form, setForm] = useState({ username: '', age: '' });
  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validation(form);

    if (Object.keys(errors).length === 0) {
      notify('Form submitted successfully!', { icon: '✅', style: { background: '#4CAF50', color: '#fff' } });
    } else {
      notify('Form has errors. Please check and try again.', { icon: '❌', style: { background: '#FF4500', color: '#fff' } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setFormError((prevError) => ({ ...prevError, [name]: '' }));
  };

  const validation = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.username.length > 14) {
      errors.username = 'Maximum 14 characters allowed';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age < 18) {
      errors.age = 'Age must be 18 or older';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      {formError.username && <div>{formError.username}</div>}

      <label htmlFor="age">Age</label>
      <input type="text" name="age" value={form.age} onChange={handleChange} />
      {formError.age && <div>{formError.age}</div>}

      <button  type="submit" disabled={isSubmitting}>
        Add
      </button>
      <Toaster />
    </form>
  );
};

export default Form;

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Star from '../star/Star';

function Contact() {
  const [values, setValues] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value
    });
  };

  return (
    <div className="p-8 text-gray-800 flex flex-col justify-center items-center">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="max-w-4xl mt-20">
        <h1 className="text-4xl font-bold mb-6 text-center uppercase">Contact Us</h1>
      </div>
       <Star beforeClassName="bg-cyan-900 h-1" afterClassName="bg-cyan-900 h-1" colorText="text-cyan-900"/>
      <div className="inputs flex flex-col gap-y-11 lg:w-3/5 md:w-3/4 w-full">
        <div className="relative">
          <input
            id="userName"
            className="border-b outline-none pb-3 peer w-full"
            type="text"
            value={values.userName}
            onChange={handleChange}
            placeholder=" " 
          />
          <label
            htmlFor="userName"
            className={`absolute left-0 top-3 text-sm font-medium text-gray-700 transition-transform duration-300 transform ${values.userName ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100 peer-placeholder-shown:top-3'}`}
          >
            UserName
          </label>
        </div>
        <div className="relative">
          <input
            id="userAge"
            className="border-b outline-none pb-3 peer w-full"
            type="number"
            value={values.userAge}
            onChange={handleChange}
            placeholder=" "
          />
          <label
            htmlFor="userAge"
            className={`absolute left-0 top-3 text-sm font-medium text-gray-700 transition-transform duration-300 transform ${values.userAge ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100 peer-placeholder-shown:top-3'}`}
          >
            UserAge
          </label>
        </div>
        <div className="relative">
          <input
            id="userEmail"
            className="border-b outline-none pb-3 peer w-full"
            type="email"
            value={values.userEmail}
            onChange={handleChange}
            placeholder=" "
          />
          <label
            htmlFor="userEmail"
            className={`absolute left-0 top-3 text-sm font-medium text-gray-700 transition-transform duration-300 transform ${values.userEmail ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100 peer-placeholder-shown:top-3'}`}
          >
            UserEmail
          </label>
        </div>
        <div className="relative">
          <input
            id="userPassword"
            className="border-b outline-none pb-3 peer w-full"
            type="password"
            value={values.userPassword}
            onChange={handleChange}
            placeholder=" "
          />
          <label
            htmlFor="userPassword"
            className={`absolute left-0 top-3 text-sm font-medium text-gray-700 transition-transform duration-300 transform ${values.userPassword ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100 peer-placeholder-shown:top-3'}`}
          >
            UserPassword
          </label>
        </div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded w-fit">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;

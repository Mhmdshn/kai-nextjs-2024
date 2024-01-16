// components/RegisterForm.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { UserAuth } from '../../context/userAuth';
import { makeRequest } from '../../axios';
import { genderlist, islands } from './databases';

const RegisterForm = () => {

  const navigate = useNavigate()
  const { register } = UserAuth();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nid: '',
    fullname: '',
    currentaddress: '',
    currentisland: '',
    registeredaddress: '',
    registeredisland: '',
    dob: '',
    gender: '',
    useridcopy: '',
    phone: '',
    secret: '',
    created_at: Date.now().toString(),
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(inputs)

    try {
      setError(''); // Reset the error state
      if (inputs.password !== inputs.confirmPassword) {
        throw new Error("Passwords don't match");
      }

      console.log('TRYING TO SAVE')

      try {
        const resp = await register(inputs);
        console.log(resp)
        console.log('User stored in database');
      } catch (error) {
        throw new Error(error.message);
      }


      const userc = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
      console.log('GUser registered', userc);
      navigate("/login")
    } catch (error) {
      setError(error.message);
      console.error('Registration Error:', error.message);
      navigate("/login")
    }
  };

  return (<>
    <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Register</h2>

      <FormInput label="Email" type="email" id="email" handleChange={handleChange} />
      <FormInput label="Password" type="password" id="password" handleChange={handleChange} />
      <FormInput label="Confirm Password" type="password" id="confirmPassword" handleChange={handleChange} />
      <FormInput label="nid" type="text" id="nid" handleChange={handleChange} />
      <FormInput label="fullname" type="text" id="fullname" handleChange={handleChange} />
      <FormInput label="currentaddress" type="text" id="currentaddress" handleChange={handleChange} />
      <FormInputDropdown label="currentisland" type="text" id="currentisland" handleChange={handleChange} obj={islands} />
      <FormInput label="registeredaddress" type="text" id="registeredaddress" handleChange={handleChange} />
      <FormInputDropdown label="registeredisland" type="text" id="registeredisland" handleChange={handleChange} obj={islands} />
      <FormInput label="dob" type="date" id="dob" handleChange={handleChange} />
      <FormInputDropdown label="gender" type="text" id="gender" handleChange={handleChange} obj={genderlist} />
      <FormInput label="phone" type="number" id="phone" handleChange={handleChange} />
      <FormInput label="secret" type="text" id="secret" handleChange={handleChange} />
      <FormInput label="Attach Idcard copy" type="file" id="useridcopy" handleChange={handleChange} />



      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >Register </button>
    </form>
    <div>
      <Link className='bg-indigo-300 text-center rounded-xl flex justify-center m-9 text-black text-2xl' to={"/login"}>Login</Link >
    </div>
  </>

  );
};

export default RegisterForm;


function FormInput(props) {
  return <div className="mb-4">
    <label htmlFor={props.id} className="block text-gray-700 text-sm font-bold mb-2">
      {props.label}
    </label>
    <input
      type={props.type}
      id={props.id}
      name={props.id}
      className="w-full p-2 border rounded text-black"
      onChange={props.handleChange}
    />
  </div>
}

function FormInputDropdown(props) {
  return <div className="mb-4">
    <label htmlFor={props.id} className="block text-gray-700 text-sm font-bold mb-2">
      {props.label}
    </label>
    <select
      type={props.type}
      id={props.id}
      name={props.id}
      className="w-full p-2 border rounded text-black"
      onChange={props.handleChange}
    >
      <option value="choose">Choose.. </option>
      {props.obj &&
        eval(props.obj).map((item, i) => (
          <option key={i} id={item.id}>
            {item.body}
          </option>
        ))}
    </select>
  </div>
}

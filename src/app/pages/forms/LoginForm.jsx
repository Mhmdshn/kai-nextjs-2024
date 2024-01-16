// components/Login.js
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { auth } from '../../utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { UserAuth } from '../../context/userAuth';
import ForgotPasswordForm from './ForgotPasswordForm';




const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const { currentUser, gUser, setGUser, login } = UserAuth();

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset the error state
    await signInWithEmailAndPassword(auth, email, password);
    console.log('gUser logged in');
    setGUser({ email: email })
    try {
      const usercheck = await login({ email: email });
      if (usercheck) {
        console.log("logged in successfully")
        navigate("/")
      }

    } catch (error) {
      console.log("server login errror", error)
    }
  };

  if (gUser?.email) {
    return <div>
      <h2>Logged in as {gUser.email} id: {currentUser?.id}</h2>
      <Link className='bg-green-300 text-blue-600' to={"/"}>Click to goto Home</Link>
    </div>

  }

  return (<>
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-black">Login {gUser && gUser.email}</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="button"
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
      <div className="mt-4 text-center">
        <p className="text-sm">
          <Link href="#">
            <a
              className="text-blue-500 hover:underline"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </a>
          </Link>
        </p>
      </div>
      {showForgotPassword && <ForgotPasswordForm />}
    </div>
    <div>
      <Link className='bg-indigo-300 text-center rounded-xl flex justify-center m-9 text-black text-2xl' to={"/register"}>Register</Link >
    </div>
  </>

  );
};

export default LoginForm;

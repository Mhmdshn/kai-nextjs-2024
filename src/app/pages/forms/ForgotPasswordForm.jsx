// components/ForgotPasswordForm.js
import { useState } from 'react';
import { auth } from '../../utils/firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      setError(''); // Reset the error state

      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      setError(error.message);
      console.error('Forgot Password Error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-300 text-black rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>
      {resetSent ? (
        <p className="text-green-500 mb-4">Password reset email sent. Check your inbox.</p>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Reset Password
          </button>
        </>
      )}
    </div>
  );
};

export default ForgotPasswordForm;

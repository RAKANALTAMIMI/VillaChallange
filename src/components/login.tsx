import { useState } from 'react';
import { login, createToken } from '../utility/Auth';
import './login.css';
import toast from 'react-hot-toast';

type Props = {
  onLogin: (token: string) => void;
};

const Login = ({ onLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const performLogin = async (): Promise<string> => {
      const data = await login(email, password);

      if (!data.success) {
        throw new Error(data.message);
      }

      const token = createToken(email);
      sessionStorage.setItem('token', token);
      return token;
    };

    try {
      const token = await toast.promise(
        performLogin(),
        {
          loading: 'Signing in...',
          success: 'Logged in successfully',
          error: (err: Error) => err.message || 'Login failed',
        }
      );
      onLogin(token);
    } catch {

    } 
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
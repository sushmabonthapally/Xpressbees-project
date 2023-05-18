import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('LoginPage Component', () => {
  it('should render login form with username and password fields', () => {
    const { getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText('User');
    const passwordInput = getByLabelText('Password');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should update username state when username input value changes', () => {
    const { getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText('User');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    expect(usernameInput.value).toBe('testuser');
  });

  it('should update password state when password input value changes', () => {
    const { getByLabelText } = render(<Login />);
    const passwordInput = getByLabelText('Password');

    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(passwordInput.value).toBe('testpassword');
  });
});
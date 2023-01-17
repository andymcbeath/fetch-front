import React from "react";
import { Home } from "./src/Home.jsx";
import axios from 'axios'
import { render, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import jest from "@jest/globals"

jest.mock('axios')

jest.mock('axios', () => {
  return {
    get: jest.fn(),
    post: jest.fn()
  }
})

test('submits the form with the correct data', async () => {
  axios.get.mockReturnValueOnce({ data: { occupations: [], states: [] } });
  axios.post.mockReturnValue({ status: 201 });

  const { getByLabelText, getByText } = render(<Home />);

  const fullNameInput = getByLabelText("Full Name");
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  const occupationSelect = getByLabelText("Occupation");
  const stateSelect = getByLabelText("State");
  const submitButton = getByText("Submit");

  fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(occupationSelect, { target: { value: "Developer" } });
  fireEvent.change(stateSelect, { target: { value: "NY" } });
  fireEvent.click(submitButton);

  expect(axios.post).toHaveBeenCalledWith(
    "https://frontend-take-home.fetchrewards.com/form",
    {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      occupation: "Developer",
      state: "NY",
    }
  );
});

import React from "react";
import { Home } from "../Home.jsx";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

const axios = require('axios');
jest.mock('axios')
jest.mock('axios', () => {
  return {
    get: jest.fn(),
    post: jest.fn()
  }
})

test('submits the form with the correct data', async () => {
  axios.get.mockResolvedValueOnce({ data: { occupations: [], states: [] } });
  axios.post.mockResolvedValue({ status: 201 });

  const { getByLabelText, getByText } = render(<Home />);

  const fullNameInput = getByLabelText("Full Name");
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  const occupationSelect = getByLabelText("Occupation");
  const stateSelect = getByLabelText("State");
  const submitButton = getByText("Submit");

  await act(async () => {
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(occupationSelect, { target: { value: "Lazy-man" } });
    fireEvent.change(stateSelect, { target: { value: "NY - New Yrork" } });
    fireEvent.click(submitButton);
  });
  expect(axios.post).toHaveBeenCalledWith(
    "https://frontend-take-home.fetchrewards.com/form",
    {
      name: 'John Doe',
      email: "johndoe@example.com",
      password: "password123",
      occupation: "Developer",
      state: "NY",
    }
  );
});

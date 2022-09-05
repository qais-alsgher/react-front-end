import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test('can change name', async () => {
    render(<App />);
    const input = screen.getByTestId('parson-name');
    const name = screen.getByTestId('name');
    fireEvent.change(input, { target: { value: 'qais' } });
    expect(name).toHaveTextContent('My Name Is Qais');

});

test('change age', () => {
    render(<App />);
    const ageInput = screen.getByTestId('parson-age');
    const age = screen.getByTestId('age');
    fireEvent.change(ageInput, { target: { value: '22' } });
    expect(age).toHaveTextContent('I am 27 Years Old');

});

test('change gender', () => {
    render(<App />);
    const genderInput = screen.getByTestId('person-gender');
    const gender = screen.getByTestId('gender');
    fireEvent.change(genderInput, { target: { value: 'male' } });
    expect(gender).toHaveTextContent('I am male')
});

test('change five age', async () => {
    render(<App />);
    const ageInput = screen.getByTestId('parson-age');
    const newAge = screen.getByTestId('new-age');
    fireEvent.change(ageInput, { target: { value: '22' } });
    const submit = screen.getByTestId('Submit');
    fireEvent.click(submit);
    setTimeout(() => {
        expect(newAge).toHaveTextContent("New Age is 27")
    }, 1)

});
import React from "react";

export const Input = ({ type = 'text' }) => {
    return (
        <input type={type} required />
    );
};

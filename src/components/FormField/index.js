import React from "react";
import styled from 'styled-components';

const Form = styled.form`
    color: var(--white);
    flex:1;
    padding-top:15px;
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
    
`;

function FormField({ label, type, name, value, onChange }) {''
  return (
    <Form>
      <div>
        <label>
          {label}:&nbsp;
          <input
            required
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
      </div>
    </Form>
  )
}

export default FormField;
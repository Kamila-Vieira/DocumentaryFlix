import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const WapperFormfield = styled.div`
    position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }

`;
const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;

  @media only screen and (max-device-width: 800px) {
    font-size: 30px;
    margin-top: 2px;
  }
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px !important;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--gold);
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  @media only screen and (max-device-width: 800px) {
    height: 90px;  
  }
  
  &:focus {
    border-bottom-color: var(--black);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}
  
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const Tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <WapperFormfield>
      <Label htmlFor={fieldId}>
        <Input
          required="required"
          as={Tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete="off"
          list={hasSuggestions ? `suggestionFor_${fieldId}` : 'off'}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }
      </Label>
    </WapperFormfield>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;

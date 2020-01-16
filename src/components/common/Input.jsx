import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/*const styles = [
    "input--primary",
    "input--error",
    "input--success",
]*/
export const Input = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    ...props
  }) => {

    return (
        <React.Fragment>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={error && {border: 'solid 1px red'}}
          />
          { error && <p>{ error }</p>}
        </React.Fragment>
      )
    }
    
    Input.defaultProps = {
      type: "text",
      className: ""
    }
    
    Input.propTypes = {
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'email', 'password']),
      className: PropTypes.string,
      value: PropTypes.any,
      onChange: PropTypes.func.isRequired
    }

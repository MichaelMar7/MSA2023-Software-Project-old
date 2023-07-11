import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


/*
import PropTypes from "prop-types"

function Button( {label, backgroundColor = "red", size = "md", handleClick }) {
    let scale = 1
    if (size == "sm") scale = 0.75
    const style = {
        backgroundColor,
        padding: `${scale*0.5}rem ${scale*1}rem`,
        border: "none"
    }
    return (
        <button onClick={handleClick} style={style}> {label} </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func
}

export default Button
*/

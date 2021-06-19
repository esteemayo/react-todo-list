import PropTypes from "prop-types";

const Button = ({ type, text, icon, onClick, ...rest }) => {
  return (
    <button {...rest} type={type} onClick={onClick}>
      {text} {icon}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

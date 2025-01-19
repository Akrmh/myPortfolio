import PropTypes from "prop-types"


const Button = ({buttonText, className, onClick}) => {
  return (
    <button className={className}
        onClick={onClick}
    >
        {buttonText}
    </button>
  )
}

Button.propTypes = {
    className: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
import Proptypes from 'prop-types'

// Defines a button component and catches its properties
function Button({ color, text, onClick }) {
    return (
        <button 
        onClick={onClick}
        style={{ backgroundColor: color }} 
        className='btn'>{ text }</button>
    )
}

// If properties not defined, default to this
Button.defaultProps = {
    color: 'steelblue',
    text: 'Hello'
}

// What are the proptypes available to Button 
Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func,
}

export default Button

// import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({ title }) => {

//    Function declaration
    const onClick = () => {
        alert('I have been clicked')
    }

    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button text='Add' color='green' onClick={onClick} />
       
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = { color: 'red', backgroundColor: 'black'}


export default Header

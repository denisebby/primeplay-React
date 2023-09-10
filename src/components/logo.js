import React from 'react'

import PropTypes from 'prop-types'

import './logo.css'

const Logo = (props) => {
  return (
    <div className={`logo-container ${props.rootClassName} `}>
      <h1 className="logo-text">{props.heading}</h1>
    </div>
  )
}

Logo.defaultProps = {
  rootClassName: '',
  heading: 'Prime Play Analytics',
}

Logo.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Logo

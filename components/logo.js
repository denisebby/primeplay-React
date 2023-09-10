import React from 'react'

import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <>
      <div className={`logo-container ${props.rootClassName} `}>
        <h1 className="logo-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .logo-container {
            display: flex;
            position: relative;
          }
          .logo-text {
            color: #025729;
            height: 2rem;
            font-size: 35px;
            font-style: normal;
            font-weight: 800;
          }

          @media (max-width: 767px) {
            .logo-text {
              font-size: 20px;
              align-self: center;
              text-align: center;
              text-transform: capitalize;
            }
          }
          @media (max-width: 479px) {
            .logo-text {
              font-size: 20px;
            }
            .logo-root-class-name1 {
              flex: 1;
            }
          }
        `}
      </style>
    </>
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

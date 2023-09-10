import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.text}</span>
        <span className="navigation-links1-text1">{props.text2}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            color: var(--dl-color-prime_play_analytics-headingcolors);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text1 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text2: 'Pricing',
  text3: 'Team',
  text4: 'Blog',
  text1: 'Features',
  rootClassName: '',
  text: 'About',
}

NavigationLinks1.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1

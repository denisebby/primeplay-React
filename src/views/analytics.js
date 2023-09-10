import React from 'react'

import { Helmet } from 'react-helmet'

import Logo from '../components/logo'
import NavigationLinks1 from '../components/navigation-links1'
import './analytics.css'

const Analytics = (props) => {
  return (
    <div className="analytics-container">
      <Helmet>
        <title>Analytics - prime_play</title>
        <meta property="og:title" content="Analytics - prime_play" />
      </Helmet>
      <header data-thq="thq-navbar" className="analytics-navbar-interactive">
        <Logo rootClassName="logo-root-class-name5"></Logo>
        <div data-thq="thq-navbar-nav" className="analytics-desktop-menu">
          <NavigationLinks1 rootClassName="navigation-links1-root-class-name9"></NavigationLinks1>
        </div>
        <div data-thq="thq-burger-menu" className="analytics-burger-menu">
          <svg viewBox="0 0 1024 1024" className="analytics-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="analytics-mobile-menu">
          <div className="analytics-nav">
            <div className="analytics-top">
              <div className="analytics-container1">
                <h1 className="analytics-text">Prime Play Analytics</h1>
              </div>
              <div data-thq="thq-close-menu" className="analytics-close-menu">
                <svg viewBox="0 0 1024 1024" className="analytics-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="analytics-links">
              <span className="analytics-text1">About</span>
              <span className="analytics-text2">Pricing</span>
            </nav>
            <div className="analytics-buttons"></div>
          </div>
          <div className="analytics-icon-group">
            <img
              alt="image"
              src="/external/x-twitter.svg"
              className="analytics-image"
            />
            <img
              alt="image"
              src="/external/tiktok.svg"
              className="analytics-image1"
            />
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="analytics-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="analytics-icon6"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="analytics-container2">
        <span className="analytics-text3 Heading2">
          Choose your teams below. We compare 2 teams. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. 
        </span>
      </div>
      <div className="analytics-selection">
        <div className="analytics-container3"></div>
        <div className="analytics-container4"></div>
      </div>
      <div className="analytics-dashboard"></div>
    </div>
  )
}

export default Analytics

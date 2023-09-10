import React from 'react'

import { Helmet } from 'react-helmet'

import Logo from '../components/logo'
import NavigationLinks1 from '../components/navigation-links1'
import FeatureCard2 from '../components/feature-card2'
import IconGroup from '../components/icon-group'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>prime_play</title>
        <meta property="og:title" content="prime_play" />
      </Helmet>
      <header data-role="Header" className="home-header-and-hero">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Logo rootClassName="logo-root-class-name4"></Logo>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <NavigationLinks1 rootClassName="navigation-links1-root-class-name8"></NavigationLinks1>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <div className="home-container1">
                  <h1 className="home-text">Prime Play Analytics</h1>
                </div>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links">
                <span className="home-text01">About</span>
                <span className="home-text02">Pricing</span>
              </nav>
              <div className="home-buttons"></div>
            </div>
            <div className="home-icon-group">
              <img
                alt="image"
                src="/external/x-twitter.svg"
                className="home-image"
              />
              <img
                alt="image"
                src="/external/tiktok.svg"
                className="home-image1"
              />
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <video
          src="https://media.istockphoto.com/id/658490836/video/american-football-player-jumps-with-a-ball.mp4?s=mp4-640x640-is&amp;k=20&amp;c=RUVuhO0uMhbJIQ8AjJ0I8FnAiQxP2lHW5aDQ4ewnDME="
          loop
          muted
          poster="https://images.unsplash.com/photo-1488423680352-79e37c24c59f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxhbWVyaWNhbiUyMGZvb3RiYWxsfGVufDB8fHx8MTY5NDI3OTI5MXww&amp;ixlib=rb-4.0.3&amp;h=1500"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero">
          <div className="home-container2">
            <h1
              poster="https://images.unsplash.com/photo-1488423680352-79e37c24c59f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxhbWVyaWNhbiUyMGZvb3RiYWxsfGVufDB8fHx8MTY5NDI3OTI5MXww&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="home-text03"
            >
              Master Your Game. Advanced NFL Analytics
            </h1>
            <span className="home-text04">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <button className="home-button button">Get Started</button>
          </div>
        </div>
      </header>
      <div className="home-features">
        <h1 className="home-text11">All these impressive features</h1>
        <div className="home-container3">
          <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-separator"></div>
        <div className="home-container4">
          <span className="home-text12">
            © 2023 Prime Play Analytics, All Rights Reserved.
          </span>
          <IconGroup></IconGroup>
        </div>
      </footer>
    </div>
  )
}

export default Home

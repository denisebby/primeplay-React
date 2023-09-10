import React from 'react'
import Head from 'next/head'

import Logo from '../components/logo'
import NavigationLinks1 from '../components/navigation-links1'
import FeatureCard2 from '../components/feature-card2'
import IconGroup from '../components/icon-group'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>prime_play</title>
          <meta property="og:title" content="prime_play" />
        </Head>
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
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon6"
                >
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
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header-and-hero {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 400;
            position: relative;
            max-width: 100%;
            margin-top: 0px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 3rem;
            padding-right: 3rem;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 1000;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            margin-left: 2rem;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-container1 {
            color: var(--dl-color-gray-white);
            display: flex;
            position: relative;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            height: 2rem;
            font-size: 35px;
            font-style: normal;
            font-weight: 800;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon-group {
            color: var(--dl-color-gray-white);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: 2rem;
          }
          .home-image1 {
            width: var(--dl-size-size-xsmall);
            height: 100%;
            object-fit: cover;
            margin-right: 2rem;
          }
          .home-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.8);
            height: 100%;
            z-index: 100;
            position: absolute;
            object-fit: cover;
            padding-top: -2px;
          }
          .home-hero {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 80vh;
            align-items: center;
            padding-top: 0rem;
            padding-left: 0rem;
            padding-right: 0rem;
            flex-direction: column;
            padding-bottom: 0rem;
            background-size: cover;
            justify-content: center;
            background-position: bottom;
          }
          .home-container2 {
            display: flex;
            z-index: 200;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: 5rem;
            padding-right: 5rem;
            flex-direction: column;
            padding-bottom: 0rem;
            justify-content: center;
          }
          .home-text03 {
            color: var(--dl-color-gray-black);
            z-index: 300;
            font-size: 3rem;
            max-width: 25rem;
          }
          .home-text04 {
            font-size: 1.15rem;
            max-width: 60%;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            box-shadow: 5px 5px 10px 10px #d4d4d4;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-success-500);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(
              --dl-color-prime_play_analytics-headingcolors
            );
          }
          .home-button:hover {
            color: var(--dl-color-prime_play_analytics-headingcolors);
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            background-color: var(--dl-color-gray-white);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text11 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .home-header-and-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-navbar-interactive {
              z-index: 1000;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              color: var(--dl-color-gray-white);
              height: var(--dl-size-size-xxlarge);
              z-index: 1000;
              background-color: var(--dl-color-success-700);
            }
            .home-text {
              color: var(--dl-color-prime_play_analytics-headingcolors);
              font-size: 20px;
              align-self: center;
              text-align: center;
              text-transform: capitalize;
            }
            .home-text01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text02 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-icon-group {
              gap: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-image {
              margin-right: 0px;
            }
            .home-image1 {
              margin-right: 0rem;
            }
            .home-icon4 {
              margin-right: 0px;
            }
            .home-hero {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .home-container2 {
              align-self: center;
              text-align: center;
              align-items: center;
            }
            .home-text03 {
              display: flex;
              text-align: center;
              justify-content: center;
            }
            .home-text04 {
              max-width: 100%;
              align-self: flex-start;
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text12 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-header-and-hero {
              padding: var(--dl-space-space-unit);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-text {
              font-size: 20px;
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-button {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text12 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

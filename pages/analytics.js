import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import Logo from '../components/logo'
import NavigationLinks1 from '../components/navigation-links1'

import ScatterPlotComponent from '../components/scatter_plot_component';  // Adjust the path accordingly.
import NFLDropdownComponent from '../components/dropdown_component';  // Adjust the path accordingly.


const Analytics = (props) => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const handleTeam1Change = (selectedTeam) => {
    setTeam1(selectedTeam);
  };

  const handleTeam2Change = (selectedTeam) => {
    setTeam2(selectedTeam);
  };

  return (
    <>
      <div className="analytics-container">
        <Head>
          <title>Analytics - prime_play</title>
          <meta property="og:title" content="Analytics - prime_play" />
        </Head>
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
          <div className="analytics-container3">
            <NFLDropdownComponent onTeamChange={handleTeam1Change} />
          </div>
          <div className="analytics-container4">
            <NFLDropdownComponent onTeamChange={handleTeam2Change} />
          </div>
        </div>
        <div className="analytics-dashboard">
          {/* <ScatterPlotComponent /> */}
          <ScatterPlotComponent  team1={team1} team2={team2} />
        </div>
      </div>
      <style jsx>
        {`
          .analytics-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .analytics-navbar-interactive {
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
          .analytics-desktop-menu {
            flex: 1;
            display: flex;
            margin-left: 2rem;
            justify-content: space-between;
          }
          .analytics-burger-menu {
            display: none;
          }
          .analytics-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .analytics-mobile-menu {
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
          .analytics-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .analytics-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .analytics-container1 {
            color: var(--dl-color-gray-white);
            display: flex;
            position: relative;
          }
          .analytics-text {
            color: var(--dl-color-gray-white);
            height: 2rem;
            font-size: 35px;
            font-style: normal;
            font-weight: 800;
          }
          .analytics-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .analytics-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .analytics-links {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .analytics-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .analytics-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .analytics-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .analytics-icon-group {
            color: var(--dl-color-gray-white);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .analytics-image {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: 2rem;
          }
          .analytics-image1 {
            width: var(--dl-size-size-xsmall);
            height: 100%;
            object-fit: cover;
            margin-right: 2rem;
          }
          .analytics-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .analytics-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .analytics-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .analytics-text3 {
            align-self: center;
            margin-top: 2rem;
            text-align: center;
            line-height: 1.15;
            margin-bottom: 2rem;
          }
          .analytics-selection {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .analytics-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-prime_play_analytics-headingcolors);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
          }
          .analytics-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-prime_play_analytics-headingcolors);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
          }
          .analytics-dashboard {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 767px) {
            .analytics-navbar-interactive {
              z-index: 1000;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .analytics-desktop-menu {
              display: none;
            }
            .analytics-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .analytics-mobile-menu {
              color: var(--dl-color-gray-white);
              height: var(--dl-size-size-xxlarge);
              z-index: 1000;
              background-color: var(--dl-color-success-700);
            }
            .analytics-text {
              color: var(--dl-color-prime_play_analytics-headingcolors);
              font-size: 20px;
              align-self: center;
              text-align: center;
              text-transform: capitalize;
            }
            .analytics-text1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .analytics-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .analytics-icon-group {
              gap: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .analytics-image {
              margin-right: 0px;
            }
            .analytics-image1 {
              margin-right: 0rem;
            }
            .analytics-icon4 {
              margin-right: 0px;
            }
            .analytics-text3 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .analytics-selection {
              flex-direction: column;
            }
            .analytics-container3 {
              width: 100%;
            }
            .analytics-container4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .analytics-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .analytics-mobile-menu {
              padding: 16px;
            }
            .analytics-text {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Analytics

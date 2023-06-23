import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

import './index.scss'

import { AnimatedLetters } from '../AnimatedLetters/index'

import { Logo } from '../Logo/index'
import Loader from 'react-loaders'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'A',
    'd',
    'r',
    'i',
    'a',
    'n',
    'o',
    '',
    'J',
    'u',
    'c',
    'a',
    'n',
  ]
  const jobArray = [
    'W',
    'e',
    'b ',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={14}
            />
            <img src={LogoTitle} alt="developer" />
            <br />
          </h1>
          <br />
          <br />
          <h2>Frontend Developer / Java Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Jianhua Cheng`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by Jianhua Cheng who lives and works in Shanghai. Try to build
          something more attractive and interesting.

          You can follow him on{' '}
          <a target="_blank" href="https://twitter.com/jianhua_cheng">Twitter</a>{', '}
          <a target="_blank" href="https://github.com/chengjianhua">Github</a>
        </p>
      </div>
    )
  }
}

export default Bio

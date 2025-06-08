
import {SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <UserButton/>
      <SignUpButton/>
      <SignInButton/>
    </div>
  )
}

export default Home

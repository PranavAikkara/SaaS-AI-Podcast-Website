import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex-center glassmorphism-auth h-screen w-full'>page
        <SignUp />
    </div>
  )
}

export default page
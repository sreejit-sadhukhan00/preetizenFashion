import React from 'react'
import OurStory from '../../../components.tsx/OurStory'
import RootedIntention from '../../../components.tsx/RootedIntention'
import Community from '../../../components.tsx/Community'
import Creator from '../../../components.tsx/creator'


const page = () => {
  return (
    <div className="w-full">
        <OurStory/>
        <RootedIntention/>
        <Community/>
        <Creator/>
    </div>
  )
}

export default page

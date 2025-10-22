import React from 'react'
import Header from '../Components/Header'
import InvestmentPlansDisplay from '../Components/InvestmentPlanDisplay'

export default function plans () {
  return (
    <div className='root'>
      <video autoPlay loop muted playsInline className='bg-video'>
        <source
          src='https://cdn.pixabay.com/video/2022/10/03/133361-756618034_tiny.mp4'
          type='video/mp4'
        />
      </video>
      {/* Header nav */}
      <Header />

      <div className='content'>
        <InvestmentPlansDisplay />
      </div>
    </div>
  )
}

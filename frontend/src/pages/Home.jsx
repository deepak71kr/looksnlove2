import React from 'react'
import BeautyBanner from '../components/BeautyBanner'
import ComboOffersDisc from '../components/ComboOffersDisc'
import RatingCard from '../components/RatingCard'
import Review from '../components/Review'
const Home = () => {
  return (
    <div>
      <BeautyBanner />
      <ComboOffersDisc />
      <RatingCard />
      <Review/>
    </div>
  )
}

export default Home
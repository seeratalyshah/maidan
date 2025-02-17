import FeaturedMedia from '@/components/media-coverage/FeaturedMedia';
import HeroSection from '@/components/media-coverage/HeroSection'
import InternationalMedia from '@/components/media-coverage/InternationalMedia';
import MediaContact from '@/components/media-coverage/MediaContact';
import NationalMedia from '@/components/media-coverage/NationalMedia';
import VideoSocialMediaCoverage from '@/components/media-coverage/VideoMedia';
import React from 'react'

const MediaCoverage = () => {
  return (
    <div className=''>
        <HeroSection />
        <FeaturedMedia />
        <InternationalMedia />
        <NationalMedia />
        <VideoSocialMediaCoverage />
        <MediaContact />
    </div>
  )
}

export default MediaCoverage;
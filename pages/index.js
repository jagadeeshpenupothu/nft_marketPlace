import React from 'react';

// internal import
import Style from '../styles/index.module.css';
import { 
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video
} from "../components/components_index"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title 
      heading="Audio Collection"
      paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <AudioLive/>
      <FollowerTab/>
      <Slider/>
      <Collection/>
      <Title 
      heading="Featured NFT's"
      paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <Filter/>
      <NFTCard/>
      <Title 
      heading="Browse by category"
      paragraph="Explore the NFTs in the most features categaries"/>
      <Category/>
      <Subscribe/>
      <Brand/>
      <Video/>
    </div>
  )
}

export default Home;
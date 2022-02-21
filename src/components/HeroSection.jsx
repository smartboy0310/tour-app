import React ,{ useState} from 'react';
import '../App.css';
import './HeroSection.css';
import heroVideo from '../Assets/videos/video-1.mp4';

function HeroSection() {

  const [video, setVideo] = useState(false)

  const videoShow = () => {
    if(window.scrollY >=1000 ) {
      setVideo(true)
    } else {
      setVideo(false)
    }
  }

  window.addEventListener('scroll', videoShow)

	return (
		<div className={video ? 'show-bg hero-container' : 'hero-container'}>
			<video className ={video ? 'disactive' : 'video'} src={heroVideo} autoPlay loop muted />
			<h1>WELCOME TO UZBEKISTAN</h1>
			<p>What are you waiting for?</p>
		</div>
	);
}

export default HeroSection;

import React ,{ useState} from 'react';

import './HeroSection.css';
import heroVideo from '../../Assets/videos/video-2.mp4';

function HeroSectionProvince() {

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
		</div>
	);
}

export default HeroSectionProvince;

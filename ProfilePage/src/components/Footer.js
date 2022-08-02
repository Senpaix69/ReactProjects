import React from 'react'

export default function Footer() {
  return (
    <div className='Footer--imgs'>
      <a href='https://instagram.com/senpaii_x69?igshid=YmMyMTA2M2Y=' rel='noreferrer' target='_blank'>
        <img className='instaLogo' src={require('./images/insta.png')} alt='insta'/></a>
      <a href='/'><img className='twitterLogo' src={require('./images/twitter.png')} alt='twitter'/></a>
      <a href='https://www.youtube.com/channel/UCp33wgxMOVO165TJTCtKKjw'rel='noreferrer' target='_blank'>
        <img className='youtubeLogo' src={require('./images/youtube.png')} alt='youtube'/></a>
      <a href='https://www.linkedin.com/in/huraira-younas-a4362b229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bd4vq0dnLT4mDhaZJ72R8aQ%3D%3D'
      rel='noreferrer' target='_blank'>
        <img className='linkedinLogo' src={require('./images/linkedin.png')} alt='linkedin'/>
        </a>
    </div>
  )
}

import React from 'react'
import './programs.css'
import IGEN from '../../assets/igen232.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={IGEN} width="500" height="200" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <h4 className='program_heading'>Programs</h4>
        <p className='program_paragraph'>The BBA Department focuses on developing students' business, management, and leadership skills. It provides a strong foundation in various aspects of business administration, including finance, marketing, human resources, and entrepreneurship.The BBA Department focuses on developing students' business, management, and leadership skills. It provides a strong foundation in various aspects of business administration, including finance, marketing, human resources, and entrepreneurship.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs

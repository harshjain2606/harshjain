import React from 'react'
import './intro.css'
import {motion,Variants} from 'framer-motion'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const fadeInUpAnimation : Variants={
  hidden:{
opacity:0, y:100
  },
  show:{
    
opacity:1,y:0,transition :{
  staggerChildren:0.3,
  duration: 1.5,
}
  },
}
const Intro = () => {
  return (
    <motion.section initial="hidden" animate="show" variants={fadeInUpAnimation} id="intro">
        <motion.div  variants={fadeInUpAnimation} className="introContent">
            <motion.span variants={fadeInUpAnimation} animate= {{fontWeight:'bold'}}  className='hello'>Hello</motion.span>
            <motion.span variants={fadeInUpAnimation} className="introText">I'm <span className="introName">Harsh Jain</span><br/>Mern stack developer</motion.span>
            <motion.p variants={fadeInUpAnimation} animate={{color:'#999', fontSize: '100'}} className="introPara">I am a skilled Web developer <br/>prsuing Btech In ECE Netaji Subash University of Technology delhi 2021-2025 </motion.p>
            <Link><button className="btn"><img src= {btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </motion.div>
 
        <motion.img
        animate= {{scale:1.2,borderRadius:"90%"}}
          src= {bg} alt="Profile" className="bg"/>
    </motion.section>
  )
}

export default Intro
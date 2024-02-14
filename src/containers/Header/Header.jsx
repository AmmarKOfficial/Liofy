import {motion} from 'framer-motion'
import "./Header.scss"
import {images} from "../../constants"
import AppWrap from '../../wrapper/AppWrap'

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => (
  
    <div className='app__header app__flex'>

    <motion.div
    whileInView={{x:[-100,0], opacity:[0,1]}}
    transition={{duration:0.5}}
    className='app__header-info'
    >
    <div className='app__header-badge'>
    <div className='badge-cmp app__flex'>
    <span>
    👋🏻
    </span>
    <div style={{marginLeft: 20}}>
      <p className='p-text'> Hello, I Am</p>
      <h1 className='head-text'>Ammar</h1>
    </div>
    </div>

    <div className='tag-cmp app__flex'>
    <p className='p-text'> Computer Engineer &</p>
    <p className='p-text'> Developer</p>
    
    </div>

    </div>

    </motion.div>

    <motion.div
    whileInView={{ opacity:[0,1]}}
    transition={{duration:0.5, delayChildren:0.5}}
    className='app__header-img'
    >
    <img src={images.profile} alt='profile_bg'/>

    <motion.img
    whileInView={{ scale:[0,1]}}
    transition={{duration:1, ease:'easeOut'}}
    className='overlay_circle'
    src={images.circle}
    alt='profile_circle'
    />

    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.cpp, images.react, images.python].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

    </div>
  )
export default AppWrap(Header,'home');
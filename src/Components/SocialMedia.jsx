
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <a href='https://twitter.com/AmmarKofficial' target='_blank' rel='noopener noreferrer'>
            <BsTwitter/>
        </a>
    </div>
    <div>
        <a href='https://www.instagram.com/its_ammark/' target='_blank' rel='noopener noreferrer'>
            <BsInstagram/>
        </a>
    </div>
    <div>
        <a href='https://linkedin.com/in/ammarkofficial' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin/>
        </a>
    </div>
    <div>
        <a href='https://github.com/ammarkofficial' target='_blank' rel='noopener noreferrer'>
            <FaGithub/>
        </a>
    </div>
</div>

  )
}

export default SocialMedia
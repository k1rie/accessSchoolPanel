import { Link } from 'react-router-dom'
import buttonStyles from '../styles/button.module.css'

export default function Button(props){



    return(
        <Link className={buttonStyles.link}  to='/'>
            <button className={`${buttonStyles.button} ${props.darkModeButton}`}>
                <span className={`${buttonStyles.text} ${props.darkMode} `}><p className={buttonStyles.p}>{props.text}</p></span>
                <span className={`${buttonStyles.text} ${buttonStyles.text2} ${props.darkModeClick} `}><p className={buttonStyles.p}>Click</p></span>
                </button>
            
        </Link>
    )
}
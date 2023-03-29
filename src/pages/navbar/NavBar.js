import styles from '../navbar/navbar.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { React , useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {

     const [toggle, setToggle] = useState(true);

    const Handler = () => {

        setToggle(!toggle)
    }
  return (

    <div className={styles.navMainContainerStyle}>

      <header className={styles.header}>
        
        <img src={logo}/>

        <ul className={styles.links}>
          <Link to='/' ><li><a>HOME</a></li></Link>
          <Link to='/about'><li><a>ABOUT</a></li></Link>
          <Link to='/gallery'><li><a>GALLERY</a></li></Link>
          <Link to='/contact'><li><a>CONTACT</a></li></Link>
          <Link to='/reserve'><li><a>RESERVE</a></li></Link>
        </ul>

        <div className={styles.hamburger} onClick={Handler}> 
            {
              toggle ? <FaBars size={25} /> : <AiOutlineClose size={25}/>
            }
        </div>

      </header>

          
            <ul className={ toggle ? styles.links2 : styles.mobileLinks }>
                <Link to='/' ><li><a>HOME</a></li></Link>
                <Link to='/about'><li><a>ABOUT</a></li></Link>
                <Link to='/gallery'><li><a>GALLERY</a></li></Link>
                <Link to='/contact'><li><a>CONTACT</a></li></Link>
                <Link to='/reserve'><li><a>RESERVE</a></li></Link>
            </ul>
      
    </div>
  )
}

export default NavBar;
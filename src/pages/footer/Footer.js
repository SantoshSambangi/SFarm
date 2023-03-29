import React from 'react';
import styles from '../footer/footer.module.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';
import {ImYoutube2} from 'react-icons/im';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephoneFill} from 'react-icons/bs';
import footerimage from '../../assets/images/footerimage.jpg';
import {MdCopyright} from 'react-icons/md';

const Footer = () => {
  return (
    <div className={styles.footer}>

        <div className={styles.insideFooter}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15222.800893499623!2d78.44664081853045!3d17.474056521386064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spn%20farm%20house%20map!5e0!3m2!1sen!2sin!4v1679646488884!5m2!1sen!2sin" 
            referrerpolicy="no-referrer-when-downgrade" className={styles.iframemap}></iframe>
        </div>

        <div className={styles.footerDown}>

            <div className={styles.footerOne}>
                <img src={footerimage} />

            </div>

            <div className={styles.footerTwo}>

                    <h3>STAY TUNED</h3>
                    
                    <p><AiOutlineInstagram className={styles.fIcon}/> &nbsp; <a>Instagram</a></p>
                    <p><FaPinterest className={styles.fIcon}/> &nbsp; <a>Pinterest</a></p>
                    <p><ImYoutube2 className={styles.fIcon}/> &nbsp; <a>youtube</a></p>

            </div>

            <div className={styles.footerThree}>

                    <h3>Contact Us</h3>
                
                    <p><HiOutlineMail className={styles.fIcon}/> &nbsp; <a>pnfarmhousepollachi@gmail.com</a></p>
                    <p><BsTelephoneFill className={styles.fIcon}/> &nbsp; +91 99946 73557</p>
                    <p><BsTelephoneFill className={styles.fIcon}/> &nbsp; +91 94434 73557</p>

            </div>

        </div>

        <div className={styles.footerBottom}>
                <p><MdCopyright/>2023 PN Farm House. All rights reserved | Powered by Dotwings</p>
        </div>
        
    </div>
  )
}

export default Footer;
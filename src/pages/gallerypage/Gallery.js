import React from 'react';
import styles from '../gallerypage/gallery.module.css';
import image1 from '../../assets/images/g1.jpg';
import image2 from '../../assets/images/g2.jpg';
import image3 from '../../assets/images/g3.jpg';
import image4 from '../../assets/images/g4.jpg';
import image5 from '../../assets/images/g5.jpg';
import image6 from '../../assets/images/g6.jpg';
import image7 from '../../assets/images/g7.jpg';
import image8 from '../../assets/images/g8.jpg';
import gloab from '../../assets/images/gloab.jpg';
import {ImLocation} from 'react-icons/im';
import {ImMobile} from 'react-icons/im';
import {MdOutlineEmail} from 'react-icons/md';


const SectionOne = () => {
  return (
    <div className={styles.galleryOne}>
        
        <section className={styles.galleryImages}>

            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />

        </section>

        <div className={styles.viewBtn}>
          <button>View More</button>
        </div>

        <div className={styles.reachUs}>

              <div className={styles.aboutOne}>
                    <h1>Reach Us</h1>
                </div>
                

                <div className={styles.reacUs}>
                    <span className={styles.line}></span> <img src={gloab} width={40}/> 
                    <span className={styles.line}></span>
                </div>

        </div>

        <div className={styles.galleryCards}>

            <div className={styles.cardShadowTwo}>
                <ImLocation size={40}/>
                <h3>Phone</h3>
                <p>+91 99946 73557</p>
                <p>+91 94434 73557</p>
            </div>

            <div className={styles.cardShadowTwo}>
                <ImMobile size={40}/>
                <h3>Phone</h3>
                <p>+91 99946 73557</p>
                <p>+91 94434 73557</p>
            </div>

            <div className={styles.cardShadowThree}>
                <MdOutlineEmail size={40}/>
                <h3>Email</h3>
                <p>pnfarmhousepollachi@gmail.com</p>
                <p></p>
             </div>
        </div>

        <div className={styles.getIntouch}>
              <h1>Get In Touch</h1>
        </div>

        <div className={styles.formSection}>
            <div className={styles.insideFormSection}>

              <form className={styles.formGroup}>

                <div className={styles.formContainer}>

                    <div className={styles.formOne}>
                        <p>Name*</p>
                        <br/>
                        <input  className={styles.inputField}/> 
                        <br/>
                        <br/>
                        <p>PhoneNumber*</p>
                        <br/>
                        <input className={styles.inputField}/> 
                    </div>


            
                    <div className={styles.formTwo}>
                        <p>Email*</p>
                        <br/>
                        <input className={styles.inputField}/> 
                        <br/>
                        <br/>
                        <p>Subject*</p>
                        <br/>
                        <input className={styles.inputField}/> 
                    </div>
                </div>

                <div className={styles.formThree}>
                    <p>message*</p>  
                    <br/>                  
                    <textarea></textarea>
                </div>

                  <div className={styles.formBtn}>
                      <button>SEND</button>
                  </div>
              </form>

            </div>
        </div>
    </div>
  )
}

export default SectionOne;
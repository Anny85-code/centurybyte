import React from 'react'
import styles from './ContactUsForm.module.css'

// import {Map, GoogleApiWrapper} from 'google-maps-react';

const ContactUsForm = () => {




  return (
    <>
      <div className={`container ${styles.contain} overflow-hidden`}>
        <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>
          We&apos;d Love to Hear From You
        </p>

        <div className='row'>
          <div className='col-md-4' data-aos='fade-right'>
            <p className={styles.head}>Address</p>
            <p className={styles.content}>
              54 Mojsija Zecevica, Berane, Montenegro
            </p>
          </div>

          <div className='col-md-4' data-aos='fade-up' data-aos-offset='100'>
            <p className={styles.head}>Contact</p>
            <p className={styles.content}>Mobile : +234-80-32668874</p>
            <p className={styles.content}>Phone : +00 123 678 90</p>
            <p className={styles.content}>
              Email: centurybytelimited@gmail.com
            </p>
          </div>

          <div className='col-md-4' data-aos='fade-left' data-aos-offset='70'>
            <p className={styles.head}>Opening Hours</p>
            <p className={styles.content}>Monday - Friday: 09:00 - 20:00</p>
            <p className={styles.content}>
              Sunday &amp; Saturday: 10:30 - 22:00
            </p>
          </div>
        </div>

      

        
      </div>

      {/* <div>
                <Map
                    google={this.props.google}
                    style={{width:'100%', height:'50%'}}
                    zoom={14}
                    initialCenter={
                        {
                            lat: 23.760374,
                            lng: 90.411643
                        }
                    }
                />
            </div> */}
    </>
  )
}

export default ContactUsForm

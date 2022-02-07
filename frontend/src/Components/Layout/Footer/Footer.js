import React from 'react';
import playStore from '../../../Images/playstore.png';
import appStore from '../../../Images/Appstore.png';
import './Footer.css';


const Footer = () => {
    return (
<footer id='footer'>
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4> <br/>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} />
            <img src={appStore} />
        </div>
        <div className='midFooter'>
            <h1>E-commerce</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2022 &copy; Riduanul Haque</p>
        </div>

        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <a href='http://instagram.com/riduanulHaque'>instagram</a> <br/>
            <a href='http://youtube.com/riduanulHaque'>Youtube</a> <br/>
            <a href='http://facebook.com/riduanulHaque'>Facebook</a>
        </div>

</footer>
    );
};

export default Footer;
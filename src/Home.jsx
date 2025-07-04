import container1Photo from './assets/firstContainerPhoto.jpg';
import logo from './assets/eirolLogo.png';
import products1 from './assets/Products1.png';
import hand from './assets/hand.png';
import soap from './assets/soap.png';
import leftArrow from './assets/leftArrow.png';
import rightArrow from './assets/rightArrow.png';
import gmail from './assets/gmail.png';
import phone from './assets/phone.png';

function Home () {
return (
    <>
    <div className="parentContainer1">
        <p className="elevate">
            elevate your brand
        </p>
        <p className="with">
            with
        </p>
        <img 
            src={logo}
            alt="" 
            className="logo" 
        />
        <button className="contactUs">
            Contact Us
        </button>
    </div>
    <div className="parentContainer3">
        <img 
         src={products1}
         alt="" 
         className="products1" 
        />
    </div>
    <div className="parentContainer2">
        <p className="partner">
            Partner with us to transform your
        </p>
        <p className="vision">
            vision
            <strong> into </strong>
            reality
        </p>
        <a className="partnerBrands" href="">
            Partner brands {'>'}
        </a>
    </div>
    <div className="parentContainer4">
        <div className="intro">
                At Eirol Cosmetics, we specialize in premium 
                cosmetic manufacturing, <br />offering innovative, high-quality products to elevate your brand. 
        </div>
        
        <img 
            src={hand}
            alt="" 
            className="hand" 
        />

        <div className="threeWords">
            uniqueness. <br />
            quality. <br />
            authenticity.
        </div>
    </div>
    <div className="parentContainer5">
        <img 
            src={soap}
            alt="" 
            className="soap" 
        />

        <img 
            src={leftArrow} 
            alt="" 
            className="leftArrow" 
        />

        <img 
            src={rightArrow} 
            alt="" 
            className="rightArrow" 
        />
        <p className="earth">
            earth-made
        </p>
        <p className="skinLoved">
            skin-loved
        </p>
    </div>
    <div className="parentContainer6">
        “Crafted Clean. Naturally Yours—Partner with Our <span className='pink'>Expert Chemist</span> to <br />
        <span className='pink'>Formulate Your Signature Soap.</span>”
    </div>
        <div className="parentContainer7">
            <img 
                src={logo}
                alt="" 
                className="footerLogoImage" 
            />
            <button className="book">
                Book an appointment
            </button>
            <div className="firstFooter">
                <a href="">
                    About us
                </a>    
                <a href="">
                    Our Partners
                </a>
                <a href="">
                    Offers
                </a>
            </div>
            <div className="secondFooter">
                <a href="">
                    Products
                </a>    
                <a href="">
                    Privacy Policy
                </a>
                <a href="">
                    FDA Approved Verification
                </a>
            </div>
            <div className="thirdFooter">
                Connect with us!
                <div className="connectLogo">
                    <img 
                        src={gmail}
                        alt="" 
                        className="gmail"
                    /> &nbsp; &nbsp;
                    <img 
                        src={phone}
                        alt="" 
                        className="phone" 
                    />
                </div>
            </div>
        </div>
        <div className="parentContainer8">
            © 2024 Eirol Cosmetics Manufacturing
        </div>
    </>
)
}

export default Home;
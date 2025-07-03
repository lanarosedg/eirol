import container1Photo from './assets/firstContainerPhoto.jpg';
import logo from './assets/eirolLogo.png';
import products1 from './assets/Products1.png';
import hand from './assets/hand.png';
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
            <strong>vision </strong>
            into
            <strong> reality</strong>
        </p>
        <a className="partnerBrands" href="">
            Partner brands {'>'}
        </a>
    </div>
    <div className="parentContainer4">
        <div className="firstpc3">
            <div className="intro">
                <p className="introText">
                At Eirol Cosmetics, we specialize in premium 
                cosmetic manufacturing, offering innovative, high-quality products to elevate your brand. 
                </p>
            </div>
        </div>
        <img 
            src={hand}
            alt="" 
            className="hand" 
        />
    </div>
    </>
)
}

export default Home;
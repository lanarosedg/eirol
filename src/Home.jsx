import container1Photo from './assets/firstContainerPhoto.jpg';
import logo from './assets/eirolLogo.png';
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
    <div className="parentContainer2">
        
    </div>
    </>
)
}

export default Home;
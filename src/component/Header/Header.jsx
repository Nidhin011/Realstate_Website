
import { useState } from "react";
import "./Header.css"
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";
const Header = () => {
    const [menuOpened, setMenuOpned] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <div>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth h-container">
                    <img src="/images/logo.png" alt="logo" width={100} />
                    <OutsideClickHandler
                        onOutsideClick={() => setMenuOpned(false)}
                    >
                        <div className=" flexCenter h-menu "
                            style={getMenuStyles(menuOpened)}
                        >
                           
                            <Link to="r-wrapper" smooth={true}><a href="">Residencies</a></Link>
                            <Link to="v-wrapper" smooth={true}><a href="">Our Value</a></Link>
                            <Link to="cn-wrapper" smooth={true}><a href="">Contact Us</a></Link>
                            <Link to="g-Wrapper" smooth={true} ><a href="">Get Started</a></Link>
                            <button className="button">Contact</button>
                        </div>
                    </OutsideClickHandler>
                    <div className="menu-icon" onClick={() => setMenuOpned((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
                </div>

            </section>

        </div>
    )
}
export default Header
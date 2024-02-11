import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
// import { HiChatBubbleBottomCenter } from 'react-icons/hi';
import { HiChatAlt } from 'react-icons/hi';
import "./contact.css";
const Contact = () => {
    return (
        <section className="cn-wrapper">
            <div className="flexCenter paddings innerWidth c-container">
                {/* Left-side */}
                <div className=" flexColStart c-left">
                    <span className="orangeText">Our Contact</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">We always readybto help by providing the best service for you .We beleive a good blace to live can make your life better</span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexColStart icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>

                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexColStart icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat  Now</div>

                            </div>
                        </div>
                        {/* second-row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexColStart icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText"> Video Call</span>
                                        <span>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"> Video Call Now</div>

                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexColStart icon">
                                        <HiChatAlt size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Messege</span>
                                        <span>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./images/contact.jpg" alt="contact-img" />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Contact

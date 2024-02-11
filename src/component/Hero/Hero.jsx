import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import * as ReactIcons from "react-icons";
import CountUp from 'react-countup';
import { motion } from "framer-motion"

const Hero = () => {
  console.log("nn", HiLocationMarker);
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left-Side */}
        <div className=" flexColCenter hero-left">
          <div className="hero-tittle">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
              Discover
              <br /> More Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className=" flexColCenter hero-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forgot all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter serach-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span><CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp start={28} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right-side */}
        <div className=" flexCenter hero-right">

          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring"
            }}

            className="image-container"
          >
            <img src="./images/hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

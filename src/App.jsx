/** @format */

import React from "react";
import {
  AboutUs,
  Blogs,
  Hero,
  HireMe,
  NavBar,
  Services,
  TestiMony,
  Works,
  ContactMe,
  Footer,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* tha navBar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      {/* tha Hero Section */}
      <Hero />
      {/* tha aboutUs Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
        </div>
      </div>
      {/*  Services Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter} bg-dimWhite`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
      {/* the Works Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Works />
        </div>
      </div>
      {/* TestiMony Section */}
      <div className={`${styles.marginY} ${styles.flexCenter} bg-dimWhite`}>
        <TestiMony />
      </div>
      {/* Blog Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Blogs />
        </div>
      </div>
      {/*  Hire Me Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter} bg-dimWhite`}>
        <div className={`${styles.boxWidth}`}>
          <HireMe />
        </div>
      </div>
      {/* ContactMe Section */}
      <div
        className={`${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactMe />
        </div>
      </div>
      {/* Footer Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-800`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

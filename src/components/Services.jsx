/** @format */

import React from "react";
import { Title, Service } from "./";
import styles from "../style";
import { services } from "../constants";

const Services = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <Title title="My Services" />
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 grid-cols-1 sm:mx-0 mx-8">
        {services.map((service) => (
          <Service key={service.icon} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

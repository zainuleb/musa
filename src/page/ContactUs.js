import React from "react";
import ContactBanner from "../component/contactBanner/ContactBanner";
import ContactInfo from "../component/contactinfo/ContactInfo";
import Newsletter from "../component/newsletter/Newsletter";

const ContactUs = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfo />
      <Newsletter />
    </div>
  );
};

export default ContactUs;

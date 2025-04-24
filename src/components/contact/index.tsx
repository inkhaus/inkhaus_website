import React from "react";

const ContactHolder = () => {
  return (
    <section className="w-full h-[80vh] contact-holder my-4 px-3 py-5 md:p-10">
      <div className="w-full container mx-auto flex items-center justify-center">
        <div className="w-full">
          <h3 className="text-lg text-white font-semibold text-center">
            Ofc printing is personal<br /> to us
          </h3>
          <p className="text-base font-semibold text-white">
            We’d love to print new ideas with you. Send us a message of what
            you’d like us to print.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHolder;

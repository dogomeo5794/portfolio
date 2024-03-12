import React from "react";

// import DribbbleCard from "@/components/ContactCards/DribbbleCard";
import EmailCard from "@/components/ContactCards/EmailCard";
import GithubCard from "@/components/ContactCards/GithubCard";
import InstagramCard from "@/components/ContactCards/InstagramCard";
import TikTokCard from "@/components/ContactCards/TikTokCard";
import LinkedinCard from "@/components/ContactCards/LinkedinCard";
// import TwitterCard from "@/components/ContactCards/TwitterCard";
// import YoutubeCard from "@/components/ContactCards/YoutubeCard";


import style from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className="flex flex-col pt-16 pb-20 gap-16" id="contact">
      <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-3xl sm:text-4xl">
        Contact<span className="text-primary">.</span>
      </h1>
      <ul
        className={`${style.contactLinks} contact-links grid gap-x-8 gap-y-12`}
      >
        <EmailCard />
        <LinkedinCard />
        <GithubCard />
        <InstagramCard />
        <TikTokCard />
        {/* <DribbbleCard />
        <YoutubeCard />
        <TwitterCard /> */}
      </ul>
    </section>
  );
};

export default ContactSection;

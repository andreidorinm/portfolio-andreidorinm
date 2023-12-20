import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineLinkedin
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";
import useRevealAnimation from "../../lib/useRevealAnimation";
import { useEffect } from "react";

const Contact: NextComponentType = () => {
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);
  return (
    <div ref={ref} className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/andreidorinm" />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/andrei-mihaila-b75798211/"
        />

        <Icon icon={<MdEmail />} url="mailto:andrei.dorin00@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/2hnfn6us3fslfrn80nrdwoopf"
        />
      </div>
    </div>
  );
};

export default Contact;

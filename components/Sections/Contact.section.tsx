import { AiOutlineGithub, AiOutlineLinkedin, MdEmail, BsSpotify } from "../Misc/Icons.collection";
import { Icon } from "../Misc/Icon.component";
import ScrollToTopButton from "../Misc/ScrollToTopButton.component";

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-2xl sm:text-3xl font-bold text-white">Get in touch</p>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/andreidorinm" />
        <Icon icon={<AiOutlineLinkedin />} url="https://www.linkedin.com/in/andrei-mihaila-b75798211/" />
        <Icon icon={<MdEmail />} url="mailto:andrei.dorin00@gmail.com" />
        <Icon icon={<BsSpotify />} url="https://open.spotify.com/user/2hnfn6us3fslfrn80nrdwoopf" />
      </div>
    </div>
  );
};

export default Contact;

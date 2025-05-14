import { SocialLink } from '../datatypes/SocialLink';
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

const socialLinks: SocialLink[] = [
    { icon: <TbBrandGithubFilled />, href: "https://github.com/kronberh" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/yelyzavetakronberh/" },
    { icon: <SiGmail />, href: "mailto:elizavetakronberg@gmail.com" }
];

export { socialLinks }

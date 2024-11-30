import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { socials } from "../../constants";
import { Header } from "../atoms/Header";
import { TSocial } from "../../types";
import { config } from "../../constants/config";

const SocialCard: React.FC<{ index: number } & TSocial> = ({
  index,
  social,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{social}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`Social_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Socials = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.social} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {socials.map((social, index) => (
          <SocialCard key={social.name} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default Socials;

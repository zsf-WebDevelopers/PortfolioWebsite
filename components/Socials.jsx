import { FaWeixin, FaGithub } from 'react-icons/fa';
import { AiFillBilibili } from 'react-icons/ai';
import { SiXiaohongshu } from 'react-icons/si';
import Link from 'next/link';
const socialsArr = [
  { path: '/', icon: <FaGithub />, title: 'Github' },
  { path: '/', icon: <AiFillBilibili />, title: 'Bilibili' },
  { path: '/', icon: <SiXiaohongshu />, title: '小红书' },
  { path: '/', icon: <FaWeixin />, title: '微信' },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsArr.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

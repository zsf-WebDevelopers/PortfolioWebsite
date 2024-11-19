'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const info = [
  {
    icon: <FaPhoneAlt />,
    title: '电话',
    desc: '185******19',
  },
  {
    icon: <FaEnvelope />,
    title: '邮箱',
    desc: '185******19@163.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: '地址',
    desc: '重庆市渝北区',
  },
];
const inputClasses =
  'flex focus-visible:ring-offset-0 h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none';
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl font-semibold text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Ex eu id mollit aliqua commodo amet id et voluptate sunt quis enim adipisicing laborum. Qui eu do enim
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input className={inputClasses} type="firstname" placeholder="First Name" />
                <Input className={inputClasses} type="lastname" placeholder="Last Name" />
                <Input className={inputClasses} type="email" placeholder="Email" />
                <Input className={inputClasses} type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className={`${inputClasses} focus:ring-0`}>
                  <SelectValue className="text-white/60" placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="text-white bg-primary border-white/10">
                  <SelectGroup>
                    <SelectLabel className="text-white/60">Select a subject</SelectLabel>
                    <SelectItem className="focus:bg-accent focus:text-primary" value="1">
                      Web Development
                    </SelectItem>
                    <SelectItem className="focus:bg-accent" value="2">
                      Web Design
                    </SelectItem>
                    <SelectItem className="focus:bg-accent" value="3">
                      SEO
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className={`${inputClasses} min-h-[80px] h-[200px]`} placeholder="Type your message here..." />
              <Button
                className="px-12 py-2 font-medium rounded-full text-primary max-w-40 bg-accent hover:bg-accent-hover"
                size="md"
              >
                发送
              </Button>
            </form>
          </div>
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] flex items-center justify-center text-[28px] text-accent rounded-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className=" text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.desc}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';
const servicesArr = [
  {
    num: '01',
    title: '网站/h5开发',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    href: '/',
  },
  {
    num: '02',
    title: '小程序/APP开发',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    href: '/',
  },
  {
    num: '03',
    title: '项目源码下载',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    href: '/',
  },
  {
    num: '04',
    title: '技术支持',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    href: '/',
  },
];
const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1.6, duration: 0.4, ease: 'easeInOut' } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesArr.map((services, index) => {
            return (
              <div key={index} className="flex flex-col justify-center flex-1 gap-6 cursor-pointer group">
                {/*top */}
                <div className="flex items-center justify-between w-full gap-6">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full group-hover:bg-accent transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl transition-all duration-500 text-primary" />
                  </Link>
                </div>
                {/* bottom */}
                <h2 className="text-[42px] font-medium leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                <p className="text-white/60">{services.desc}</p>
                <div className="w-full transition-all duration-500 border-b border-white/20 group-hover:border-accent"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;

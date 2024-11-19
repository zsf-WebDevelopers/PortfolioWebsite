'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButtons from '@/components/WorkSliderButtons';
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    stack: [{ name: 'Next.js' }, { name: 'TailwindCSS' }, { name: 'Node.js' }],
    image: '/assets/work/thumb2.png',
    live: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    stack: [{ name: 'Next.js' }, { name: 'TailwindCSS' }],
    image: '/assets/work/thumb3.png',
    live: 'https://www.google.com',
    github: 'https://www.github.com',
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Object
              </h2>
              <p className="text-white/60">{project.desc}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && <span>,</span>}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex gap-4">
                <Link href={project.live} className="flex items-center gap-2 hover:text-accent">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group">
                        <BsArrowUpRight className="text-3xl text-white transition-all duration-500 group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} className="flex items-center gap-2 hover:text-accent">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group">
                        <BsGithub className="text-3xl text-white transition-all duration-500 group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              slidesPerView={1}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative h-[460px] flex items-center justify-center bg-pink-50">
                      <div className="absolute inset-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full ">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                containerStyles="absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full flex gap-2 justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]  flex items-center justify-center transition-all duration-500"
                iconStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

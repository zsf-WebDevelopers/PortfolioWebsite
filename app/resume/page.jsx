'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { RiMiniProgramFill } from 'react-icons/ri';
const about = {
  title: 'About Me',
  desc: 'Qui incididunt anim quis dolore et culpa. Ea labore irure ea et nostrud occaecat non consequat.',
  items: [
    { fieldName: '籍贯', fieldValue: '陕西' },
    { fieldName: '现居城市', fieldValue: '重庆' },
    { fieldName: '学历', fieldValue: '本科' },
    { fieldName: '姓名', fieldValue: '***' },
    { fieldName: '经验', fieldValue: '7+ Years' },
    { fieldName: '电话', fieldValue: '185******19' },
    { fieldName: '微信', fieldValue: 'career*****g' },
    { fieldName: '邮箱', fieldValue: '185******19@163.com' },
  ],
};
const experience = {
  icon: '/assets/badge.svg',
  title: 'My Experience',
  desc: 'Qui incididunt anim quis dolore et culpa. Ea labore irure ea et nostrud occaecat non consequat.',
  items: [
    { company: '重庆****科技有限公司', position: '全栈开发', duration: '2022.7 - present' },
    { company: '重庆****科技有限公司', position: '全栈开发', duration: '2022.7 - present' },
    { company: '杭州****科技有限公司', position: '前端开发组长', duration: '2019.12 - 2022.6' },
    { company: '杭州****科技有限公司', position: '前端开发组长', duration: '2019.12 - 2022.6' },
    { company: '杭州****科技有限公司', position: '中级前端开发', duration: '2018.10 - 2019.11' },
    { company: '杭州****科技有限公司', position: '中级前端开发', duration: '2018.10 - 2019.11' },
    { company: '西安****科技有限公司', position: '初级前端开发', duration: '2017.8 - 2018.9' },
    { company: '西安****科技有限公司', position: '初级前端开发', duration: '2017.8 - 2018.9' },
  ],
};

const education = {
  icon: '/assets/cap.svg',
  title: 'My Education',
  desc: 'Qui incididunt anim quis dolore et culpa. Ea labore irure ea et nostrud occaecat non consequat.',
  items: [
    { school: '郑州轻工业大学', degree: '全日制统招本科', duration: '2013.9 - 2017.6' },
    { school: '扶风高中', degree: '省级重点高中', duration: '2010.9 - 2013.6' },
    { school: '南阳初中', degree: '全国义务教育', duration: '2007.9 - 2010.7' },
    { school: '闫村小学', degree: '全国义务教育', duration: '1999.9 - 2007.8' },
  ],
};

const skills = {
  icon: '/assets/skills.svg',
  title: 'My Skills',
  desc: 'Qui incididunt anim quis dolore et culpa. Ea labore irure ea et nostrud occaecat non consequat.',
  items: [
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS3', icon: <FaCss3 /> },
    { skill: 'JavaScript', icon: <FaJs /> },
    { skill: 'Vue', icon: <FaVuejs /> },
    { skill: 'React', icon: <FaReact /> },
    { skill: 'Next.js', icon: <SiNextdotjs /> },
    { skill: 'Node.js', icon: <FaNodeJs /> },
    { skill: 'MiniProgram', icon: <RiMiniProgramFill /> },
  ],
};
const tabs = ['experience', 'education', 'skills', 'about'];
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row items-start gap-[60px]">
          <TabsList className="inline-flex h-auto rounded-md p-1 text-primary bg-primary  flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                className="bg-[#27272c] inline-flex items-center justify-center w-[320px] h-[42px] text-white text-base rounded-lg p-3 font-medium text-balance ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm"
                value={tab}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="w-full min-h-[70vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        className="bg-[#252329] h-[184px] rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                        key={index}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        className="bg-[#252329] h-[184px] rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                        key={index}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.school}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.desc}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.skill}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;

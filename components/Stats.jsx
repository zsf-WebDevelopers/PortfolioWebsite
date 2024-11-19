'use client';
import CountUp from 'react-countup';
const statsArr = [
  { num: 7, text: 'Years of Experience' },
  { num: 12, text: 'Projects Completed' },
  { num: 8, text: 'Technologies mastered' },
  { num: 200, text: 'Code commits' },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsArr.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-start flex-1 gap-4">
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl font-extrabold xl:text-6xl" />
                <p className={`${item.length < 15 ? 'max-w-[100px]' : 'max-w-[100px]'} leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Astrocoin" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Astrocoin</span> Astrocoin is a new thing in the future, where you can enjoy the virtual and galactic world by feeling like it's really real. With Astrocoin, you can explore what you feel in this new digital age, because this is really the {' '}
        <span className="font-extrabold text-white">
        madness of the crypto revolution today
        </span>{' '}
        Using only Astrocoin,{' '}
        <span className="font-extrabold text-white">you</span> can easily invest in and navigate the virtual and galactic financial landscape, turning your dreams into {' '}
        <span className="font-extrabold text-white">virtual reality.</span>  Let's explore the madness of the galactic cryptocurrency world with Astrocoin by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

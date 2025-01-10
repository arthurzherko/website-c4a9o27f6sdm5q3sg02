import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className='bg-gradient-to-r from-primary to-primary-dark py-20 text-white'>
    <div className='container mx-auto px-4 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-6 text-4xl font-bold md:text-6xl'
      >
        Elevate Your Brand with Nexus Digital
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mb-8 text-xl'
      >
        Innovative strategies to boost your online presence and drive growth
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size='lg' asChild>
          <a href='#contact'>Get Started</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
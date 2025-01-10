import { Button } from '@/components/ui/button';

const CallToAction = () => (
  <section className='bg-primary py-20 text-white'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='mb-4 text-3xl font-bold'>Ready to Elevate Your Digital Presence?</h2>
      <p className='mb-8 text-xl'>Let's create a tailored strategy to help your business thrive online.</p>
      <Button size='lg' variant='secondary' asChild>
        <a href='#contact'>Get Started Today</a>
      </Button>
    </div>
  </section>
);

export default CallToAction;
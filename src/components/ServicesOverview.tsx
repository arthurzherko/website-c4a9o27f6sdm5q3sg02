import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your website's visibility and ranking on search engines.',
    icon: '🔍',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty across platforms.',
    icon: '📱',
  },
  {
    title: 'Content Strategy',
    description: 'Create compelling content that resonates with your target audience.',
    icon: '✍️',
  },
];

const ServicesOverview = () => (
  <section className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-12 text-center text-3xl font-bold'>Our Services</h2>
      <div className='grid gap-8 md:grid-cols-3'>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center text-2xl'>
                  <span className='mr-2 text-3xl'>{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
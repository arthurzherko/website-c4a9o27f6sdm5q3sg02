import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience.',
  },
  {
    title: 'Strategy Development',
    description: 'Our team creates a customized digital marketing strategy tailored to your needs.',
  },
  {
    title: 'Implementation',
    description: 'We execute the strategy across various channels and platforms.',
  },
  {
    title: 'Monitoring & Optimization',
    description: 'Continuous tracking and adjustments to ensure optimal performance.',
  },
  {
    title: 'Reporting & Analysis',
    description: 'Regular reports and insights to keep you informed of progress and results.',
  },
];

const ProcessTimeline = () => (
  <section className='bg-white py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-12 text-center text-3xl font-bold'>Our Process</h2>
      <div className='relative'>
        {steps.map((step, index) => (
          <div key={index} className='mb-8 flex'>
            <div className='mr-4 flex flex-col items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
                {index + 1}
              </div>
              {index < steps.length - 1 && <div className='h-full w-0.5 bg-gray-300'></div>}
            </div>
            <Card className='flex-grow'>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
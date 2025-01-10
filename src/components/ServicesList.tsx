import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your website's visibility and ranking on search engines with our comprehensive SEO strategies.',
    details: 'Our SEO services include keyword research, on-page optimization, link building, and performance tracking.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty across various social media platforms.',
    details: 'We create and manage compelling social media campaigns, analyze engagement metrics, and grow your online community.',
  },
  {
    title: 'Content Strategy',
    description: 'Develop a content strategy that resonates with your target audience and drives conversions.',
    details: 'Our team crafts high-quality blog posts, articles, infographics, and videos tailored to your brand voice and goals.',
  },
  {
    title: 'Pay-Per-Click Advertising',
    description: 'Maximize your ROI with targeted PPC campaigns on Google, Bing, and social media platforms.',
    details: 'We manage your ad spend, create compelling ad copy, and continuously optimize for better performance.',
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and drive sales with personalized email marketing campaigns.',
    details: 'From newsletter design to automated drip campaigns, we help you stay connected with your audience.',
  },
  {
    title: 'Analytics and Reporting',
    description: 'Gain valuable insights into your digital marketing performance with comprehensive analytics.',
    details: 'We provide regular reports and dashboards to track KPIs and inform data-driven marketing decisions.',
  },
];

const ServicesList = () => (
  <section className='bg-white py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-12 text-center text-3xl font-bold'>Our Services</h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesList;
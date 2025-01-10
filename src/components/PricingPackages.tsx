import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const packages = [
  {
    name: 'Starter',
    price: '$999/mo',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic SEO optimization',
      'Social media management (2 platforms)',
      'Monthly content creation (2 blog posts)',
      'Quarterly performance reports',
    ],
  },
  {
    name: 'Growth',
    price: '$2,499/mo',
    description: 'Ideal for businesses looking to expand their online presence',
    features: [
      'Advanced SEO optimization',
      'Social media management (4 platforms)',
      'Weekly content creation (4 blog posts)',
      'PPC campaign management',
      'Monthly performance reports',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale operations',
    features: [
      'Comprehensive digital strategy',
      'Full-service social media management',
      'Custom content creation plan',
      'Advanced analytics and reporting',
      'Dedicated account manager',
    ],
  },
];

const PricingPackages = () => (
  <section className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-12 text-center text-3xl font-bold'>Pricing Packages</h2>
      <div className='grid gap-8 md:grid-cols-3'>
        {packages.map((pkg, index) => (
          <Card key={index} className='flex flex-col'>
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='mb-4 text-3xl font-bold'>{pkg.price}</p>
              <ul className='space-y-2'>
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className='flex items-center'>
                    <span className='mr-2 text-green-500'>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPackages;
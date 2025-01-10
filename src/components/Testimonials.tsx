import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote: 'Nexus Digital transformed our online presence. Our engagement rates have skyrocketed!',
    author: 'Sarah Johnson',
    company: 'TechStart Inc.',
  },
  {
    quote: 'The team at Nexus is professional, creative, and delivers results. Highly recommended!',
    author: 'Michael Chen',
    company: 'GrowthBox',
  },
  {
    quote: 'Our SEO rankings improved dramatically after working with Nexus Digital. They're true experts.',
    author: 'Emily Rodriguez',
    company: 'FitLife Co.',
  },
];

const Testimonials = () => (
  <section className='bg-white py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-12 text-center text-3xl font-bold'>What Our Clients Say</h2>
      <Carousel className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className='bg-gray-100'>
                <CardContent className='pt-6'>
                  <blockquote className='text-lg italic'>"{testimonial.quote}"</blockquote>
                </CardContent>
                <CardFooter className='flex-col items-start'>
                  <p className='font-semibold'>{testimonial.author}</p>
                  <p className='text-sm text-gray-600'>{testimonial.company}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default Testimonials;
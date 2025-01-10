import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'We'll get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='bg-gray-100 py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center text-3xl font-bold'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='mx-auto max-w-lg'>
          <div className='mb-4'>
            <Input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <Input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <Textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type='submit' className='w-full'>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
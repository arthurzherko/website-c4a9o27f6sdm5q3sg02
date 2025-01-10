import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='bg-gray-900 text-white'>
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-wrap justify-between'>
        <div className='mb-6 w-full md:w-1/4'>
          <h3 className='mb-4 text-xl font-bold'>Nexus Digital</h3>
          <p className='text-gray-400'>Innovative marketing solutions for the digital age.</p>
        </div>
        <div className='mb-6 w-full md:w-1/4'>
          <h4 className='mb-4 font-semibold'>Quick Links</h4>
          <ul className='space-y-2'>
            <li><Link to='/' className='text-gray-400 hover:text-white'>Home</Link></li>
            <li><Link to='/services' className='text-gray-400 hover:text-white'>Services</Link></li>
          </ul>
        </div>
        <div className='mb-6 w-full md:w-1/4'>
          <h4 className='mb-4 font-semibold'>Contact</h4>
          <p className='text-gray-400'>info@nexusdigital.com</p>
          <p className='text-gray-400'>+1 (555) 123-4567</p>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-8 text-center'>
        <p className='text-gray-400'>© 2024 Nexus Digital. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => (
  <nav className='sticky top-0 z-50 bg-white shadow-md'>
    <div className='container mx-auto flex items-center justify-between px-4 py-4'>
      <Link to='/' className='text-2xl font-bold text-primary'>Nexus Digital</Link>
      <div className='hidden space-x-6 md:flex'>
        <Link to='/' className='text-gray-600 hover:text-primary'>Home</Link>
        <Link to='/services' className='text-gray-600 hover:text-primary'>Services</Link>
      </div>
      <Button asChild>
        <Link to='/contact'>Contact Us</Link>
      </Button>
    </div>
  </nav>
);

export default Navbar;
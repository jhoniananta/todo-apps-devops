// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from './components/Button';
import Typography from './components/Typography';
import Navbar from './Navbar';
import './styles/style.css';

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar isMobile={false}>My To-do List</Navbar>
      <h1 className="text-center bg-blue-50">Hello World Test PSO halo gais welcome back to</h1>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary' size='lg'>Button</Button>
        <Button variant='primary' size='base'>Button</Button>
        <Button variant='primary' size='sm'>Button</Button>
      </div>
      <div className='flex flex-wrapgap-4'>
        <Button variant='outline-primary' size='lg'>Button</Button>
        <Button variant='outline-primary' size='base'>Button</Button>
        <Button variant='outline-primary' size='sm'>Button</Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Typography variant='p' weight='regular'>Typography</Typography>
        <Typography variant='p' weight='medium'>Typography</Typography>
        <Typography variant='p' weight='semibold'>Typography</Typography>
        <Typography variant='p' weight='bold'>Typography</Typography>
      </div>
    </div>
  );
}

export default App;

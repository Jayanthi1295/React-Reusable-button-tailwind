import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
        <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
          {/* <div className="px-4">
            <img src={logo}/>
          </div> */}
          <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Tutorials
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Components
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Contact
            </div>
          </div>
          <div>
            FOOTER
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
          <div className="text-4xl pt-10">Button Components</div>
          <div className="block">
          <button className="bg-slate-100 shadow-md px-4 py-3"> Get started</button>
        
                 <div className="grid grid-rows-4 grid-flow-col gap-4">
  {/* <div className="row-span-4 ...">01</div>
  <div className="col-span-2 ...">02</div>
  <div className="col-span-2 ...">03</div>
  <div className="col-span-2 ...">04</div> */}
                    <div className="row-span-4">
                      Size
                    </div>
                    <Button variant="danger" size="sm"  className="row-span-2">Delete - S</Button>
                    <Button variant="danger" size="md"  className="row-span-2">Delete - M</Button>
                    <Button variant="danger" size="lg"  className="row-span-2">Delete - L</Button>
                 </div>
          <main className='m-4'>
            <div className="space-x-4 space-y-4"> 
            <div className="text-4xl pt-10">Button Variants </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">Variants</div>
              <Button variant="primary" size="md" className='row-span-2'>Primary</Button>
                 <Button variant="secondary" size="md" className='row-span-2'>Secondary</Button>
                 <Button variant="tertiary" size="md" className='row-span-2'>Tertiary</Button>
                 <Button variant="danger" size="md" className='row-span-2'>Danger</Button>
                 <Button variant="success" size="md" className='row-span-2'>Success</Button>
            </div>
            <p>Reference</p>
                 <Button >Click</Button>
                 <Button id="btn1" onClick={()=>{ alert('clicked 1')}}>My Btn(click) </Button>
                 <Button className="bg-red-500"> Delete </Button>
                
            </div>
         </main>  

           </div>
        </div>
       
     </div>
     
  );
}

export default App;

import { useState , useEffect} from 'react'

import './App.css'

export default function App() {
  const [currentIndex , setCurrentIndex] = useState(0)
  const slides = [
    {image : '/avatar-anisha.png', name : 'Anisha Li' , text : `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`},
    {image : '/avatar-ali.png', name : 'Ali Bravo' , text : `“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”`},
    {image : '/avatar-richard.png', name : 'Richard Watts' , text : `“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”`},
    {image : '/avatar-shanai.png', name : 'Shanai Gough' , text : `“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”`}
  ]

const changeSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  setCurrentIndex(prev => (prev + 1) % slides.length)
  console.log(currentIndex)
}
useEffect(() => {
  const interval = setInterval(changeSlide , 5000)
  return () => clearInterval(interval)
} , [])
  
  return (
    <div className="font-bevietnam  border-black overflow-hidden">
        {/* <img src="/bg-tablet-pattern.svg" alt="" srcset="" className='absolute -top-0 left-20 -z-10 '/> */}
      <div className="flex justify-between  border-red-600 items-center p-2 my-4 m-auto md:max-w-[750px]">
      <img src="/logo.svg" alt="Logo of company" srcset="" />
      <img src="/icon-hamburger.svg" alt="hamburger icon" srcset="" />
      </div>
      <div className="border-black p-2 flex flex-col md:flex-row-reverse md:justify-between md:max-w-[750px] m-auto">
      <div className="border-black md:w-[50%] ">
      <img src="/illustration-intro.svg" alt="Logo of company" srcset="" />
      </div>
      <div className="flex flex-col  border-green-700 md:w-[49%]">
      {/* <img src="/bg-tablet-pattern.svg" alt="" srcset="" className='absolute -top-20 left-20 w-full -z-10 overflow-hidden'/> */}
        <h2 className="border-red-500 text-[2.5rem] text-[hsl(228,39%,23%)] font-[500] text-center my-2 font-bold md:text-left md:my-3">Bring everyone together to build better products.</h2>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[70%] text-[1rem] my-2 md:m-0 m-auto md:text-left md:my-3">Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className=" py-2 px-3 rounded-2xl my-2 md:my-3 text-white shadow-[hsl(12,88%,59%)] bg-[hsl(12,88%,59%)] self-center md:self-start">Get Started</button>
      </div>
      </div>
      <div className="flex flex-col md:flex-row md:max-w-[750px] m-auto">
      <div className="">
        <h3 className=" text-[hsl(228,39%,23%)] font-[700] text-center my-2 text-[1.5rem] md:text-left">
        What’s different about Manage?
        </h3>
        <p className=" text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] text-[1rem] my-2 m-auto md:text-left md:m-0">Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams.</p>
      </div>
      <div className="border-green-600">
      <div className="flex flex-col my-2">
        <div className="flex items-center bg-[hsl(13,100%,96%)] md:bg-white w-[100%] self-end rounded-s-2xl ">
          <h3 className="p-2 rounded-2xl text-white bg-[#f25f3a] w-[20%] flex items-center justify-center">01</h3>
          <h4 className="font-bold p-2 text-[hsl(228,39%,23%)] text-[0.85rem]">Track company-wide progress</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%] md:self-end text-[1rem] my-2 m-auto md:m-0 md:pl-2">See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.</p>
      </div>
      <div className="flex flex-col  my-2">
        <div className="flex items-center bg-[hsl(13,100%,96%)] md:bg-white w-[100%] self-end rounded-s-2xl ">
          <h3 className="p-2 rounded-2xl text-white bg-[hsl(12,88%,59%)] w-[20%] flex items-center justify-center">02</h3>
          <h4 className="font-bold p-2 text-[hsl(228,39%,23%)] text-[0.85rem]">Advanced built-in reports</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%] md:self-end text-[1rem] my-2 m-auto md:m-0 md:pl-2">Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.</p>
      </div>
      <div className="flex flex-col my-2 pl-2">
        <div className="flex items-center bg-[hsl(13,100%,96%)] md:bg-white w-[100%] self-end rounded-s-2xl ">
          <h3 className="p-2 rounded-2xl text-white bg-[hsl(12,88%,59%)] w-[20%] flex items-center justify-center">03</h3>
          <h4 className="font-bold p-2 text-[hsl(228,39%,23%)] text-[0.85rem]">Everything you need in one place</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%] md:self-end text-[1rem] my-2 m-auto md:m-0 md:pl-2">Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.</p>
      </div>
      </div>
      </div>
      <div className="">
        <h2 className="text-[hsl(228,39%,23%)] font-[700] text-center my-2 text-[1.8rem]">What they’ve said</h2>
        <div className="flex justify-center my-4" onClick={changeSlide}>
        <img src={slides[currentIndex].image} alt="" srcset="" className='w-1/5'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)]">{slides[currentIndex].name}</h4>
        <p className="text-[hsl(0,0%,4%)] text-center text-sm my-2 w-4/5 m-auto">{slides[currentIndex].text}</p>
      </div>

      <div className="bg-[#f25f3a]">
        <div className="md:max-w-[750px] m-auto flex flex-col md:flex-row justify-between">
        <h1 className="text-3xl md:text-left text-white font-bold w-[90%] md:w-[40%] m-auto md:m-0 text-center p-4">Simplify how your team works today.</h1>
        <button className="py-2 px-6 md:m-0 rounded-2xl my-2 m-auto bg-white shadow-[hsl(12,88%,59%)] text-[hsl(12,88%,59%)] self-center font-semibold">Get Started</button>
        </div>
      </div>
      <div className="border-black bg-[hsl(233,12%,13%)] ">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly">
        <div className="flex w-4/5 md:w-2/6 m-auto  justify-between md:justify-center">
          <input type="text" name="" id="" placeholder='Updates in your inbox…' className="outline-none border-none p-2 rounded-2xl"/>
          <button className="py-2 px-6 rounded-2xl my-2 m-auto text-white bg-[hsl(12,88%,59%)] self-center font-semibold ml-2">Go</button>
        </div>
        <div className="grid grid-cols-2 p-4 text-white w-4/5 md:w-3/6 m-auto ">
          <div className=" ">Home</div>
          <div className=" ">Pricing</div>
          <div className=" ">Products</div>
          <div className=" ">About Us</div>
          <div className=" ">Careers</div>
          <div className=" ">Community</div>
          <div className=" ">Privacy Policy</div>
        </div>
        <div className="flex flex-col md:flex-col-reverse justify-between md:w-[20%]">
        <div className="flex justify-evenly">
          <img src="" alt="" srcset="./icon-facebook.svg" className='w-[30px] mx-1'/>
          <img src="" alt="" srcset="./icon-instagram.svg" className='w-[30px] mx-1'/>
          <img src="" alt="" srcset="./icon-pinterest.svg" className='w-[30px] mx-1'/>
          <img src="" alt="" srcset="./icon-twitter.svg"  className='w-[30px] mx-1'/>
          <img src="" alt="" srcset="./icon-youtube.svg"  className='w-[30px] mx-1'/>
        </div>
        <div className="flex justify-center mt-4" >
        <img src="/white-log.svg" alt="Logo of company" srcset="" />
        </div>
        </div>
        </div>
        <p className="text-[hsl(0,0%,98%)] text-center text-xs my-2">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  )
}
// hsl(227,12%,61%)
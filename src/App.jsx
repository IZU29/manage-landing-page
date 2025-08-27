import { useState , useEffect} from 'react'

import './App.css'


const changeWidth = () => {
  const [responsive , setResponsive] = useState(window.innerWidth)
  useEffect(() => {
    const Resize = () => {
    setResponsive(window.innerWidth)
    console.log('responsive')
  }
  window.addEventListener("resize" , Resize)
  return () => window.removeEventListener("resize" , Resize)
  
  } , [])
  return responsive
}
  
export default function App() {

  const [currentIndex , setCurrentIndex] = useState(0)
  const width = changeWidth()
  const isMobile = width > 750

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
  // console.log(currentIndex)
}
useEffect(() => {
  const interval = setInterval(changeSlide , 5000)
  return () => clearInterval(interval)
} , [])
  
  return (
    <div className="font-bevietnam  border-black overflow-hidden">
        {/* <img src="/bg-tablet-pattern.svg" alt="" srcset="" className='absolute -top-0 left-20 -z-10 '/> */}
      <div className="flex justify-between border-red-600 items-center my-8 px-4 m-auto md:max-w-[1440px]">
      <img src="/logo.svg" alt="Logo of company" srcset="" />
      <img src="/icon-hamburger.svg" alt="hamburger icon" srcset="" />
      </div>
      <div className="border-black p-2 flex flex-col md:flex-row-reverse md:justify-between md:max-w-[1440px] m-auto md:px-24 md:py-16">
      <div className="border-black md:w-[50%] ">
      <img src="/illustration-intro.svg" alt="Logo of company" srcset="" />
      </div>
      <div className="flex flex-col  border-green-700 md:w-[49%]">
      {/* <img src="/bg-tablet-pattern.svg" alt="" srcset="" className='absolute -top-20 left-20 w-full -z-10 overflow-hidden'/> */}
        <h2 className="border-red-500 text-[2.5rem]  text-[hsl(228,39%,23%)]  text-center my-2 font-bold md:text-left leading-tight mt-16 mb-6 md:mt-8 md:mb-4 md:text-4xl ">Bring everyone together to build better products.</h2>
        <p className="text-[hsl(227,12%,61%)] border-red-600 w-[80%] md:w-[70%] my-2 md:m-0 m-auto md:text-left md:my-3 text-base text-justify leading-relaxed max-w-prose md:text-lg md:leading-loose md:mb-6">Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className=" py-2 px-6 my-2 md:my-3 text-white shadow-[hsl(12,88%,59%)] bg-[hsl(12,88%,59%)] self-center md:self-start rounded-full text-[0.8rem] text-bold shadow-md">Get Started</button>
      </div>
      </div>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] m-auto md:px-24 md:py-16  ">
      <div className="">
        <h3 className=" text-[hsl(228,39%,23%)] font-[700] text-center text-[2rem] md:text-left mt-16 mb-6 leading-snug md:mt-8 md:mb-4 md:text-4xl ">
        What’s different about Manage?
        </h3>
        <p className=" text-[hsl(227,12%,61%)] text-center  border-red-600 w-[80%] text-[1.15rem] my-2 m-auto md:text-left md:m-0 text-base text-justify leading-relaxed max-w-prose md:text-lg md:leading-loose md:mb-6">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className="border-green-600 mt-16 md:mt-0  md:w-[65%]">
      <div className="flex flex-col my-2 mt-8 md:m-0 ">
        <div className="flex items-center bg-[hsl(13,100%,96%)]  md:w-[100%] md:bg-white w-[95%] self-end rounded-s-2xl md:justify-between">
          <h3 className="p-2 rounded-2xl text-white bg-[#f25f3a] w-[20%] md:w-[15%] flex items-center justify-center md:rounded-full md:text-xl">01</h3>
          <h4 className="font-bold text-[hsl(228,39%,23%)] text-[1rem] tracking-wide leading-snug border-blue-600 md:w-[80%] md:text-xl">Track company-wide progress</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%]  md:self-end text-[1rem] my-2 m-auto md:m-0 md:text-lg md:leading-loose md:mb-6">See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.</p>
      </div>
      <div className="flex flex-col my-2 mt-8">
        <div className="flex items-center bg-[hsl(13,100%,96%)] md:w-[100%] md:justify-between md:bg-white w-[95%] self-end rounded-s-2xl ">
          <h3 className="p-2 rounded-2xl text-white bg-[hsl(12,88%,59%)] w-[20%] flex items-center justify-center md:w-[15%]  md:rounded-full md:text-xl">02</h3>
          <h4 className="font-bold p-2 text-[hsl(228,39%,23%)]  md:w-[80%] text-[1rem] tracking-wide leading-snug md:text-xl ">Advanced built-in reports</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%] md:self-end text-[1rem] my-2 m-auto md:m-0 md:pl-2 text-base leading-relaxed md:text-lg md:leading-loose md:mb-6">Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.</p>
      </div>
      <div className="flex flex-col my-2 mt-8">
        <div className="flex items-center bg-[hsl(13,100%,96%)] md:bg-white w-[95%] md:w-[100%] md:justify-between self-end rounded-s-2xl ">
          <h3 className="p-2 rounded-2xl text-white bg-[hsl(12,88%,59%)]  w-[20%] flex items-center justify-center md:w-[15%]  md:rounded-full md:text-xl">03</h3>
          <h4 className="font-bold p-2 text-[hsl(228,39%,23%)] text-[1rem] tracking-wide leading-snug md:w-[80%] md:text-xl">Everything you need in one place</h4>
        </div>
        <p className="text-[hsl(227,12%,61%)] text-justify border-red-600 w-[90%] md:w-[80%] md:self-end text-[1rem] my-2 m-auto md:m-0 md:pl-2 md:text-lg md:leading-loose md:mb-6">Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.</p>
      </div>
      </div>
      </div>

      <div className="block md:hidden mt-16">
        <h2 className="text-[hsl(228,39%,23%)] font-[700] text-center my-2 text-[1.8rem] leading-snug">What they’ve said</h2>
        <div className="flex justify-center my-4" onClick={changeSlide}>
        <img src={slides[currentIndex].image} alt="" srcset="" className='w-1/5 mt-8'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)] mt-8">{slides[currentIndex].name}</h4>
        <p className=" text-center  text-[hsl(227,12%,61%)] my-2 w-4/5 m-auto mt-8 leading-relaxed text-base">{slides[currentIndex].text}</p>
       
      </div>
      <div className="hidden md:block  ">
      <h2 className="text-[hsl(228,39%,23%)] font-[700] text-center my-2 text-[1.8rem]">What they’ve said</h2>
      <div className="flex overflow-x-auto">
      <div className="w-1/4 min-w-[400px] bg-[hsl(0,0%,98%)] m-2">
      <div className="flex justify-center my-4 " onClick={changeSlide}>
        <img src={slides[0].image} alt="" srcset="" className='w-1/5 mt-8'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)] mt-8">{slides[0].name}</h4>
        <p className=" text-center  text-[hsl(227,12%,61%)] my-2 w-4/5 m-auto mt-8 leading-relaxed text-base">{slides[0].text}</p>
        
        </div>
        <div className="w-1/4 min-w-[400px] bg-[hsl(0,0%,98%)] m-2">
      <div className="flex justify-center my-4 " onClick={changeSlide}>
        <img src={slides[1].image} alt="" srcset="" className='w-1/5 mt-8'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)] mt-8">{slides[1].name}</h4>
        <p className=" text-center  text-[hsl(227,12%,61%)] my-2 w-4/5 m-auto mt-8 leading-relaxed text-base">{slides[1].text}</p>
        </div>
        <div className="w-1/4 min-w-[400px] bg-[hsl(0,0%,98%)] m-2">
      <div className="flex justify-center my-4 " onClick={changeSlide}>
        <img src={slides[2].image} alt="" srcset="" className='w-1/5 mt-8'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)] mt-8">{slides[2].name}</h4>
        <p className=" text-center  text-[hsl(227,12%,61%)] my-2 w-4/5 m-auto mt-8 leading-relaxed text-base">{slides[2].text}</p>
        </div>
        <div className="w-1/4 min-w-[400px] bg-[hsl(0,0%,98%)] m-2">
      <div className="flex justify-center my-4 " onClick={changeSlide}>
        <img src={slides[3].image} alt="" srcset="" className='w-1/5 mt-8'/>
        </div>
        <h4 className="text-center text-[1.2rem] font-bold text-[hsl(228,39%,23%)] mt-8">{slides[3].name}</h4>
        <p className=" text-center  text-[hsl(227,12%,61%)] my-2 w-4/5 m-auto mt-8 leading-relaxed text-base">{slides[3].text}</p>
        </div>
        </div>
      </div>
      <div className="bg-[#f25f3a] mt-16">
        <div className="md:max-w-[1050px] m-auto flex flex-col md:flex-row justify-between">
        <h1 className="text-4xl md:text-left text-white font-bold w-[90%] md:w-[40%] m-auto md:m-0 text-center p-4 leading-tight">Simplify how your team works today.</h1>
        <button className="py-2 px-6 shadow-lg mt-8 mb-3 md:m-0  my-2 m-auto bg-white shadow-[hsl(12,88%,59%)] text-[hsl(12,88%,59%)] rounded-full self-center font-semibold">Get Started</button>
        </div>
      </div>
      <div className=" bg-[hsl(233,12%,13%)] ">
        <div className="md:max-w-[1050px] m-auto ">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly">
        <div className="flex w-4/5 md:w-2/6 m-auto  justify-between md:justify-center items-center">
          <input type="text" name="" id="" placeholder='Updates in your inbox…' className="outline-none border-none px-4 py-2 rounded-full"/>
          <button className="py-2 px-6 my-2 m-auto text-white bg-[hsl(12,88%,59%)] self-center font-semibold ml-2 rounded-full">Go</button>
        </div>
        <ul className="grid grid-cols-2 p-4 text-white w-4/5 md:w-3/6 m-auto mt-8 pl-6 gap-4">
          <li className="space-y-3 ">Home</li>
          <li className="space-y-3 ">Pricing</li>
          <li className="space-y-3 ">Products</li>
          <li className="space-y-3 ">About Us</li>
          <li className="space-y-3 ">Careers</li>
          <li className="space-y-3">Community</li>
          <li className="space-y-4 ">Privacy Policy</li>
        </ul>
        <div className="flex flex-col md:flex-col-reverse justify-between md:w-[20%] mt-8">
        <div className="flex justify-evenly">
          <img src="./icon-facebook.svg" alt="" srcset="" className='w-[30px] mx-1'/>
          <img src="./icon-instagram.svg" alt="" srcset="" className='w-[30px] mx-1'/>
          <img src="./icon-pinterest.svg" alt="" srcset="" className='w-[30px] mx-1'/>
          <img src="./icon-twitter.svg" alt="" srcset=""  className='w-[30px] mx-1'/>
          <img src="./icon-youtube.svg" alt="" srcset=""  className='w-[30px] mx-1'/>
        </div>
        <div className="flex justify-center mt-8" >
        <img src="/white-log.svg" alt="Logo of company" srcset="" />
        </div>
        </div>
        </div>
        <p className="text-[hsl(0,0%,98%)] text-center text-xs my-2 mt-8">Copyright 2020. All Rights Reserved</p>
      </div>
      </div>
    </div>
  )
}
// hsl(227,12%,61%)
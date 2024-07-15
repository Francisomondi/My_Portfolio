import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className="text-7xl text-cyan-500"/>
            
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNextjsFill className="text-7xl"/>
            
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className="text-7xl text-green-500"/>
            
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className="text-7xl text-green-500"/>
            
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostgresql className="text-7xl text-sky-700"/>
            
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className="text-7xl text-orange-800"/>
            
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className="text-7xl text-yellow-500"/>
            
        </div>
        
      </div>
    </div>
  )
}

export default Technologies

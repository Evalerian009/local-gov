import BioImg from '../assets/potrait.jpg'
import Smudge from '../assets/smudge2.png' 
import { PiTargetLight } from "react-icons/pi";
import { MdCheckCircle } from "react-icons/md";

const Bio = () => {
  return (
    <div className='py-24 px-6 md:px-10 lg:px-28 bg-white overflow-clip'>
        <div className='max-w-6xl mx-auto flex items-center flex-wrap gap-y-7 relative'>
            <div className='w-[30%] h-[500px] md:h-[650px] bg-slate-100 absolute right-0' />
            <img src={Smudge} alt='' className='absolute -bottom-24 md:-bottom-24 lg:-bottom-36 right-[32%] lg:right-[38%] w-[200px] lg:w-[300px]' />
            <div className='md:w-1/2 lg:w-[45%] md:pr-12 lg:pr-14 relative'>
                <div className='w-[70px] h-[2px] bg-emerald-500' />
                <h2 className='uppercase mt-3 text-lg text-emerald-500 font-semibold'>Local goverment chairman Benue Sate</h2>
                <h2 className='text-3xl lg:text-5xl font-bold text-slate-600 mt-5'>Title or man of the city</h2>
                <p className='text-slate-600 mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae natus iure, adipisci mollitia porro iusto quam blanditiis, eaque repudiandae nobis facere, iste nostrum doloremque libero ratione vitae enim pariatur?</p>
                <div className='flex items-center gap-3 mt-7'>
                    <div className='relative'>
                        <div className='absolute w-9 h-9 bg-slate-100 top-0 left-0' />
                        <PiTargetLight className='text-[4rem] text-emerald-500 relative' />
                    </div>
                    <h4 className='text-emerald-500 text-lg lg:text-[1.25rem] font-semibold'>Meet Ideological Leader for Youth Generation</h4>
                </div>
                <ul className='mt-5 flex flex-col gap-2'>
                    <li className='flex gap-2 items-center'>
                        <MdCheckCircle className='text-emerald-500 text-xl' />
                        <span>Making this the first true generator on the Internet</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <MdCheckCircle className='text-emerald-500 text-xl' />
                        <span>Making this the first true generator on the Internet</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <MdCheckCircle className='text-emerald-500 text-xl' />
                        <span>Making this the first true generator on the Internet</span>
                    </li>
                </ul>
            </div>

            <div className='md:w-1/2 lg:w-[55%] relative'>
                <img src={BioImg} alt="" className='w-full max-h-[450px] md:h-[560px] object-cover shadow-xl' />
                <h5 className='bg-white absolute top-[35%] -left-[100px] py-3 px-9 uppercase font-semibold text-lg text-slate-700 rotate-[-90deg] shadow-2xl shadow-black'>L.G chairman</h5>
            </div>
        </div>
    </div>
  )
}

export default Bio
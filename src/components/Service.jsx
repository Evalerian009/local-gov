import {useState} from 'react'

const Service = ({ item }) => {
    const [ hovered, setHovered] = useState(false)

    const hoverHandler = () => ((
        setHovered(true)
    ))
    const notHoverHandler = () => ((
        setHovered(false)
    ))
    const Icon = item.icon
    
    return (
        <div className='w-full md:w-1/3 lg:w-1/5' onMouseEnter={hoverHandler} onMouseLeave={notHoverHandler}>
            <div className={`${hovered ? 'bg-emerald-600 text-white' : 'bg-white translate-y-4'} px-4 py-10 duration-300 shadow-md w-[95%] justify-center`}>
                <div className={`${hovered ? 'bg-emerald-700 text-white' : 'bg-slate-100'} w-[100px] h-[100px] mx-auto rounded-full flex items-center justify-center text-[2.5rem] duration-300`}>
                    <Icon />
                </div>
                <p className='uppercase text-center mt-2'>{item.title}</p>
            </div>
        </div>
    )
}

export default Service
import { services } from './constants';
import Service from './Service';

const ServiceList = () => {
    return (
    <div className='py-20 px-6 md:px-10 lg:px-28'>
        <div className='max-w-6xl mx-auto flex flex-wrap gap-y-7'>
            {services.map(item => {
                return(
                    <Service key={item.id}  item={item} />
                )
            })}
        </div>
    </div>
  )
}

export default ServiceList
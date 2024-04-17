import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const House = ({ card }) => {
    const { image_url,
        estate_title,
        id,
        price,
        status,
        area,
        location,
    } = card;
    return (
        <>
            <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector" className="card card-compact w-full bg-base-100 shadow-xl m-3 relative ">
                <figure><img src={image_url} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-extrabold">{estate_title}</h2>
                    <p className="text-[#6c6a6f] flex gap-3 mt-2 "><FaLocationDot className="text-xl text-[#FFA920]" />{location}</p>
                    <div className="flex">
                        <p className="text-xl font-extrabold text-[#FFA920]">{price}</p>
                        <p><span className="text-[#6E55FF] font-semibold"> Area : {area}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/${id}`}><button className="btn btn-outline font-bold">View Property</button></Link>
                    </div>
                </div>
                <div className=" text-white font-bold w-24 absolute top-2 -left-1 z-20">
                    <p className="bg-[#FFA920]  mb-4 py-1 px-1 rounded-r-full" >Featured</p>
                    <p className="bg-[#6E55FF]  py-1 px-3 rounded-r-full " >For {status}</p>

                </div>
            </div>

        </>
    )
};

export default House;
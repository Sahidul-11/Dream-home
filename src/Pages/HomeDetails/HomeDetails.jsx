import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const HomeDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const item = cards.find(card => card.id == id)
    const { image_url,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities } = item;
    const [a, b, c] = facilities;
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card w-full bg-base-100 shadow-2xl relative">
                <figure className="px-2 pt-10 h-[500px] rounded-xl mt-5">
                    <img src={image_url} alt="" className="rounded-2xl" />
                </figure>
                <div className="card-body items-center">
                    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{estate_title}.</h1>
                                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                                    <div className="flex items-center md:space-x-2">

                                        <p className="text-xl font-semibold mr-6 text-[#e33324]">{segment_name}</p>
                                    </div>
                                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                                </div>
                                <p className="text-[#6c6a6f] flex gap-3 mt-2 "><FaLocationDot className="text-xl text-[#FFA920]" />{location}</p>
                                <div className="flex">
                                    <p className="text-xl font-extrabold text-[#FFA920]">{price}</p>
                                    <p><span className="text-[#6E55FF] font-bold text-2xl"> Area : {area}</span></p>
                                </div>
                            </div>
                            <div className="dark:text-gray-800">
                                <p>{description}</p>
                            </div>
                        </article>
                        <div>
                            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-left">Facilities</h4>
                                <ul className="ml-4 space-y-1 list-disc text-left">
                                    <li>{a} </li>
                                    <li>{b} </li>
                                    <li>{c} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions gap-20">
                      <Link to="/">  <button className="btn btn-secondary">Back to Home</button></Link>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    <div className=" text-white font-bold w-24 absolute top-1/2 right-3 lg:right-52 z-20">
                        <p className="bg-[#FFA920]  mb-4 py-1 px-1 rounded-r-full" >Featured</p>
                        <p className="bg-[#6E55FF]  py-1 px-3 rounded-r-full " >For {status}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;
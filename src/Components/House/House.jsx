
const House = ({card}) => {
    const{image_url,
        estate_title,
        id,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities} =card;
    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl m-3 relative ">
                <figure><img src= {image_url} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-extrabold">{estate_title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                <div className=" text-white font-bold w-24 absolute top-2 -left-1 z-20">
                    <p className="bg-[#FFA920]  mb-4 py-1 px-1 rounded-r-full" >Featured</p>
                    <p className="bg-[#6E55FF]  py-1 px-3 rounded-r-full " >For {status}</p>
                
                </div>
            </div>

        </>
    );
};

export default House;
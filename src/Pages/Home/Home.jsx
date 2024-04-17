import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import House from "../../Components/House/House";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Home = () => {
    Aos.init({
        easing: 'ease-in-sine',
        delay: 100,
    })
  const cards = useLoaderData();
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Banner></Banner>
      <div>
        <h1 className="text-5xl text-center font-bold my-20">Featured properties</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          cards.map(card =>
            <House   data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" key={card.id} card={card}></House>
          )
        }
      </div>
      < ToastContainer className="mt-96"/>
    </div>
  );
};

export default Home;
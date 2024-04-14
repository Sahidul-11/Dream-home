import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import House from "../../Components/House/House";

const Home = () => {
  const cards = useLoaderData();
  console.log(cards)
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-5xl text-center font-bold my-20">Featured properties</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          cards.map(card =>
            <House key={card.id} card={card}></House>
          )
        }
      </div>
    </div>
  );
};

export default Home;
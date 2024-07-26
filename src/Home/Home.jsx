
import { Helmet } from 'react-helmet-async';
import imgHome from "../assets/avataaars.svg"
import Star from "../star/Star";
function Home() {
    console.log('Home component loaded');

  return (
    <div className="bg-emerald-500 text-white p-5 text-center lg:mt-14 md:mt-14 ">
      <Helmet title="Home" />
      <img src={imgHome} alt="image" className="w-44 m-auto " />
      <h2 className="text-4xl font-bold mb-4">START FRAMEWORK</h2>
     <Star beforeClassName="bg-white h-1" afterClassName="bg-white h-1" />
      <p className="text-lg mb-4">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

export default Home;

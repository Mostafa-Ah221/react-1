import Star from "../star/Star";
import { Helmet } from 'react-helmet-async';


function About() {
  return (
    <div className="bg-emerald-500 text-white py-52">
      <Helmet title="About" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center uppercase">about component </h1>
      <Star beforeClassName="bg-white h-1" afterClassName="bg-white h-1" />
        <div className="flex lg:flex-row mt-4 sm:flex-col gap-y-5 gap-x-5 mx-5">
          <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
          <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        </div>
      </div>
    </div>
  );
}

export default About;

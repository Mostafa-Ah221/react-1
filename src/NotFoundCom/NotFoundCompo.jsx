import { Link } from "react-router-dom";

export default function NotFoundCompo() {
  return (
    <div className="py-32 text-center">
        <h1 className="text-red-600 font-semibold text-4xl">404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please try going back to the home page By clicking the following button.</p>
        <button className="border-2 border-cyan-800 hover:bg-cyan-900 hover:text-white duration-500 mt-4 p-2 rounded-md font-semibold"><Link to="">Go To Home</Link></button>
    </div>
  )
}

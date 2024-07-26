import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info() {
    return<div className="flex flex-col lg:flex-row justify-around items-center bg-cyan-950 text-lime-50 text-center py-28 ">
    <div className='sm:mb-7 mb-7'>
        <h1 className="text-3xl">LOCATION</h1>
        <p className="text-xs">2215 John Daniel Drive</p>
        <p className="text-xs">Clark, MO 65243</p>
        </div>
    <div className='sm:mb-7 mb-7'>
        <h1 className="text-3xl">AROUND THE WEB</h1>
        <div className="icons ml-7 flex gap-4">
                  <a className="flex items-center justify-center w-9 h-9 text-lg text-white border border-white rounded-full" href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="flex items-center justify-center w-9 h-9 text-lg text-white border border-white rounded-full" href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="flex items-center justify-center w-9 h-9 text-lg text-white border border-white rounded-full" href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className="flex items-center justify-center w-9 h-9 text-lg text-white border border-white rounded-full" href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

        </div>
    </div>
    <div className='sm:mb-7 mb-7'>
        <h1 className="text-3xl">ABOUT FREELANCER</h1>
        <p className="text-base max-w-96">Freelance is a free to use, licensed Bootstrap theme created by Route </p>
    </div>
    </div>
}
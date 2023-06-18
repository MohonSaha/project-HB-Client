
import {FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-screen'>
            <footer className="footer mt-16 bottom-0 p-10 md:p-10 bg-base-300 text-base-content">
                <div>
                    <p className='text-xl font-semibold'>Room Ease</p>
                    <p>RoomEasesince 2018.</p>
                    <p>© All right reserved by RoomEase 2023</p>
                </div>
                <div>
                    <span className="footer-title">Office Address</span>
                    <p>Aminpur, Dhaka, Bangaldesh.</p>
                    <p>Helpline: 01983363535 , 01609185463</p>
                    <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>

                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control md:w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative w-full">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full" />
                            <button className=" text-white btn bg-[#09c3d0] border-[#09c3d0] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' href='https://www.youtube.com/@livingisland4893' rel="noreferrer"><FaYoutubeSquare className='text-3xl'></FaYoutubeSquare></a>
                        <a target='_blank' href='https://www.linkedin.com/in/mohonsaha' rel="noreferrer"><FaLinkedin className='text-3xl'></FaLinkedin></a>
                        <a target='_blank' href='https://www.facebook.com/spdmohonsaha/' rel="noreferrer"><FaFacebookSquare className='text-3xl'></FaFacebookSquare></a>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;
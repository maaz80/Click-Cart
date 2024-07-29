import React from 'react'
import LinkedIn from '../../images/LinkedIn.webp'
import Insta from '../../images/Insta.webp'
import FB from '../../images/FB.webp'

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-5 text-center view rounded-xl">
                <div className="flex justify-around flex-wrap">
                    <div className="footer-section  flex-1 min-w-[200px] m-2 p-2 rounded ">
                        <h2 className="text-xl mb-2">About</h2>
                        <p className="text-gray-300">Information about Click Cart, the services we offer, and our mission.</p>
                    </div>
                    <div className="footer-section  flex-1 min-w-[200px] m-2 p-2 rounded ">
                        <h2 className="text-xl mb-2">Contact</h2>
                        <p className="text-gray-300">Email: support@clickcart.com</p>
                        <p className="text-gray-300">Phone: +123-456-7890</p>
                    </div>
                    <div className="footer-section  flex-1 min-w-[200px] m-2 p-2 rounded justify-center items-center">
                        <h2 className="text-xl mb-2">Social Media</h2>
                        <div className="flex justify-center items-center gap-4">
                        <a href="https://www.linkedin.com/in/maaz-shakeel-4501072a7/" target="_blank" className="block mb-2">
                            <img src={LinkedIn} alt="LinkedIn" className="w-7 inline hover:scale-125 hover:ease-in-out" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="block mb-2">
                            <img src={Insta} alt="Instagram" className="w-7 inline hover:scale-125 hover:ease-in-out" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" className="block mb-2">
                            <img src={FB} alt="Facebook" className="w-7 inline hover:scale-125 hover:ease-in-out" />
                        </a>
                        </div>
                    </div>
                    <div className="footer-section  flex-1 min-w-[200px] m-2 p-2 rounded ">
                        <h2 className="text-xl mb-2">Privacy Policy</h2>
                        <p className="text-gray-300"><a href="privacy.html" className="text-gray-300 hover:underline">Read our Privacy Policy</a></p>
                    </div>
                </div>
                <p className="mt-5 text-sm">&copy; 2024 Click Cart. All rights reserved.</p>
            </footer>
  )
}

export default Footer

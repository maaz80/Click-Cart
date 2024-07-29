import React from 'react';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div className='w-full md:w-[92%] rounded-md m-auto p-5 flex flex-col gap-5 poppins-regular'>
            <div className='text-2xl text-gray-500 font-semibold'>
                About Us
            </div>
            <div className='h-1 w-full bg-gray-500 mb-5'></div>
            <div className='p-4 mb-4 rounded-lg shadow-md bg-blue-100 animate-slide-in'>
                <h2 className='text-xl font-bold mb-2'>Our Mission</h2>
                <p>
                    At Click Cart, our mission is to provide the best online shopping experience by offering a wide variety of products, exceptional customer service, and innovative solutions.
                </p>
            </div>
            <div className='p-4 mb-4 rounded-lg shadow-md bg-green-100 animate-slide-in'>
                <h2 className='text-xl font-bold mb-2'>Our Vision</h2>
                <p>
                    Our vision is to become the leading e-commerce platform known for its quality, reliability, and customer-centric approach, making online shopping convenient and enjoyable for everyone.
                </p>
            </div>
            <div className='p-4 mb-4 rounded-lg shadow-md bg-yellow-100 animate-slide-in'>
                <h2 className='text-xl font-bold mb-2'>Our Values</h2>
                <ul className='list-disc list-inside ml-5'>
                    <li>Customer Satisfaction: Our top priority is to ensure our customers are happy and satisfied with our products and services.</li>
                    <li>Innovation: We continuously seek innovative solutions to improve our offerings and enhance the shopping experience.</li>
                    <li>Integrity: We conduct our business with the highest standards of integrity, transparency, and ethical behavior.</li>
                    <li>Quality: We are committed to providing high-quality products and services to our customers.</li>
                    <li>Teamwork: We believe in the power of teamwork and collaboration to achieve our goals and deliver outstanding results.</li>
                </ul>
            </div>
            <div className='p-4 mb-4 rounded-lg shadow-md bg-purple-100 animate-slide-in'>
                <h2 className='text-xl font-bold mb-2'>Our History</h2>
                <p>
                    Founded in [2024], Click Cart started with a small team of passionate individuals who aimed to revolutionize the online shopping experience. Over the years, we have grown into a reputable e-commerce platform, serving thousands of satisfied customers and offering a diverse range of products.
                </p>
            </div>
            <div className='p-4 mb-4 rounded-lg shadow-md bg-red-100 animate-slide-in'>
                <h2 className='text-xl font-bold mb-2'>Contact Us</h2>
                <p>
                    We value your feedback and are here to assist you with any questions or concerns. Feel free to reach out to us through our contact form or email us at support@clickcart.com.
                </p>
            </div>
            <Footer/>
        </div>

    );
};

export default AboutUs;

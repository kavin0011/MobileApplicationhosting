import React from 'react';
// import AboutUsImage from './path-to-your-image.jpg'; // Ensure you have an appropriate image
import images from '../../img'
import Image from 'next/image';
const About = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center font-montserrat text-blue-800 mb-6">About Us</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image src={images.Aboutus} alt='About us' ></Image>
                        {/* <Image href={images.Aboutus} alt="About Us" className="rounded-lg shadow-lg" height={500} width={700} ></Image> */}
                    </div>
                    <div className="md:w-1/2 md:pl-6">
                        <p className="text-xl mb-4">
                            Welcome to <strong>PulseTopup</strong>, your trusted partner for seamless and hassle-free mobile recharges. At <strong>PulseTopup</strong>, we are committed to providing you with a user-friendly, secure, and efficient platform to manage all your mobile recharge needs.
                        </p>
                        <h2 className="text-2xl font-semibold text-blue-800 font-montserrat mb-3">Our Mission</h2>
                        <p className="mb-4 font-kanit">
                            Our mission is to revolutionize the way you recharge your mobile devices. We strive to offer an intuitive and reliable solution that caters to all your mobile recharge requirements, from prepaid to postpaid services. We aim to deliver exceptional value through our innovative features, competitive pricing, and outstanding customer support.
                        </p>
                        <h2 className="text-2xl font-semibold text-blue-800 font-montserrat mb-3">Our Vision</h2>
                        <p className="mb-4 font-kanit">
                            We envision a world where mobile connectivity is seamless and accessible to everyone. Our vision is to become the leading mobile recharge application, known for our commitment to quality, convenience, and customer satisfaction.
                        </p>
                        <h2 className="text-2xl font-semibold text-blue-800 font-montserrat mb-3">Our Values</h2>
                        <ul className="list-disc list-inside mb-4"> 
                            <li className="font-kanit">Customer Focus</li>
                            <li className="font-kanit">Innovation</li>
                            <li className="font-kanit">Integrity</li>
                            <li className="font-kanit">Excellence</li>
                            <li className="font-kanit">Community</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Contact Us</h2>
                        <p className="font-kanit">Email: <a href="mailto:support@pulsetopup.com" className="text-blue-600">support@pulsetopup.com</a></p>
                        <p className="font-kanit">Phone: 1800-123-4567</p>
                        <p className="font-kanit">Instagram: Pulsetopup_Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

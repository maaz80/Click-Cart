import React from 'react';

const Support = () => {

    return (
        <div className='w-full md:w-[92%] rounded-md m-auto p-5 flex flex-col gap-5 poppins-regular'>
            <div className='text-2xl text-gray-500 font-semibold'>
                Support
            </div>
            <div className='h-1 w-full bg-gray-500 mb-5'></div>
            {supportPoints.map((point, index) => (
                <div
                    key={index}
                    className={`p-4 mb-4 rounded-lg shadow-md bg-${point.bgColor} animate-slide-in`}
                >
                    <h2 className="text-xl font-bold mb-2">{point.title}</h2>
                    {point.description && <p>{point.description}</p>}
                    {point.list && (
                        <ul className='list-disc list-inside ml-5'>
                            {point.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <div className="p-4 mb-4 rounded-lg shadow-md  animate-slide-in bg-orange-100">
                <h2 className="text-xl font-bold mb-2 ">Contact Us</h2>
                <div className="contact-form">
                    <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="name" className="block mb-1">Name:</label>
                            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block mb-1">Email:</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="block mb-1">Message:</label>
                            <textarea id="message" name="message" rows="6" className="w-full p-2 border rounded" required></textarea>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const supportPoints = [
    {
        title: '1. Introduction',
        description: 'Welcome to Click Cart. These terms and conditions outline the rules and regulations for the use of our website.',
        bgColor: 'red-300',
    },
    {
        title: '2. Intellectual Property Rights',
        description: 'Other than the content you own, under these Terms, Click Cart and/or its licensors own all the intellectual property rights and materials contained in this Website.',
        bgColor: 'blue-400',
    },
    {
        title: '3. Restrictions',
        list: [
            'Publishing any Website material in any other media;',
            'Selling, sublicensing, and/or otherwise commercializing any Website material;',
            'Publicly performing and/or showing any Website material;',
            'Using this Website in any way that is or may be damaging to this Website;',
            'Using this Website in any way that impacts user access to this Website;',
            'Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;',
            'Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website;',
            'Using this Website to engage in any advertising or marketing.',
        ],
        bgColor: 'green-500',
    },
    {
        title: '4. Your Content',
        description: 'In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images, or other material you choose to display on this Website. By displaying Your Content, you grant KhanaDotCom a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.',
        bgColor: 'yellow-500',
    },
    {
        title: '5. No Warranties',
        description: 'This Website is provided "as is," with all faults, and Click Cart express no representations or warranties, of any kind related to this Website or the materials contained on this Website.',
        bgColor: 'gray-300',
    },
    // Add more points as needed
];

export default Support;

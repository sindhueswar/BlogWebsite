import React from 'react';
import Image from 'next/image';
import testimonial from './../../assets/test.jpg';

const testimonialsData = [
  { text: "Needless to say we are extremely satisfied with the results. I don't always clop, but when I do, it's because of software.", name: "Gracia E." },
  { text: "Thanks for the great service. I don't always clop, but when I do, it's because of software. I was amazed at the quality of software. I wish I would have thought of it first.", name: "Berthe R." },
  { text: "Service has got everything I need. Man, this thing is getting better and better as I learn more about it.", name: "Ruby Q." },
];

function Testimonials() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl py-10 mx-auto">
        <h1 className="text-4xl text-center font-bold">Testimonials</h1>
        <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
          {testimonialsData.map((t, k) => (
            <div key={k} className="w-full bg-gray-100 shadow-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Image src={testimonial} alt="User" width={50} height={50} className="w-16 h-16 rounded-full" />
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-500">{t.text}</p>
                <p className="text-gray-500">-{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;















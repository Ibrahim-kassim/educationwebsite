import React from 'react';
import wazer from "../../assets/wazer.jpeg";
import exams from "../../assets/s.jpeg";

const FinalNews = () => {
  const news = [
    { image: wazer, description: "The Minister of Education is the government official responsible for overseeing all aspects of the education system in the country, including curriculum development and school management. The minister also formulates education policies and implements reforms aimed at improving the quality of education and providing learning opportunities for all students. ", createdAt: "2023-06-25" },
    { image: exams, description: "Exams serve as critical assessments that evaluate students' understanding and application of academic knowledge and skills within a defined timeframe.", createdAt: "2023-06-26" },
    { image: "https://via.placeholder.com/150", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis repudiandae excepturi velit? Porro eum facere rerum voluptates repudiandae beatae deserunt reiciendis ex quia similique perferendis minima cumque delectus saepe itaque vero debitis vitae molestias est exercitationem ut, adipisci laboriosam quod. Atque doloremque nisi nihil possimus iusto distinctio numquam delectus.", createdAt: "2023-06-27" },
    { image: "https://via.placeholder.com/150", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis repudiandae excepturi velit? Porro eum facere rerum voluptates repudiandae beatae deserunt reiciendis ex quia similique perferendis minima cumque delectus saepe itaque vero debitis vitae molestias est exercitationem ut, adipisci laboriosam quod. Atque doloremque nisi nihil possimus iusto distinctio numquam delectus.", createdAt: "2023-06-28" },
  ];

  return (
    <div className='flex w-full h-full bg-blue-700 px-8 py-8'>
      <div className='bg-white flex w-full z-50 border-2 rounded-2xl'>
        <div className='px-4 py-4 w-full rounded-xl border-2 border-gray-300'>
          <h1 className='text-2xl font-semibold underline'>Latest News</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full px-4 py-12'>
            {news.map((item, index) => (
              <div key={index} className='bg-white p-4 flex flex-col'>
                <div className='flex items-center'>
                  <img src={item.image} alt="news" className='w-32 h-32 object-cover rounded-lg mr-4 ' />
                  <p className='text-gray-700'>{item.description}</p>
                </div>
                <p className='mt-2 text-gray-500 text-sm'>{item.createdAt}</p>
                <hr className='mt-2 text-black' />
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default FinalNews;

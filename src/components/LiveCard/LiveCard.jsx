import React, { useState } from 'react';

const LiveCard = ({ description, postedBy, postedDate }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const truncateDescription = (desc, wordLimit) => {
    const words = desc.split(' ');
    if (words.length > wordLimit) {
      return { truncatedText: words.slice(0, wordLimit).join(' ') + '...', isTruncated: true };
    }
    return { truncatedText: desc, isTruncated: false };
  };

  const { truncatedText, isTruncated: truncate } = truncateDescription(description, 30);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden  h-72 w-96 relative">
      <div className="p-4 ">
        <h2 className="text-xl font-semibold text-white border-2 border-white rounded-full bg-red-400 text-center ">Live Event</h2>
        <p className="text-gray-600 mt-2 border-dotted border-2 min-h-full flex items-center">{isTruncated ? truncatedText : description}</p>
        {truncate && (
         <div className='py-4'>
            <small className='bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-all ease-in-out  cursor-pointer'>Read More</small>
         </div>
        )}
      </div>
      <div className="px-4 pb-4 flex gap-5 items-center text-gray-500 text-sm justify-end bottom-0 absolute">
        <span className='text-black  '>Posted by {postedBy}</span>
        <span>{postedDate}</span>
      </div>

    </div>
  );
};

export default LiveCard;

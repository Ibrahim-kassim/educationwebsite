import React from "react";
import { CgMediaLive } from "react-icons/cg";
import LiveCard from "../../components/LiveCard/LiveCard";

const Live = () => {
  const liveEvents = [
    { description: "This is a live event description 1.", postedBy: "John Doe", postedDate: "18:50PM" },
    { description: "This is a live event description 2.", postedBy: "Jane Smith", postedDate: "19:00PM" },
    { description: "This is a live event description Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nostrum dignissimos sapiente rem commodi a beatae harum necessitatibus tempora eligendi eius nisi officia aperiam ipsa nulla sunt adipisci consectetur distinctio maiores, quod facilis exercitationem animi. ", postedBy: "Alice Johnson", postedDate: "19:30PM" },
    { description: "This is a live event description 4.", postedBy: "Bob Brown", postedDate: "20:00PM" },
  ];

  return (
    <div className="p-8 min-h-screen min-w-full ">
        
      <div className="flex items-center gap-4 text-4xl py-8 w-full justify-center relative">
        <h1 className="font-bold text-blue-500">On All The Time</h1>
        <CgMediaLive className="text-red-600 text-5xl animate-pulse" />
        <div className="absolute top-2 right-4 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {liveEvents.map((event, index) => (
            <LiveCard 
              key={index}
              description={event.description}
              postedBy={event.postedBy}
              postedDate={event.postedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;

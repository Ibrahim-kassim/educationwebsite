import React from 'react';

const CourseCard = ({ title, subtitle, iconSrc: Icon, bgColor = 'bg-blue-800' }) => {
  return (
    <div className={`w-64 h-40 ${bgColor} rounded-lg shadow-lg overflow-hidden relative`}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 right-4 text-white text-right">
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <h3 className="text-lg">{subtitle}</h3>
        </div>
        <div className="absolute bottom-4 right-4">
          <Icon className="w-12 h-12 opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

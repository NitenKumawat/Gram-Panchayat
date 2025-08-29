import React from 'react';

const MemberCard = ({ member, imageLeft }) => {
  return (
    <div className="flex w-full bg-black/10 rounded-lg shadow-md overflow-visible h-auto md:h-56 items-center gap-6 px-4 md:px-6">
      {/* Image container with fixed aspect ratio */}
      <div
        className={`relative flex-shrink-0 w-32 md:w-40 aspect-[2/3] ${
          imageLeft ? '' : 'order-last'
        }`}
        style={{ marginTop: '-20px', marginBottom: '-20px' }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-grow p-2">
     <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
<p className="text-sm md:text-base text-gray-700 mb-2">{member.role}</p>
<p className="text-xs md:text-sm text-gray-600">{member.bio}</p>  </div>
    </div>
  );
};

export default MemberCard;

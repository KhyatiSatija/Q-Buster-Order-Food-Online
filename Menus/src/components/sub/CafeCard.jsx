import React from 'react'


const CafeCard = ({ name, color, children }) => {
  return (
    <div>
      <div className={`mb-16 ${color} p-5 rounded-2xl`}>
        <h1 className={`text-center text-7xl font-bold text-black mb-16`}>
          {name}
        </h1>
        <div className="flex justify-evenly items-center gap-8 flex-wrap">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CafeCard

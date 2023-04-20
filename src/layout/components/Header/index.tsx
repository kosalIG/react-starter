import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md h-16 ">
      <div className="flex gap-4 items-center justify-end px-6 h-full">
        <div className="cursor-pointer text-green-600 font-bold">EN</div>
        <div>|</div>
        <div>Log out</div>
      </div>
    </header>
  );
};

export default Header;

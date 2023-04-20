import React from 'react';
import { NavLIst } from 'layout/interface';
import { IconFire } from 'assets/icons';
import LI from './LI';
import Dropdown from '../SideBarDropdown';

const SideBar: React.FC<SideBarProps> = ({ navList }) => {
  return (
    <aside className="w-20 md:w-64 transition-all duration-150 ease-in-out bg-slate-800 flex flex-col">
      <div className="text-white flex items-center px-6 py-6 gap-2">
        <div>
          <IconFire className="w-9 h-9 text-green-600" />
        </div>
        <div className="text-xl font-bold hidden md:block">ADMIN</div>
      </div>
      <ul className="flex-1 overflow-y-auto overflow-x-hidden">
        {navList?.map((x) =>
          x.child ? (
            <Dropdown navObj={x} />
          ) : (
            <LI key={x.id} icon={x.icon} to={x.path}>
              {x.name}
            </LI>
          )
        )}
      </ul>
    </aside>
  );
};

export default SideBar;

interface SideBarProps {
  navList: NavLIst[];
}

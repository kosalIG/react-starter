import React, { useState } from 'react';
import { Collapse, Tooltip } from 'antd';
import { NavLIst } from 'layout/interface';
import { useMatch, useResolvedPath } from 'react-router-dom';
import PanelHeader from './PanelHeader';
import IconChevron from './IconChevron';
import DropdownLI from './DropdownLI';

const { Panel } = Collapse;

const Dropdown: React.FC<DropdownProps> = ({ navObj }) => {
  const [isDropdown, setIsdropdown] = useState(false);

  const resolved = useResolvedPath(navObj.path);

  const isActive = useMatch({
    path: resolved.pathname,
    end: false,
  });

  return (
    <>
      <li className=" text-slate-300 select-none hidden md:inline">
        <Collapse
          onChange={(collpe) => setIsdropdown(!!collpe.length)}
          destroyInactivePanel
          ghost
          defaultActiveKey={isActive?.pathname}
          className="text-slate-300"
        >
          <Panel
            header={
              <PanelHeader active={!!isActive}>
                <div className="flex items-center gap-2">
                  <span>{navObj?.icon}</span>
                  <span className="hidden md:inline-block">{navObj.name}</span>
                </div>
                <IconChevron isDropdown={isDropdown} />
              </PanelHeader>
            }
            key={navObj.path}
            showArrow={false}
          >
            <ul className="pl-6 pr-2 py-4 bg-black">
              {navObj?.child?.map((x) => (
                <DropdownLI className="pl-8 py-3" key={x.id} to={x.path}>
                  {x.name}
                </DropdownLI>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </li>

      {/* MOBILE SCREEN =========================================================== */}
      <Tooltip
        className="block md:hidden"
        destroyTooltipOnHide
        placement="rightTop"
        color="black"
        title={
          <ul className="py-4">
            {navObj?.child?.map((x) => (
              <DropdownLI className="px-4 py-3" key={x.id} to={x.path}>
                {x.name}
              </DropdownLI>
            ))}
          </ul>
        }
      >
        <li>
          <PanelHeader>
            <div className="text-slate-300">{navObj.icon}</div>
          </PanelHeader>
        </li>
      </Tooltip>
    </>
  );
};

export default Dropdown;

interface DropdownProps {
  navObj: NavLIst;
}

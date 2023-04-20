import { Tooltip } from 'antd';
import React, { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import LILink from './LILink';

const LI: React.FC<LIProps> = ({ to, icon, children }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: false });

  return (
    <>
      <li className="hidden md:inline">
        <LILink to={to} active={!!isActive}>
          <span>{icon}</span>
          <span>{children}</span>
        </LILink>
      </li>

      {/* MOBILE SCREEN =========================================================== */}
      <Tooltip
        destroyTooltipOnHide
        color="black"
        placement="right"
        className="block md:hidden text-slate-300"
        title={
          <Link to={to} className="text-slate-300 hover:text-slate-300">
            {children}
          </Link>
        }
      >
        <li>
          <LILink active={!!isActive} to={to}>
            <div>{icon}</div>
          </LILink>
        </li>
      </Tooltip>
    </>
  );
};

export default LI;

interface LIProps {
  to: string;
  icon: ReactNode;
  children: string | ReactNode;
}

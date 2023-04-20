import { IconDoubleChevronRight } from 'assets/icons';
import React, { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const DropdownLI: React.FC<DropdownLIProps> = ({ to, className, children }) => {
  const resolved = useResolvedPath(to);

  const isActive = useMatch({
    path: resolved.pathname,
    end: false,
  });

  return (
    <li className={className}>
      <Link
        to={to}
        className={`flex items-center gap-2  group hover:text-green-600 ${
          isActive ? 'text-green-600' : 'text-slate-300'
        }`}
      >
        <span>
          <IconDoubleChevronRight className="w-5 h-5" />
        </span>
        <span
          className={`group-hover:underline underline-offset-4 decoration-1 ${
            isActive ? 'underline' : ''
          }`}
        >
          {children}
        </span>
      </Link>
    </li>
  );
};

export default DropdownLI;

interface DropdownLIProps {
  to: string;
  children: string | ReactNode;
  className?: string;
}

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const LILink: React.FC<LILinkProps> = ({ active, to, children }) => {
  return (
    <Link
      className={`flex gap-2 px-6 py-4 mb-1 text-slate-300 border-l-2 border-transparent hover:bg-slate-900/50 hover:border-green-600 ${
        active ? 'border-green-600 bg-slate-900/95' : ''
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LILink;

interface LILinkProps {
  to: string;
  children: string | ReactNode;
  active?: boolean;
}

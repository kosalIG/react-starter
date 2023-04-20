import React, { ReactNode } from 'react';

const PanelHeader: React.FC<{ active?: boolean; children: ReactNode }> = ({
  active,
  children,
}) => {
  return (
    <div
      className={`flex justify-between items-center gap-2 px-6 py-4 text-slate-300 border-l-2 border-transparent hover:bg-slate-900/50 hover:border-green-600 ${
        active ? 'border-green-600 bg-slate-900/95' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default PanelHeader;

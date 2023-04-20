import React, { ReactNode } from 'react';
import { Trans as Tran } from 'react-i18next';

const Trans: React.FC<TransProps> = ({ key, children }) => {
  return <Tran key={key}>{children}</Tran>;
};

export default Trans;

interface TransProps {
  children: ReactNode;
  key: string;
}

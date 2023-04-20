import { ReactNode } from 'react';

export interface NavLIst {
  id: string;
  icon?: ReactNode;
  name: string;
  path: string;
  child?: NavLIst[];
}

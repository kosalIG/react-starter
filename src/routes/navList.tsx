import { IconDashboard, IconSetting, IconUser } from 'assets/icons';

export const navList = [
  {
    id: 'DASHBOARD',
    order: 1,
    icon: <IconDashboard />,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 'USER',
    order: 2,
    icon: <IconUser />,
    name: 'User',
    path: '/user',
  },
  {
    id: 'SETTING',
    order: 3,
    icon: <IconSetting />,
    name: 'Setting',
    path: '/setting',
    child: [
      {
        id: 'USER_GROUP',
        order: 1,
        name: 'User Group',
        path: '/setting/user-group',
      },
      {
        id: 'USER_ROLE',
        order: 2,
        name: 'User Role',
        path: '/setting/user-role',
      },
      {
        id: 'USER_PERMISSION',
        order: 3,
        name: 'User Permision',
        path: '/setting/user-permision',
      },
    ],
  },
];

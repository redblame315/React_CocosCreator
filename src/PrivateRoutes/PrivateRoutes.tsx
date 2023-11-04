import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface IPrivateRoutes {}

export const PrivateRoutes: FC<IPrivateRoutes> = () => {
  return <><Outlet /></>;
};

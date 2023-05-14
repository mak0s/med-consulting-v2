import { ReactNode } from 'react';

interface IProps {
  consultant: ReactNode;
  interactor: any;
}

const RootRouter = ({ consultant, interactor }: IProps) => {
  return <>{interactor.children.consultant && consultant}</>;
};

export default RootRouter;

import { ReactNode } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

interface IProps {
  consultant: ReactNode;
  authorization: ReactNode;
  interactor: any;
}

const RootRouter = ({ consultant, authorization, interactor }: IProps) => {
  return (
    <>
      {interactor.children.consultant && consultant}
      {interactor.children.authorization && authorization}
    </>
  );
};

export default RootRouter;

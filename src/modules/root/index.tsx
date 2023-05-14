import Consultant from 'modules/consultant';
import RootRouter from './router';
import useRootInteractor from './interactor';

const Root = () => {
  const interactor = useRootInteractor({});

  return <RootRouter interactor={interactor} consultant={<Consultant />} />;
};

export default Root;

import { useStores } from 'stores';
import Consultant from 'modules/consultant';
import Authorization from 'modules/authorization';
import RootRouter from './router';
import useRootInteractor from './interactor';

interface IProps {
  signInForm?: boolean;
  signUpForm?: boolean;
}

const Root = ({ signInForm = false, signUpForm = false }: IProps) => {
  const { authStore } = useStores();
  const interactor = useRootInteractor({ authStore });

  return (
    <RootRouter
      interactor={interactor}
      consultant={<Consultant />}
      authorization={
        <Authorization signInForm={signInForm} signUpForm={signUpForm} />
      }
    />
  );
};

export default Root;

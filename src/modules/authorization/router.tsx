import { IAuthInteractor } from './interactor';
import { SignIn, SignUp } from './views';
import { ISignInFormFields, ISignUpFormFields } from './types';
import { useRouter } from 'next/router';

interface IProps {
  interactor: IAuthInteractor;
}

const AuthRouter = ({ interactor }: IProps) => {
  const router = useRouter();

  const handleSignIn = async ({ email, password }: ISignInFormFields) => {
    await interactor.signIn(email, password);
    router.push('/');
  };

  const handleSignUp = async ({ email, password }: ISignUpFormFields) => {
    await interactor.signUp(email, password);
    router.push('/');
  };

  return (
    <>
      {interactor.children.signIn && <SignIn onSubmit={handleSignIn} />}
      {interactor.children.signUp && <SignUp onSubmit={handleSignUp} />}
    </>
  );
};

export default AuthRouter;

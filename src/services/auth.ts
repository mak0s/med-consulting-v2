import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { SignInError, SignUpError } from 'exceptions/auth';

export interface IAuthService {
  signIn: (auth: Auth, email: string, password: string) => Promise<User>;
  signUp: (auth: Auth, email: string, password: string) => Promise<User>;
  signOut: (auth: Auth) => void;
}

export class AuthService implements IAuthService {
  signIn: IAuthService['signIn'] = async (auth, email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredentials.user;
    } catch (e: any) {
      throw new SignInError(e.message, e.code);
    }
  };
  signUp: IAuthService['signUp'] = async (auth, email, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredentials.user;
    } catch (e: any) {
      console.log(e);
      throw new SignUpError(e.message);
    }
  };
  signOut: IAuthService['signOut'] = async (auth) => {
    await auth.signOut();
  };
}

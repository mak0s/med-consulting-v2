import { makeAutoObservable } from 'mobx';
import { User } from 'firebase/auth';
import { SignUpError, SignInError } from 'exceptions/auth';

export interface IAuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export class AuthStore implements IAuthStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser: IAuthStore['setUser'] = (user: User | null) => {
    this.user = user;
  };
}

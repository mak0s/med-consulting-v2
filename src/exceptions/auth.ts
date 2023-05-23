export class SignUpError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SignUpError';
  }
}

export class SignInError extends Error {
  errorCode: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'SignInError';
    this.errorCode = code;
  }
}

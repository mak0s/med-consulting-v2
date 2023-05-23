import Head from 'next/head';

import Root from 'modules/root';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <Root signInForm />
    </>
  );
}

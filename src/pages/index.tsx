import { User } from "components/user";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from 'react';
import { UserContext } from '../context';

const Home: NextPage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>DotaLytics | Analytics | Dota 2</title>
        <meta name="description" content="Modern analytics application for Dota 2 using the OpenDota API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>
          Dota<span>lytics</span>
        </h1>
        {/* Add Content Here */}
        <User />
      </div>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  //session will give email id and repository names

  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  // if (status !== "loading") {
  //   if (!session && typeof session != "undefined") {
  //     router.push(`/login`);
  //   }
  // }

  return (
    <div >
      <Head>
        <title>DevFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
      </main>
    </div>
  );
};

export default Home;

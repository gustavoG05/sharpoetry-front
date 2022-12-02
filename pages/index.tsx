import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-dark py-8">
      <Head>
        <title>Sharpoetry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-8 flex justify-between px-10 items-center bg-background bg-opacity-50 backdrop-blur-md w-11/12 rounded-tl-[45px] ">
        <Navbar/>
      </div>

      <div className="mt-10 py-8 flex justify-center items-center bg-background bg-opacity-80 text-black backdrop-blur-md w-11/12 rounded-br-[45px] ">
        <div className="flex justify-center items-center py-16 px-4 w-full"> 
        <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Home;

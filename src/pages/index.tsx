import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { Game } from '@/components/Game/Game'
import { ScoreBoard } from '@/components/ScoreBoard/ScoreBoard'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
      <ScoreBoard />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const title = "High Score";
  const score = 100;
  return {
    props: {
      title: title,
      score: score,
    },
  };
};

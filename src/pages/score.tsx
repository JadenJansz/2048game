import React from "react";
import { GetServerSideProps } from "next";

import ScoreBox from "../components/ScoreBox";

interface ScoreProps {
  score: number;
}

export default function Score(props) {

  console.log("jjjjjjjjjjjjj",props)
  return <ScoreBox title="Score" score={props.score} />;
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
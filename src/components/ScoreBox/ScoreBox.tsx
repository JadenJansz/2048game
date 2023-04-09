import { GetServerSideProps } from "next";
import React from "react";

import "./ScoreBox.module.scss";

interface ScoreBoxProps {
  title: string;
  score: number;
}

export const ScoreBox = (props: ScoreBoxProps) => {
  console.log(props)
  return <div className="scoreBox">
    <span className="title">{props.title}</span>
    <span className="score">{props.score}</span>
  </div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const title = "High Score";
  const score = 100;
  return {
    props: {
      title,
      score,
    },
  };
};


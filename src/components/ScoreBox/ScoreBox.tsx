import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

import styles from "./ScoreBox.module.scss";
const GAME_ID = "2048game";

interface ScoreBoxProps {
  title: string;
  score: number;
}

export const ScoreBox = (props: ScoreBoxProps) => {

  const [score, setScore] = useState({});

  useEffect(() => {
    setScore(props)
  }, [props])

  return <div className={styles.scoreBox}>
    <span className={styles.title}>{score?.title}</span>
    <span className={styles.score}>{score?.score}</span>
  </div>
}



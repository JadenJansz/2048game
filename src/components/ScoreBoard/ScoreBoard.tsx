import React from 'react'
import styles from "./ScoreBoard.module.scss";

export const ScoreBoard = () => {

    const data = [
        { name: 'John lololsd', score: 25100 },
        { name: 'Jane kkkkk', score: 21534 },
        { name: 'Bob', score: 53134 },
        { name: 'Alice', score: 88188 },
        { name: 'Tom', score: 23213 },
        { name: 'Mary', score: 561154 },
        { name: 'David', score: 89178 },
        { name: 'Karen', score: 12213 },
        { name: 'Sam', score: 54156 },
        { name: 'Linda', score: 23124 }
      ];

  return (
    <div className={styles.scoretable}>
      <h1 className={styles.title}>LeaderBoard</h1>
        {
          data.length ? (
            <div className={styles.table}>
                <div className={styles.tableHeader} >
                  <label style={{ paddingLeft: '25px' }}>Name</label>
                  <label style={{ paddingRight: '25px' }}>Score</label>
                </div>
                <div className={styles.tableRow}>
                  {data.map((row, index) => (
                    <div className={styles.tableData} key={index}>
                      <label>{row.name}</label>
                      <label style={{ textAlign: 'end', marginLeft: '80px' }}>{row.score}</label>
                    </div>
                  ))}
                </div>
            </div>
          ) : (
            <h3>Currently no data is available</h3>
          )
        }
    </div>
  )
}

import Game from '@/components/Game'
import ScoreBoard from '@/components/ScoreBoard'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main style={{ display: 'flex' }}>
        <Game />
        <ScoreBoard />
      </main>
    </div>
  )
}

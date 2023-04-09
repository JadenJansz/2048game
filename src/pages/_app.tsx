import Game from '@/components/Game'
import ScoreBoard from '@/components/ScoreBoard'
import '@/styles/globals.css'
import { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main style={{ display: 'flex' }}>
        <Component { ...pageProps } />
      </main>
    </div>
  )
}


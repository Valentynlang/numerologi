import { Inter } from 'next/font/google'
import Start from "@/pages/components/Start";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <Start/>

    </main>
  )
}

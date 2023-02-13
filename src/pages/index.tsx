import Navbar from '@/shared/Navbar'
import HomeInfo from '@/modules/HomeInfo'
import HomeStack from '@/modules/HomeStack'
import HomePortfolio from '@/modules/HomePortfolio'

export default function Home() {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 font-sans">
      <Navbar />
      <HomeInfo />
      <HomeStack />
      <HomePortfolio />
    </main>
  )
}

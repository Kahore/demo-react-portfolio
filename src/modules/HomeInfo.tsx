import Image from 'next/image'
import photo from '../../public/img/photo.jpg'
import SocialLinkedin from '@/components/SocialLinkedin'
import SocialGithub from '@/components/SocialGithub'

const HomeInfo = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center py-10">
        <h2 className="text-5xl py-2 text-orange-600 font-medium dark:text-orange-400 md:text-6xl">
          Konstantin Golubkin
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Frontend Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Freelancer providing services for programming needs. Join me down
          below and let's get cracking!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <SocialLinkedin />
          <SocialGithub />
        </div>
        <div className="mx-auto bg-gradient-to-b from-orange-500 rounded-full w-48 h-48 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={photo} alt={'Konstantin'} />
        </div>
      </div>
    </section>
  )
}
export default HomeInfo

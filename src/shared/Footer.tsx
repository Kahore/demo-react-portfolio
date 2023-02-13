import SocialLinkedin from '@/components/SocialLinkedin'
import SocialGithub from '@/components/SocialGithub'

const Footer = () => {
  return (
    <footer
      className={
        'flex items-center justify-between px-10 px-5 bg-gray-900 dark:bg-black md:px-20 md:py-20 lg:px-40 lg:py-20'
      }
    >
      <div>
        <p className="text-sm leading-5 lg:text-md py-2 leading-8 text-gray-200">
          2023 Konstantin Golubkin Portfolio
        </p>
      </div>
      <div>
        <div className="text-5xl flex justify-center gap-5 py-3 text-gray-400">
          <SocialLinkedin />
          <SocialGithub />
        </div>
      </div>
    </footer>
  )
}
export default Footer

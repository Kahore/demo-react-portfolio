import { useTheme } from '@/store/theme'
import DarkModeIcon from '../../public/icons/DarkMode.svg'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  function handleToggleTheme() {
    setTheme(!theme)
  }
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="text-xl"></h1>
      <ul className="flex items-center">
        <li>
          <DarkModeIcon
            onClick={handleToggleTheme}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            download
            target="_blank"
            className="bg-gradient-to-r from-amber-500 text- to-orange-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="Konstantin_Golubkin_CV.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

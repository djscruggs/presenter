
import { MoonIcon, SunIcon} from '@heroicons/react/24/solid'

interface ThemeProps {
  size?: string
  theme: string
  toggleTheme: () => void
}
export default function ThemeIcon({size, theme, toggleTheme}: ThemeProps) {
  if(!size) size = 'sm'
  const sizes: Record<string, string> = {
    'sm': 'w-8 h-8',
    'md': 'w-10 h-10',
    'lg': 'w-12 h-12',
    'xl': 'w-14 h-14',
  }
  if(!size) size = 'sm'
  
  return (
    <>
    <div 
      className='cursor-pointer' 
      onClick={toggleTheme} 
      tabIndex={0} 
      role="button" 
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleTheme(); }}
    >
      {theme === 'light' ? <SunIcon className={sizes[size]} /> : <MoonIcon className={sizes[size]} />}
    </div>
    </>
  )
}


interface Props {
  size?: TLogoSizes
}

type TLogoSizes = 'large' | 'small' | 'medium'

const logoSizes: Record<TLogoSizes, string> = {
  large: 'text-5xl',
  medium: 'text-3xl',
  small: 'text-lg'
}

const Logo = ({ size = 'medium' }: Props) => {
  return (
    <div className={`${logoSizes[size]} text-`}>
      <span
        className='text-green-400'
        style={{ fontFamily: "'Grand Hotel', cursive" }}
      >
        G
      </span>
      <span
        className='text-red-400'
        style={{ fontFamily: "'Grand Hotel', cursive" }}
      >
        o
      </span>
      <span
        className='text-yellow-400'
        style={{ fontFamily: "'Grand Hotel', cursive" }}
      >
        l
      </span>
      <span
        className='text-blue-400'
        style={{ fontFamily: "'Grand Hotel', cursive" }}
      >
        a
      </span>
    </div>
  )
}

export { Logo }

import { Logo } from 'components/shared'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Logo />
    </div>
  )
}

export default Home

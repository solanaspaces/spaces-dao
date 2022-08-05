import useQueryContext from '@hooks/useQueryContext'
import Link from 'next/link'

import ConnectWalletButton from './ConnectWalletButton'
import NotificationsSwitch from './NotificationsSwitch'
import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  const { fmtUrlWithCluster } = useQueryContext()

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-12">
      <div className="flex items-center justify-between h-20 col-span-12 px-4 xl:col-start-2 xl:col-span-10 md:px-8 xl:px-4">
        <Link href={fmtUrlWithCluster('/')}>
          <div className="flex cursor-pointer sm:items-center min-w-[36px]">
            Solana Spaces
          </div>
        </Link>
        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <ThemeSwitch />
          <NotificationsSwitch />
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  )
}

export default NavBar

import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/fqy"
            layout="fill"
          />
        </Link>
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 md:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="hidden flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 sm:inline-flex">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign in and Sign out button */}
      {session ? (
        <div
          className="flex cursor-pointer items-center space-x-2 border border-gray-100 p-2"
          onClick={() => signOut()}
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              alt=""
              layout="fill"
            />
          </div>

          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          className="mx-auto cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
          onClick={() => signIn()}
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              alt=""
              layout="fill"
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header

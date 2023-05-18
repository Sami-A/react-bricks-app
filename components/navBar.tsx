import Link from 'next/link'

export default function () {
  return (
    <nav className="sticky top-0 px-24 py-4 w-full backdrop-blur-2xl z-10 flex items-center justify-between font-mono text-sm">
      <Link
        className="pointer-events-none flex place-items-center gap-2  lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer"
      >
        <h1 className="flex items-center text-3xl sm:text-4xl font-extrabold dark:text-white">
          FleepD
          <span className="bg-blue-800 text-blue-800 text-lg sm:text-2xl font-semibold mr-2 px-2.5 pt-1 rounded dark:bg-blue-800 dark:text-white ml-2">
            PRO
          </span>
        </h1>
      </Link>
      <button className="from-zinc-200  bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 px-4 py-2 lg:dark:bg-zinc-800/30 bg-transparent hover:bg-white  hover:text-black  border border-gray-500 hover:border-transparent rounded">
        Login
      </button>
    </nav>
  )
}

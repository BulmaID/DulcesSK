import Link from 'next/link';

export const Logo = () => {
  return (
    <div>
      <section className='flex flex-row'>
            <Link href="/">
                <img src="/imgs/logoSK.png" alt="..." className='w-[110px] h-[110px]'/>
            </Link>
            <Link href="/">
            <h1 className="self-center text-7xl font-medium p-6 whitespace-nowrap text-[#10012d] dark:text-white">
            Dulces SK
          </h1>
            </Link>
        </section>
    </div>
  )
}



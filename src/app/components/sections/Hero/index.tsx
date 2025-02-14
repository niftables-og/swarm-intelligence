import Image from 'next/image'
import Bird from '@/../public/svgs/bird.svg'
import { cn } from '@/lib/utils'
import Logo from '@/../public/svgs/logo.svg'
import { Discord } from './icons/Discord'
import { X } from './icons/X'
import { RightArrow } from './icons/RightArrow'
import Link from 'next/link'
import { config } from '@/config'

const arrows = Array(100).fill(null)

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-20 flex">
        <div className="animate-slide relative h-full min-w-full flex-shrink-0">
          <Image
            src="/svgs/squares-animated.svg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="animate-slide relative h-full min-w-full flex-shrink-0">
          <Image
            src="/svgs/squares-animated.svg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Left and Right Gradients */}
      <div className="absolute inset-0 z-30">
        <Image
          src="/svgs/left-gradient.svg"
          alt="left gradient"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-30">
        <Image
          src="/svgs/right-gradient.svg"
          alt="Right gradient"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-30">
        <Image
          src="/images/noise.png"
          alt="Right gradient"
          fill
          className="object-cover opacity-20 mix-blend-darken"
        />
      </div>
      {/* Video Overlay */}
      <div className="absolute inset-0 z-20">
        <video
          className="h-full w-full object-cover opacity-30"
          autoPlay
          loop
          muted
        >
          <source
            p-14
            src="/videos/animation-numbers.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Bird */}
      <Image
        src={Bird}
        alt="Bird"
        className={cn(
          'animate-float absolute left-[30%] top-1/2 z-40 h-[90%] w-[70%] -translate-y-1/2 md:left-1/2 md:-translate-x-1/2',
        )}
      />
      {/* Content */}
      <div className="absolute inset-0 z-50 h-full w-full px-4 py-3 sm:px-12 sm:pt-8">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <Image
            src={Logo}
            alt="Logo"
            className="h-[44px] w-[44px] sm:h-[60px] sm:w-[60px]"
          />
          <div className="flex items-center gap-3">
            <Link
              href={config.socialMedia.x}
              target="_blank"
            >
              <button className="group rounded-md border border-light-line bg-dark-gray p-3 transition-all duration-500 ease-in-out hover:bg-green">
                <X className="h-4 w-4 text-white transition-colors duration-300 ease-in-out group-hover:text-black sm:h-5 sm:w-5" />
              </button>
            </Link>
            <Link
              href={config.socialMedia.telegram}
              target="_blank"
            >
              <button className="group rounded-md border border-light-line bg-dark-gray p-3 transition-all duration-500 ease-in-out hover:bg-green">
                <Discord className="h-4 w-4 text-white transition-colors duration-300 ease-in-out group-hover:text-black sm:h-5 sm:w-5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex h-full flex-col">
          <h2
            className={cn(
              'mr-4 w-full max-w-[400px] translate-x-1 font-rogan font-medium ~xs/xl:~text-[1rem]/[2rem] ~xs/xl:~leading-[1.375rem]/[2.2rem]',
              'absolute left-[40%] top-[15%] md:left-[60%] md:top-[5%]',
            )}
          >
            Uncovering hidden gems <br />
            with in-depth analysis
            <br /> & strategic market research
            <br /> since 2017.
          </h2>
          <div className="absolute top-1/2 w-full">
            <h1 className="font-rogan font-extrabold uppercase ~xs/xl:~text-[3.05rem]/[8rem] ~xs/xl:~leading-[3.05rem]/[8rem]">
              <span className="relative mr-2 text-green sm:mr-4">
                <Image
                  src="/gifs/glow.gif"
                  fill
                  className="object-cover mix-blend-luminosity"
                  alt="glow"
                />{' '}
                Swarm
              </span>
              Intel
            </h1>
            <h2 className="font-rogan font-bold uppercase ~xs/xl:~text-[1.875rem]/[3.875rem]">
              elite trading <span className="hidden sm:inline">group</span>
            </h2>
            <h2 className="-mt-3 font-rogan font-bold uppercase ~xs/xl:~text-[1.875rem]/[3.875rem] sm:hidden">
              group
            </h2>
            <button className="relative mt-10 hidden items-center rounded-md bg-black px-2 py-4 font-rogan text-[2rem] font-bold uppercase text-green outline-none focus:outline-none sm:flex">
              <span className="group absolute flex h-[65px] w-[65px] items-center justify-center overflow-hidden rounded-md bg-green transition-all duration-700 hover:w-[calc(100%-1rem)]">
                <div className="animate-arrows hidden gap-5 group-hover:flex">
                  {arrows.map((_, index) => (
                    <RightArrow key={index} />
                  ))}
                </div>
                <RightArrow className="group-hover:hidden" />
              </span>
              <span className="pl-40 pr-24">Join now</span>
            </button>
          </div>
          <p className="absolute bottom-[10%] right-[2%] hidden font-rogan text-lg font-medium leading-[1.125rem] sm:block">
            More details are coming soon
          </p>
        </div>
        <button className="absolute bottom-4 mt-16 flex w-[calc(100%-2rem)] items-center rounded-md border-4 border-main-black bg-green px-4 py-2.5 sm:hidden">
          <span className="flex-1 font-rogan text-2xl font-bold uppercase text-main-black">
            Join now
          </span>
          <RightArrow className="h-[18px] w-[18px]" />
        </button>
      </div>{' '}
    </div>
  )
}

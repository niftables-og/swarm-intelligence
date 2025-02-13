import Image from 'next/image'
import Bird from '@/../public/svgs/bird.svg'
import { cn } from '@/lib/utils'
import Logo from '@/../public/svgs/logo.svg'
import { Discord } from './icons/Discord'
import { X } from './icons/X'

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-10 flex">
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
          'animate-float absolute left-[30%] top-1/2 z-40 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2',
        )}
      />
      {/* Content */}
      <div className="absolute inset-0 z-50 h-full w-full p-12">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <Image
            src={Logo}
            alt="Logo"
          />
          <div className="flex items-center gap-3">
            <button className="group rounded-md border border-light-line bg-dark-gray p-3 transition-all duration-500 ease-in-out hover:bg-green">
              <X className="h-5 w-5 text-white transition-colors duration-300 ease-in-out group-hover:text-black" />
            </button>
            <button className="group rounded-md border border-light-line bg-dark-gray p-3 transition-all duration-500 ease-in-out hover:bg-green">
              <Discord className="h-5 w-5 text-white transition-colors duration-300 ease-in-out group-hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

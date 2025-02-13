import Image from 'next/image'
import Bird from '@/../public/svgs/bird.svg'
import { cn } from '@/lib/utils'

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
      <div className="absolute inset-0 z-20">
        <Image
          src="/svgs/left-gradient.svg"
          alt="left gradient"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-20">
        <Image
          src="/svgs/right-gradient.svg"
          alt="Right gradient"
          fill
          className="object-cover"
        />
      </div>
      {/* Video Overlay */}
      <div className="absolute inset-0 z-30">
        <video
          className="h-full w-full object-cover opacity-30"
          autoPlay
          loop
          muted
        >
          <source
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
          'animate-float absolute top-1/2 z-50 -translate-y-1/2',
          'left-[30%]',
          'md:left-1/2 md:-translate-x-1/2',
        )}
      />
    </div>
  )
}

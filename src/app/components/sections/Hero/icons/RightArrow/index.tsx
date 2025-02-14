import { forwardRef } from 'react'

type RightArrowProps = {
  className?: string
} & React.SVGProps<SVGSVGElement>

export const RightArrow = forwardRef<SVGSVGElement, RightArrowProps>(
  ({ className, ...props }, ref) => (
    <svg
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
      className={className}
    >
      <path
        d="M1 1L12 12L1 23"
        stroke="#0B0B0C"
        stroke-width="2"
      />
    </svg>
  ),
)

RightArrow.displayName = 'RightArrow'

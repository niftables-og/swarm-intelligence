import { forwardRef } from 'react'

type XProps = {
  className?: string
  fill?: string
} & React.SVGProps<SVGSVGElement>

export const X = forwardRef<SVGSVGElement, XProps>(
  ({ className, fill = 'currentColor', ...props }, ref) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
      className={className}
    >
      <path
        d="M7.67239 11.651L11.8537 18H18L11.1003 7.522L16.841 0H14.5141L10.0212 5.886L6.14634 0H0L6.59415 10.015L0.500488 18H2.82732L7.67239 11.651ZM12.7317 16L3.5122 2H5.26829L14.4878 16H12.7317Z"
        fill={fill}
      />
    </svg>
  ),
)

X.displayName = 'X'

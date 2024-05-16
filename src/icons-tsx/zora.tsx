import type { SVGProps } from 'react'

export const ZoraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="133"
      height="133"
      viewBox="0 0 133 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2019_3032)">
        <mask
          id="mask0_2019_3032"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="133"
          height="133"
        >
          <path d="M132.5 0.5H0.5V132.5H132.5V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2019_3032)">
          <path
            d="M66.1421 131.784C29.889 131.784 0.5 102.396 0.5 66.1421C0.5 29.889 29.889 0.5 66.1421 0.5C102.396 0.5 131.784 29.889 131.784 66.1421C131.784 102.396 102.396 131.784 66.1421 131.784Z"
            fill="url(#paint0_radial_2019_3032)"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_2019_3032"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(95.9448 35.7974) rotate(180) scale(110.884)"
        >
          <stop offset="0.00682297" stopColor="#F2CEFE" />
          <stop offset="0.1913" stopColor="#AFBAF1" />
          <stop offset="0.4982" stopColor="#4281D3" />
          <stop offset="0.666667" stopColor="#2E427D" />
          <stop offset="0.822917" stopColor="#230101" />
          <stop offset="1" stopColor="#8F6B40" />
        </radialGradient>
        <clipPath id="clip0_2019_3032">
          <rect x="0.5" y="0.5" width="132" height="132" rx="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

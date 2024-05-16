import type { SVGProps } from 'react'

export const BaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="133"
      height="133"
      viewBox="0 0 133 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2019_2733)">
        <mask
          id="mask0_2019_2733"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="133"
          height="133"
        >
          <path d="M132.5 0.5H0.5V132.5H132.5V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2019_2733)">
          <path
            d="M66.5 132.5C102.951 132.5 132.5 102.951 132.5 66.5C132.5 30.0492 102.951 0.5 66.5 0.5C30.0492 0.5 0.5 30.0492 0.5 66.5C0.5 102.951 30.0492 132.5 66.5 132.5Z"
            fill="#0052FF"
          />
          <path
            d="M66.7919 112.365C92.3728 112.365 113.11 91.663 113.11 66.1269C113.11 40.5907 92.3728 19.8896 66.7919 19.8896C42.5225 19.8896 22.6127 38.5228 20.6353 62.2403H81.857V70.0135H20.6353C22.6127 93.7307 42.5225 112.365 66.7919 112.365Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2019_2733">
          <rect x="0.5" y="0.5" width="132" height="132" rx="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

interface Props {
  color?: string;
}

function RotateRight({ color = "#000000" }: Props) {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10.55L18 14.55L22 10.55"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.65 18.08C14.3398 19.387 12.6171 20.1993 10.7752 20.3786C8.93336 20.558 7.0863 20.0931 5.54864 19.0634C4.01099 18.0337 2.87786 16.5028 2.34232 14.7314C1.80677 12.96 1.90192 11.0577 2.61154 9.34859C3.32116 7.63947 4.60135 6.22926 6.23407 5.35811C7.86679 4.48697 9.75103 4.20879 11.5658 4.571C13.3806 4.93321 15.0137 5.91327 16.1869 7.34444C17.3601 8.77561 18.0009 10.5693 18 12.4199V14.1499"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default RotateRight;

interface Props {
  color?: string;
}

function Sepia({ color = "#000000" }: Props) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20px"
      height="20px"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M256,18.29v18.29c30.35,0,59.16,6.14,85.41,17.24c39.35,16.64,72.9,44.49,96.56,79.52
           c23.66,35.04,37.46,77.16,37.46,122.67c0,30.35-6.14,59.16-17.24,85.41c-16.64,39.35-44.49,72.9-79.52,96.56
           c-17.51,11.83-36.82,21.2-57.41,27.6c-20.6,6.41-42.5,9.86-65.26,9.86c-30.35,0-59.16-6.14-85.41-17.24
           c-39.35-16.64-72.9-44.49-96.56-79.52C50.37,343.63,36.58,301.51,36.57,256c0-30.35,6.14-59.16,17.24-85.41
           c16.64-39.35,44.49-72.9,79.52-96.56C168.37,50.37,210.49,36.58,256,36.57V18.29V0c-35.3,0-69.02,7.16-99.65,20.13
           c-45.96,19.45-85.02,51.88-112.62,92.73C16.13,153.69-0.01,203.04,0,256c0,35.3,7.16,69.02,20.13,99.65
           c19.45,45.96,51.88,85.02,92.73,112.62c40.84,27.6,90.19,43.74,143.14,43.73c35.3,0,69.02-7.16,99.65-20.13
           c45.96-19.45,85.02-51.88,112.62-92.73c27.6-40.84,43.74-90.19,43.73-143.14c0-35.3-7.16-69.02-20.13-99.65
           c-19.45-45.96-51.88-85.02-92.73-112.62C358.31,16.13,308.96-0.01,256,0V18.29z"
          fill={color}
        />
        <path
          d="M256,164.57v182.86c-50.49,0-91.43-40.93-91.43-91.43S205.51,164.57,256,164.57z"
          fill={color}
        />
        <path
          d="M256,18.29v146.29c50.49,0,91.43,40.93,91.43,91.43s-40.93,91.43-91.43,91.43v146.29c131.29,0,237.71-106.42,237.71-237.71
           S387.29,18.29,256,18.29z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export default Sepia;

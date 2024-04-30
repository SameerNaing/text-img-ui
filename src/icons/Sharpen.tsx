interface Props {
  color?: string;
}

function Sharpen({ color = "#000000" }: Props) {
  return (
    <svg
      fill={color}
      height="18px"
      width="18px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 277.501 277.501"
    >
      <path
        d="M245.524,262.5c0,8.284-6.715,15-15,15c-0.004,0.001-0.012,0.001-0.02,0H46.977c-4.91,0-9.509-2.403-12.313-6.434
       c-2.804-4.03-3.458-9.178-1.751-13.781l91.764-247.5C126.856,3.903,132.467,0,138.74,0s11.884,3.903,14.064,9.785l91.481,246.735
       C245.083,258.353,245.524,260.375,245.524,262.5z"
      />
    </svg>
  );
}

export default Sharpen;

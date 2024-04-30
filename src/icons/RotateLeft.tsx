interface Props {
  color?: string;
}

function RotateLeft({ color = "#000000" }: Props) {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10.55L6 14.55L2 10.55"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.34 18.0801C9.64796 19.3895 11.3695 20.2047 13.2112 20.3872C15.053 20.5697 16.901 20.1081 18.4405 19.0808C19.98 18.0535 21.1157 16.5242 21.654 14.7534C22.1924 12.9827 22.1002 11.0802 21.3931 9.36988C20.686 7.65953 19.4077 6.24713 17.7761 5.37354C16.1445 4.49996 14.2605 4.21912 12.445 4.57887C10.6295 4.93861 8.99496 5.91668 7.81976 7.34645C6.64457 8.77621 6.00146 10.5692 6 12.4199V14.1499"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default RotateLeft;

import { SVGProps } from '@components/atoms/Icon';

const Star: React.FC<SVGProps> = ({ width, height, color }) => {
  return (
    <svg
      fill="none"
      width={width || 12}
      height={height || 12}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.9511 1.80915C6.65174 0.88784 5.34834 0.887833 5.04898 1.80915L4.40194 3.80054H2.30807C1.33935 3.80054 0.936568 5.04015 1.72028 5.60955L3.41426 6.8403L2.76722 8.83169C2.46787 9.753 3.52234 10.5191 4.30606 9.94973L6.00004 8.71898L7.69402 9.94972C8.47773 10.5191 9.53221 9.75301 9.23286 8.83169L8.58582 6.8403L10.2798 5.60955C11.0635 5.04015 10.6607 3.80054 9.69201 3.80054L7.59814 3.80054L6.9511 1.80915Z"
      />
    </svg>
  );
};

export default Star;

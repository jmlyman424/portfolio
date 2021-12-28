import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
  href,
  size,
  color,
  icon,
  disabled,
  children,
}) {
  const SIZES = {
    lg: 'px-10 py-4 text-xl',
    md: 'px-6 py-3',
    sm: 'p-2',
  };

  const COLORS = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus-visible:bg-blue-700',
    gray: 'bg-gray-600 hover:bg-gray-700 focus-visible:bg-gray-700',
    pink: 'bg-pink-600 hover:bg-pink-700 focus-visible:bg-pink-700',
    purple: 'bg-purple-600 hover:bg-purple-700 focus-visible:bg-purple-700',
    red: 'bg-red-600 hover:bg-red-700 focus-visible:bg-red-700',
    white: 'text-black bg-white hover:bg-gray-50 focus-visible:bg-gray-50',
    disabled: 'bg-gray-800 text-gray-200',
  };

  const ICONPADDING = {
    lg: 'mr-4',
    md: 'mr-2',
    sm: 'mr-2',
  };

  const setSize = size ? SIZES[size] : SIZES.md;
  const setColor = color ? COLORS[color] : COLORS.blue;
  const setIconPadding = size ? ICONPADDING[size] : ICONPADDING.sm;
  const setDisabled = disabled
    ? `cursor-not-allowed ${COLORS.disabled}`
    : 'cursor-pointer hover:translate-y-1 focus-visible:translate-y-1';

  const styles = `inline text-white text-center font-bold rounded transition-all duration-150
  ${setSize} ${setColor} ${setDisabled}`;

  return (
    <Link href={href || '#'} passHref>
      <button type="button" className={styles}>
        <div className="flex align-middle justify-center">
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              height="16"
              width="16"
              className={`${setIconPadding} font-normal self-center`}
            />
          )}
          {children}
        </div>
      </button>
    </Link>
  );
}

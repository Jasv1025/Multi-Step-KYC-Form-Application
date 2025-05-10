// Import ReactNode type for describing JSX children and standard button attributes
import { ReactNode, ButtonHTMLAttributes } from 'react';

// Define a type for the button component's props
// - `children` is the content inside the button (usually text or an icon)
// - Spread all default HTML button attributes (like onClick, type, disabled, etc.)
type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Define a reusable Button component that applies styling and forwards props
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      {...props} // Forward all standard button props
    >
      {children}
    </button>
  );
}
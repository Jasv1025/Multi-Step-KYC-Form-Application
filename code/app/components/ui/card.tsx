// Import ReactNode to type the children prop (JSX elements inside the component)
import { ReactNode } from 'react';

// Card component: wraps children in a styled white card with rounded corners and shadow
export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white shadow-md rounded-lg overflow-hidden">{children}</div>;
}

// CardContent component: provides padded content area inside a Card
// - Accepts optional additional class names via `className` prop
export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
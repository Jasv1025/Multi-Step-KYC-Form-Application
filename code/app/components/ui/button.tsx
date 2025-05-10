import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: ReactNode;
}&ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps){
  return(
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      {...props}>
      {children}
    </button>
  );
}
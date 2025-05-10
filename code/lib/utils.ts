// Import the necessary types and functions from the clsx and tailwind-merge libraries
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Define a utility function to merge class names
export function cn(...inputs: ClassValue[]){return twMerge(clsx(inputs))}
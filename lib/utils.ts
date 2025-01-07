import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatJson = (json: string): string => {
  try {
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch {
    return json;
  }
};

export const validateMapFunction = (fnString: string): boolean => {
  try {
    new Function('return ' + fnString)();
    return true;
  } catch {
    return false;
  }
};

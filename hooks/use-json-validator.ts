import { useState, useCallback } from 'react';

export const useJsonValidator = () => {
  const [error, setError] = useState<string>('');

  const validateJson = useCallback((jsonString: string): unknown[] | null => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!Array.isArray(parsed)) {
        throw new Error('Input must be an array');
      }
      setError('');
      return parsed;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
      return null;
    }
  }, []);

  return { validateJson, error };
};

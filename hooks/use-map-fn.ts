import { useState, useCallback } from 'react';

export const useMapFunction = () => {
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<unknown[] | null>(null);

  const executeMap = useCallback((data: unknown[], mapFnString: string) => {
    try {
      // Create function from string safely
      const mapFn = new Function('return ' + mapFnString)();

      // Execute the map function
      const transformed = data.map(mapFn);

      setResult(transformed);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  }, []);

  return { executeMap, result, error };
};

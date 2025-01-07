import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange, error }) => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputFile = inputFileRef.current;

    function handleFileChange(e: Event) {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = e => {
        onChange(e.target?.result as string);
      };
      reader.readAsText(file);
    }

    inputFile?.addEventListener('change', handleFileChange);

    return () => {
      inputFile?.removeEventListener('change', handleFileChange);
    };
  }, [inputFileRef, onChange]);

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="text-lg">Input JSON</CardTitle>
          <CardDescription>
            Paste your JSON array here to get started.
          </CardDescription>
        </div>
        <Button
          onClick={() => {
            inputFileRef.current?.click();
          }}
        >
          Import JSON
        </Button>
        <input type="file" hidden ref={inputFileRef} />
      </CardHeader>
      <CardContent>
        <Textarea
          className="w-full h-48 p-2 font-mono text-sm border rounded resize-none"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Paste your JSON array here..."
        />
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </CardContent>
    </Card>
  );
};

export default JsonInput;

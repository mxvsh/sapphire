import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange, error }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Input JSON</CardTitle>
        <CardDescription>
          Paste your JSON array here to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          className="w-full h-52 p-2 font-mono text-sm border rounded resize-none"
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

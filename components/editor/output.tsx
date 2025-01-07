import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface OutputViewerProps {
  data: Record<string, unknown> | unknown[] | null;
  error?: string;
}

const OutputViewer: React.FC<OutputViewerProps> = ({ data, error }) => {
  const formattedData = data ? JSON.stringify(data, null, 2) : '';

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Output</CardTitle>
          <CardDescription>
            The transformed data will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-red-500 p-2 border border-red-200 rounded">
              {error}
            </div>
          ) : (
            <pre className="w-full overflow-auto font-mono text-sm">
              {formattedData}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OutputViewer;

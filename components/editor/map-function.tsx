'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface MapFunctionEditorProps {
  value: string;
  onChange: (value: string) => void;
  onExecute: () => void;
  error?: string;
}

const MapFunctionEditor: React.FC<MapFunctionEditorProps> = ({
  value,
  onChange,
  onExecute,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Function</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Textarea
          className="w-full h-32 p-2 font-mono text-sm border rounded resize-none"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="item => item"
        />

        <Button onClick={onExecute}>Transform</Button>
      </CardContent>
    </Card>
  );
};

export default MapFunctionEditor;

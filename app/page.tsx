'use client';

import JsonInput from '@/components/editor/json-input';
import MapFunctionEditor from '@/components/editor/map-function';
import OutputViewer from '@/components/editor/output';
import Header from '@/components/header';
import { useJsonValidator } from '@/hooks/use-json-validator';
import { useLocalStorage } from '@/hooks/use-localstorage';
import { useMapFunction } from '@/hooks/use-map-fn';
import React from 'react';

const HomePage = () => {
  const [inputJson, setInputJson] = useLocalStorage('inputJson', '[]');
  const [mapFunction, setMapFunction] = useLocalStorage(
    'mapFunction',
    'item => item',
  );

  const { validateJson, error: jsonError } = useJsonValidator();
  const { executeMap, result, error: mapError } = useMapFunction();

  const handleTransform = () => {
    const validData = validateJson(inputJson);
    if (validData) {
      executeMap(validData, mapFunction);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted dark:bg-black">
      <Header />
      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <JsonInput
              value={inputJson}
              onChange={setInputJson}
              error={jsonError}
            />
            <MapFunctionEditor
              value={mapFunction}
              onChange={setMapFunction}
              onExecute={handleTransform}
              error={mapError}
            />
          </div>
          <OutputViewer data={result} error={mapError} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const greeting = 'hello world'"
        onChange={(value) => setInput(value)}
      />
      <div>
        <button
          className='button button-format is-primary is-small'
          onClick={onClick}
        >
          Submit
        </button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;

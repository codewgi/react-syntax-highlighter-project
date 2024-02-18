import logo from './logo.svg';
import './App.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';

function App() {
  const [copy, setCopy] = useState(false);

  const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
  import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  };`;

  return (
    <div className="w-full min-h-screen bg-[#101010] grid place-content-center">
      <div className='w-[50vh] bg-[#282C34] rounded-xl overflow-hidden'>
        <div className='flex justify-between pb-3 pt-6 px-6'>
          <div className='flex space-x-2'>
            <div className='w-4 h-4 rounded-full bg-red-500'></div>
            <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
            <div className='w-4 h-4 rounded-full bg-green-500'></div>
          </div>
          {
            copy?
            <button className='text-white'>
              Copied
            </button>
            :
            <button className='text-white' onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 1500);
            }}>
              Copy
            </button>
          }
        </div>
        <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ padding : "27px" }} wrapLongLines={true}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;

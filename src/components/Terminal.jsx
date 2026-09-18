import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'HHM OS v1.0.0 initialized.' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen, history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      switch(cmd) {
        case 'help': output = 'Commands: whoami, skills, clear, sudo hire hadeed, rm -rf /'; break;
        case 'whoami': output = 'Hadeed Hussain Memon - MERN Stack Dev & CTO of Technose Digital'; break;
        case 'skills': output = 'React, Node.js, MongoDB, Express, Next.js, Tailwind, Python, Data Science'; break;
        case 'rm -rf /': output = 'Permission denied. Nice try though.'; break;
        case 'clear': setHistory([]); setInput(''); return;
        case 'sudo hire hadeed': output = 'Excellent choice. Sending request to programmerhadeed@gmail.com...'; break;
        case '': output = ''; break;
        default: output = `Command not found: ${cmd}`;
      }

      setHistory(prev => [...prev, { type: 'input', text: `guest@hhm:~$ ${input}` }]);
      if (output) setHistory(prev => [...prev, { type: 'output', text: output }]);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          className="fixed top-0 left-0 w-full h-[60vh] bg-zinc-950/95 backdrop-blur-xl border-b border-emerald-900 z-[10001] text-emerald-400 font-mono p-6 sm:p-10 shadow-2xl overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-emerald-900/50">
            <span className="text-xs tracking-widest text-emerald-600 font-bold uppercase">Root Access Terminal</span>
            <button onClick={() => setIsOpen(false)} className="text-emerald-600 hover:text-emerald-400 text-xs tracking-widest font-bold">CLOSE [ESC]</button>
          </div>
          
          <div className="space-y-3 text-sm">
            {history.map((line, i) => (
              <div key={i} className={line.type === 'input' ? 'text-zinc-300' : 'text-emerald-400 pl-4 border-l border-emerald-800/50 leading-relaxed'}>
                {line.text}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <span className="text-zinc-300">guest@hhm:~$</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent outline-none border-none text-zinc-100"
                autoFocus
                spellCheck="false"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

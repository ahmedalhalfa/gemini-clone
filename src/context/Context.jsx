import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);

  const delayParam = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, index * 35);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt || input);
    if (!prompt) setPrevPrompts([...prevPrompts, input]);
    const result = await runChat(prompt || input, conversationHistory);
    let resultArray = result.split('**');
    let resultBold = '';
    for (let i = 0; i < resultArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        resultBold += resultArray[i];
      } else {
        resultBold += '<b>' + resultArray[i] + '</b>';
      }
    }
    let resultLinesSplit = resultBold.split('*').join('<br>');
    let resultDelayed = resultLinesSplit.split(' ');
    for (let i = 0; i < resultDelayed.length; i++) {
      delayParam(i, resultDelayed[i] + ' ');
    }
    setLoading(false);
    setInput('');
    setConversationHistory((prev) => [...prev, { prompt: prompt || input, response: resultBold, role: 'user' }]);
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    conversationHistory,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider };

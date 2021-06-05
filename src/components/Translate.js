import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
  {
    label: 'Africans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown 
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label="Select a language"
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

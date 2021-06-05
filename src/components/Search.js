import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
  const [term , setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedTerm(term);
    }, 500);

    return(()=>{
      clearTimeout(timerId);
    });
  }, [term]);

  useEffect(()=>{
    const search = async () => {
      const { data } = await axios.get('https://www.mediawiki.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm 
        }
      });
      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="right floated content">
            <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" className="ui button">Go</a>
          </div>
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input vslue={term} onChange = { e => setTerm(e.target.value) } className="input" />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;

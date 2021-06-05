import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend js framework'
  },
  {
    title: 'Why used react?',
    content: 'React is a favourate js library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'React is used by creating components'
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'The color Blue',
    value: 'blue',
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/' >
        <Accordion items={items} />
      </Route>
      <Route path='/search' >
        <Search />
      </Route>
      <Route path='/dropdown' >
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate' >
        <Translate />
      </Route>
    </div>
  );
}

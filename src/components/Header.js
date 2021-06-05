import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href='/' className="item">
        Accordion
      </Link>
      <Link href='/search' className="item">
        Search
      </Link>
      <Link href='/dropdown' className="item">
        dropdown
      </Link>
      <Link href='/translate' className="item">
        Tramslate
      </Link>
    </div>
  );
};

export default Header;

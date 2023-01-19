import React from 'react';

import Link from './Link';
import classes from './LinksList.module.css';

const LinksList = (props) => {
  return (
    <ul className={classes['links-list']}>
      {props.links.map((link) => (
        <Link
          key={link.id}
          original_link={link.original_link}
          short_link={link.short_link}
        />
      ))}
    </ul>
  );
};

export default LinksList;

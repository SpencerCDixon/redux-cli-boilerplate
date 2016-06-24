import React, { PropTypes } from 'react';

function <%= pascalEntityName %>({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

<%= pascalEntityName %>.propTypes = {
  children: PropTypes.node,
}

export default <%= pascalEntityName %>;

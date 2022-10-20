import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import React from 'react';

import TableTree, { Header, Headers, Rows } from '@atlaskit/table-tree';
function App() {
   

    return (
        <TableTree>
    <Headers>
      <Header width={200}>Chapter title</Header>
      <Header width={100}>Numbering</Header>
      <Header width={100}>Page</Header>
    </Headers>
    <Rows items={undefined} render={() => null} />
  </TableTree>
    );
}

export default App;

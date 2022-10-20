import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import TableTree from '@atlaskit/table-tree';
import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';
import items from './data';

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

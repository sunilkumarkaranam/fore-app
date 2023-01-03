import React, { useEffect, useState } from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, DataStateChangeEventArgs, Selection, RowDD, Inject } from "@syncfusion/ej2-react-treegrid";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { summaryDat } from "./data/fetchData";
//import { summaryDat } from './data';
import './App.css';

function App() {
  return (
    <div>
    
          <TreeGridComponent
         dataSource={summaryDat}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="key"
                headerText="Issue Key"
              ></ColumnDirective>
              <ColumnDirective
                field="summary"
                headerText="Summary"
              ></ColumnDirective>
              <ColumnDirective
                field="issueType"
                headerText="Issue Type"
              ></ColumnDirective>
              <ColumnDirective
                field="assignee"
                headerText="Assignee"
              ></ColumnDirective>
              <ColumnDirective
                field="storyPoint"
                headerText="Story Point"
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[RowDD, Selection]} />
          </TreeGridComponent>
        </div>
  );
}

export default App;

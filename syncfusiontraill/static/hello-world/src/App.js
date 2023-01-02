import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, DataStateChangeEventArgs, Selection, RowDD, Inject } from "@syncfusion/ej2-react-treegrid";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { issueData, findChildByJql } from "./data/fetchData";
import './App.css';
function App() {
    const [dataSource, setDataSource] = useState(null);
  let projects = "TEST";
  let issueLinkType = {
    id: "10008",
    name: "Track/Contributes",
    inward: "Contributes To",
    outward: "Tracks"
  }
  let treegridIssue;

  const handleClickSearch = async () => {
    if(treegridIssue) {
      treegridIssue.showSpinner(); // show the spinner
      let value = await issueData(projects, issueLinkType, "");
      treegridIssue.hideSpinner(); // hide the spinner  
      setDataSource(value);
    }
  };

    return (
        <div>
             <TreeGridComponent>
             ref={g => treegridIssue = g}
            dataSource={dataSource}
             </TreeGridComponent>
        </div>
    );
}

export default App;

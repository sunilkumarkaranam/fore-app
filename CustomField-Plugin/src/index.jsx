import ForgeUI, { render, Fragment, Text, TextField, IssuePanel, useProductContext, useState, ButtonSet, Button, ModalDialog, Table, Row, cell, Head, Form } from '@forge/ui';
import api, { route } from '@forge/api';



const fetchData = async () => {
  const response = await api.asUser().requestJira(route`/rest/api/3/issue/PLUG-1`);
  const data = await response.json();
  return data.fields.customfield_10033;
}


const onSubmit = async (formData) => {
  console.log("Data from the Form:" + formData);
  console.log("Data from the Form:" + JSON.stringify(formData));
  
  let newbody2 =
  `{
   
      "fields": {
  
          "customfield_10033": ${parseInt(formData.newstory)}
          
      }
  }`;



console.log("Body created by the issueid is= " + JSON.stringify(newbody2));
    const response2 = await api.asApp().requestJira(route`/rest/api/3/issue/PLUG-1`, {
      method: `PUT`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },


      body: newbody2

    });

//const data2 = await response2.json();

//console.log(data2);
// console.log(await response2.text());


};

const App = () => {
  console.log(JSON.stringify(useProductContext()));
  const [datas] = useState(async () => await fetchData());
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <Text>Story Points: {datas}</Text>

      <Button text="Change Story point" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog header="Add New Story Point" onClose={() => setOpen(false)}>
          <Form onSubmit={onSubmit} submitButtonText="Add">
            <TextField label="Story Point" name="newstory" />
          </Form>
        </ModalDialog>
      )}

    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);

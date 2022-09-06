import ForgeUI, { render, Fragment, Text, IssuePanel, useProductContext } from '@forge/ui';
import api, { route } from `@forge/api`;


const fetchData = async () => {
  const response = await api.asUser().requestJira(route`/rest/api/3/issue/PLUG-1`);
  const data = await response.json();
  return data.fields.customfield_10033;
}


const onSubmit = async (formData) => {
  console.log("Data from the Form:" + formData);
  console.log("Data from the Form:" + JSON.stringify(formData));

};


const App = () => {
  console.log(JSON.stringify(useProductContext()));
  const [datas] = useState(async () => await fetchData());

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

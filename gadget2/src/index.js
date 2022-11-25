import ForgeUI, { DashboardGadgetEdit } from "@forge/ui";

import ForgeUI, {
    render,
    DashboardGadgetEdit,
    TextField,
  } from "@forge/ui";
  
  const Edit = () => {
    const onSubmit = (values) => {
        return values;
    }
  
    return (
      <DashboardGadgetEdit onSubmit={onSubmit}>
        <TextField name="name" label="Say hello to:" />
      </DashboardGadgetEdit>
    );
  };
  
  export const runEdit = render(<Edit />);


import ForgeUI, {
  render,
  DashboardGadget,
  Text,
  useProductContext,
} from "@forge/ui";

const App = () => {
  const {
    extensionContext: { gadgetConfiguration },
  } = useProductContext();

  return (
    <DashboardGadget>
      <Text
        content={`Hello ${gadgetConfiguration.name || "world"}`}
      />
    </DashboardGadget>
  );
};

export const run = render(<App />);
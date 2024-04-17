import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item created")}
      />
    </AppContainer>
  );
};

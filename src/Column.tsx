import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New Item added")}
      />
    </ColumnContainer>
  );
};

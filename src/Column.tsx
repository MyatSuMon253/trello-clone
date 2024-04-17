import { useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask, moveList } from "./state/actions";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref))

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};

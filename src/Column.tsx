import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate App Scaffold" />
      <Card text="Learn Typescript" />
      <Card text="Begin to Use Static Typing" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New Item added")}
      />
    </ColumnContainer>
  );
};

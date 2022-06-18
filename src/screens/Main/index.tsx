import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import Card from "./components/Card";

export default function Main() {
  const [count, setCount] = useState(0);

  const cards = Array.from({ length: count }, (_, index) => index);

  function handleCard(type: string) {
    if (type === "add") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  }

  return (
    <S.Container>
      <S.ButtonsContent></S.ButtonsContent>
      <S.RowContent>
        <S.Text>
          View Count <S.Count>({count})</S.Count>
        </S.Text>
        <S.AddButtonsContent>
          <S.Button onPress={() => handleCard("remove")}>
            <AntDesign name="minus" size={25} />
          </S.Button>
          <S.Button onPress={() => handleCard("add")}>
            <AntDesign name="plus" size={25} />
          </S.Button>
        </S.AddButtonsContent>
      </S.RowContent>
      <S.CardContent>
        {cards.map((card) => (
          <Card key={card} index={card} />
        ))}
      </S.CardContent>
    </S.Container>
  );
}

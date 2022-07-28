import React from "react";
import { useSelector } from "react-redux";
import TextContainer from "./TextContainer";

export const Container = () => {
  const textList = useSelector((state) => state.textList);
  const textreverse = (t) => {
    let tr = [...t].reverse().join("");
    return tr;
  };
  return (
    <div
      class="border bg-body overflow-auto w-75"
      style={{ height: "30rem" }}
    >
      <h1 class="text-capitalize fw-light m-3"> results:</h1>
      <div class="d-flex flex-column-reverse bd-highlight">
        {textList &&
          textList.map((t) => (
            <TextContainer
              text={textreverse(t.text)}
              palindrome={t.palindrome}
            />
          ))}
      </div>
    </div>
  );
};

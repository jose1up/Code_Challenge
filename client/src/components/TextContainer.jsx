import React from "react";

const TextContainer = ({ text, palindrome }) => {
  return (
    <div class="d-flex justify-content-center p-2">
      <button
        type="button"
        class="btn btn-outline-dark text-center"
        style={{ width: "80%" }}
      >
        {text}
        {palindrome ? (
          <span class="badge bg-info text-dark align-bottom">palindrome</span>
        ) : null}
      </button>
    </div>
  );
};

export default TextContainer;

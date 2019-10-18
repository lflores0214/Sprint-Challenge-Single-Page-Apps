import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 20%;
  background-color: #8bc13e;
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Button(props) {
  return (
    <Div>
      <ButtonStyled
        onClick={() => {
          props.setPage(props.page - 1);
        }}
      >
        Previous
      </ButtonStyled>
      <ButtonStyled
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next
      </ButtonStyled>
    </Div>
  );
}

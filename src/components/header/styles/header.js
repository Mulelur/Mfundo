import styled from "styled-components";
import bg from "../../../assets/Mfundo_1.jpeg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  height: 35rem;
  color: #ffff;
  background-position: contain;
  background-size: auto;
`;

export const Title = styled.div``;

export const Text = styled.h2`
  font-size: 3.6rem;
  text-transform: uppercase;
`;

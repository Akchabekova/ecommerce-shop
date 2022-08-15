import {css} from "styled-components"


export const ButtonTemplate = () => css`
  padding: 10px 25px;
  margin-bottom: 18px;
  background-color: darkcyan;
  cursor: pointer;
  border-radius: 4px;
  color: #f2f844;
  border: 1px solid darkcyan;
  font-size: 20px;
  transition: 0.4s;
  :hover {
    background:none;
    color: darkcyan;
    transition: 0.4s;
  }
`;
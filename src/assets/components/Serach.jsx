import { styled } from 'styled-components';
function Serach({ handleKeyPress, webSearchText, onChangeWebSearchText }) {
  return (
    <InputTag
      value={webSearchText}
      onChange={onChangeWebSearchText}
      type="text"
      placeholder="...Search"
      onKeyPress={handleKeyPress}
    />
  );
}

export default Serach;

const InputTag = styled.input`
  width: 500px;
  border: 2px solid white;
  color: white;
  height: 50px;
  border-radius: 18px;
  padding: 10px;
  background: none;
`;

import { render } from '@testing-library/react';
import React from 'react';
import TokenInput from './TokenInput';
import { defaultTokens } from './tokens';

const Component = () => {
  const [value, setValue] = React.useState('');
  const [token, setToken] = React.useState('');

  return (
    <TokenInput
      width="fit-content"
      border="2 px solid black"
      borderWidth="2px"
      p={2}
    >
      <TokenInput.Input width="20rem" value={value} setValue={setValue} />
      <TokenInput.Select
        borderLeft="2px solid black"
        fontSize="1.2rem"
        fontWeight="bold"
        w="20rem"
        outline="none"
        rounded="none"
        _focus={{
          borderLeft: '2px solid black'
        }}
        token={token}
        setToken={setToken}
        tokensList={defaultTokens}
      />
    </TokenInput>
  );
};

describe('TokenInput', () => {
  it('renders correctly', () => {
    const { container } = render(<Component />);
    expect(container).toBeInTheDocument();
  });
});

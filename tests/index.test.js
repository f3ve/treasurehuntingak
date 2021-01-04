/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import App from '../pages/index';

describe('Index.js', () => {
  it('renders correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});

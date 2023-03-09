import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColum } from '.';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColum {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

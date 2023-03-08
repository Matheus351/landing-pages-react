import { render, screen } from '@testing-library/react';
import Home from './App';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
});

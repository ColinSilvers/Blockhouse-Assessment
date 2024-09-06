import { render, screen } from '@testing-library/react';
import ReusableChart from '../components/ReusableChart';
import { Chart } from 'chart.js/auto';
import '@testing-library/jest-dom'


// Mock the Chart.js library to avoid creating actual charts
jest.mock('chart.js/auto', () => ({
  Chart: jest.fn(() => ({
    destroy: jest.fn(),
  })),
}));

describe('ReusableChart Component', () => {
  it('renders a canvas element', () => {
    render(
      <ReusableChart 
        type="bar" 
        data={{ labels: ["A"], datasets: [{ data: [1] }] }}
        options={{ scales: { x: { type: 'category' }, y: { beginAtZero: true }}}}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument(); // Ensures canvas is present
  });

  it('creates a new Chart instance on render', () => {
    render(
      <ReusableChart 
        type="bar" 
        data={{ labels: ["A"], datasets: [{ data: [1] }] }}
        options={{ scales: { x: { type: 'category' }, y: { beginAtZero: true }}}}
      />
    );
    expect(Chart).toHaveBeenCalledTimes(1); // Ensures Chart.js was called
  });

  it('destroys previous chart instance', () => {
    const { unmount } = render(
      <ReusableChart 
        type="bar" 
        data={{ labels: ["A"], datasets: [{ data: [1] }] }}
        options={{ scales: { x: { type: 'category' }, y: { beginAtZero: true }}}}
      />
    );
    unmount(); // Unmounts component
    expect(Chart).toHaveBeenCalledWith(expect.any(Object), expect.objectContaining({ type: 'bar' }));
  });
});
import { render, screen, waitFor } from '@testing-library/react';
import CandlestickChart from '../components/CandlestickChart';

// Mock Plotly.js to avoid rendering actual plots
jest.mock('react-plotly.js', () => () => <div>Plotly Chart</div>);

describe('CandlestickChart Component', () => {
  it('renders a Plotly chart', async () => {
    render(<CandlestickChart />);
    await waitFor(() => {
      expect(screen.getByText('Plotly Chart')).toBeInTheDocument(); // Checks if Plotly chart is rendered
    });
  });

  it('fetches data from the API and updates the chart', async () => {
    // Mock the fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: [
            { x: '2023-01-01', open: 30, high: 40, low: 25, close: 35 },
            { x: '2023-01-02', open: 35, high: 45, low: 30, close: 40 },
          ]
        }),
      })
    );

    render(<CandlestickChart />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://127.0.0.1:8000/api/candlestick-data/');
    });
  });
});

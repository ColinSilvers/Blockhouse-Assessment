from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

class ChartDataTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_candlestick_data(self):
        response = self.client.get('/api/candlestick-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('x', response.json())  # Check if 'data' is in the response

    def test_line_chart_data(self):
        response = self.client.get('/api/line-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())  # Check if 'labels' is in the response
        self.assertIn('data', response.json())  # Check if 'data' is in the response

    def test_bar_chart_data(self):
        response = self.client.get('/api/bar-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())  # Check if 'labels' is in the response
        self.assertIn('data', response.json())  # Check if 'data' is in the response

    def test_pie_chart_data(self):
        response = self.client.get('/api/pie-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())  # Check if 'labels' is in the response
        self.assertIn('data', response.json())  # Check if 'data' is in the response
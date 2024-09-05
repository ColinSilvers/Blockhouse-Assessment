# api/views.py
from django.http import JsonResponse

def candlestick_data(request):
    data = {
        "x": ["2023-01-01", "2023-01-02"],
        "open": [30, 35],
        "high": [40, 45],
        "low": [25, 30],
        "close": [35, 40],
    }
  
    return JsonResponse(data)

def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return JsonResponse(data)

def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return JsonResponse(data)

def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return JsonResponse(data)

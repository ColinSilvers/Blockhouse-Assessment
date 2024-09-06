# Use the official Python image from the Docker Hub
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY backend/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files
COPY backend/ /app/

# Expose the port Django runs on
EXPOSE 8000

# Command to run the Django application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]
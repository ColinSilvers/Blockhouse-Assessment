# Project Setup and Running Instructions

This project consists of a Django backend and a Next.js frontend. Follow the instructions below to get your development environment up and running.

## Prerequisites

- Ensure you have [Python](https://www.python.org/downloads/) installed for Django.
- Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed for Next.js.

## Project Structure

- **`backend/`**: Contains the Django project.
- **`app/`**: Contains the Next.js project.

## Setting Up and Running the Project

### 1. Clone the Repository

If you haven’t already, clone the repository:

```bash
git clone https://github.com/ColinSilvers/Blockhouse-Assessment
cd Blockhouse-Assessment/blockhouse-assessment
```

### 2. Navigate to the backend directory and set up the Django environment:
```bash
cd backend
```

### 3. Create a virtual environment (optional but recommended)
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 4. Install the dependencies
```bash
pip install -r requirements.txt
```

### 5. Apply database migrations
```bash
python manage.py migrate
```

### 6. Start the Django development server
```bash
python manage.py runserver
```

### 7. Navigate to the blockhouse-assessment directory and set up the Next.js environment:
```bash
cd ../blockhouse-assessment
```
### 8. Install the dependencies
```bash
npm install
```
### 9. Start the Next.js development server
```bash
npm run dev
```

The Next.js server should now be running at http://localhost:3000.

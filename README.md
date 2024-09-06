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
cd Blockhouse-Assessment
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

### 7. In a new terminal, navigate to the blockhouse-assessment directory and set up the Next.js environment:
```bash
cd Blockhouse-Assessment
```
### 8. Install the dependencies
```bash
npm install
```
### 9. Start the Next.js development server
```bash
npm run dev
```

The Next.js server should now be running at http://localhost:3000

# Libraries and Tools Used

## Charting Libraries

Chart.js,
React-Plotly.js

## Testing Libraries

Jest

## Other Tools

TailwindCSS,
Docker,
TypeScript

# Approach/Thoughts

Initially, I had planned to use Chart.js for all four charts. This fell through when I realized that Chart.js didn't have native, working support for candlestick charts. After this realization, I decided to use a library soley for candlestick charts that I had used before in a previous project built around stock market tracking, react-plotly.js. 

Using Redux in a project of this scope would be overkill in my opinion. If I were to scale this project up significantly, I would consider using that or even the React Context API for state management purposes. 

Looking back, and given more time, I would have put the charts on separate routes using React Router to clean up the interface and possibly create a dedicated Home page with a Navigation Bar in a Single Page Application. Currently, the project satisfies the given requirements, but this is one improvement I immediatley thought of at the end. 

Thank you for giving me the opportunity to complete this assessment. I look forward to your review and feedback.



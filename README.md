# Wushu Judging App

The **Wushu Judging App** is a modern scoring platform designed for the judges of Wushu Tao-lu competitions. This app simplifies the scoring process by providing an intuitive interface for scoring athletes, calculating results, and displaying them in real-time. Built with a React frontend and an Express backend, it ensures seamless performance and a user-friendly experience.

## Features

- **Athlete Scoring:** Judges can input scores for each athlete's performance based on established Wushu Tao-lu criteria.
- **Automatic Calculations:** The app calculates final scores automatically, incorporating deductions and bonuses where applicable.
- **Real-Time Results:** Scores and rankings are displayed in real-time, ensuring transparency and efficiency.
- **User-Friendly Interface:** A clean and intuitive React frontend makes it easy for judges to use.
- **Secure Backend:** An Express backend ensures secure handling of scoring data.

## Technology Stack

- **Frontend:** React (TypeScript)
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB
- **Styling:** Tailwind CSS

## Installation

Follow these steps to set up the app locally:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB

### Clone the Repository
```bash
$ git clone https://github.com/CosminAlexandru90/Judging-App.git
$ cd Judging-app
```

### Backend Setup
1. Navigate to the `server` directory:
```bash
$ cd server
```

2. Install dependencies:
```bash
$ npm install
```

3. Start the server:
```bash
$ npm run dev
```

### Frontend Setup
1. Navigate to the `client` directory:
```bash
$ cd ../client
```

2. Install dependencies:
```bash
$ npm install
```

3. Start the development server:
```bash
$ npm start
```

### Access the App
- Open your browser and go to [http://localhost:5173](http://localhost:5173).

## Usage

1. **Login/Authenticate:** Judges log in using their credentials.
2. **Select Event:** Choose the Tao-lu event to judge.
3. **Input Scores:** Enter scores for each athlete.
4. **View Results:** See real-time rankings and scores.

## Project Structure

### Server
- `routes/`: API endpoints for scoring, results, and authentication.
- `models/`: Database schemas for athletes, scores, and users.
- `controllers/`: Business logic for handling requests.

### Client
- `src/components/`: React components for UI.
- `src/pages/`: Main application pages.
- `src/services/`: API calls to the backend.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   $ git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   $ git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   $ git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Acknowledgments

- Wushu community for inspiring the development of this app.
- Open-source tools and libraries that made this project possible.

For any questions or support, feel free to contact me at **cosminalexandru90@yahoo.com**.

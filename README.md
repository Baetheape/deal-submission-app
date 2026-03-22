# Deal Submission App

## Overview
This project is a web application that allows users to submit, track, and manage deals efficiently. It aims to streamline the submission process and provide insights into deal performance.

## Features
- User authentication and authorization
- Real-time tracking of submitted deals
- Notifications for deal status updates
- Analytics dashboard for deal performance

## Tech Stack
- **Frontend:** React, Redux
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Deployment:** Heroku

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Baetheape/deal-submission-app.git
   cd deal-submission-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the required environment variables.

## Environment Variables
- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for JWT authentication.
- `PORT`: The port on which the server will run (default: 5000).

## API Documentation
### Endpoints
- `POST /api/deals`: Submit a new deal.
- `GET /api/deals`: Retrieve a list of all deals.
- `GET /api/deals/:id`: Retrieve a specific deal by ID.

## Deployment
To deploy the application:
1. Ensure your code is pushed to GitHub.
2. Connect your GitHub repository to Heroku.
3. Enable automatic deploys on Heroku from the main branch.
4. Set the environment variables in Heroku settings.
5. Deploy the application.

For detailed information, refer to the [Heroku Deployment Documentation](https://devcenter.heroku.com/articles/deploying-a-nodejs-application).

## Contributing
Feel free to open issues or submit pull requests if you want to contribute to this project!

## License
This project is licensed under the MIT License.
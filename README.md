# REACT-TEST-APOD

## Setup Guide for React-Test-APOD

Follow these steps to set up and run the application locally:

## Prerequisites

- **Node.js** (version 14 or higher)
- **Yarn** (package manager)

## 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/react-test-apod.git
```

## 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd react-test-apod
```

## 3. Install Dependencies

Install the required dependencies using Yarn:

```bash
yarn install
```

## 4. Set Up Environment Variables

Create a `.env` file in the root of the project and add your NASA API key(you
can get your API key from [NASA API Documentation](https://api.nasa.gov/).):

```plaintext
VITE_API_KEY=your_nasa_api_key
VITE_BASE_URL=https://api.nasa.gov/planetary/
```

## 5. Run the Development Server

Start the development server with the following command:

```bash
yarn dev
```

The application should now be running at `http://localhost:5173`.

## 6. Build for Production

To build the application for production, run:

```bash
yarn build
```

This will create a `dist` folder containing the production-ready files.

## 7. Serve the Production Build

You can serve the production build using a static server. If you have `serve`
installed globally, you can run:

```bash
yarn global add serve
serve -s dist
```

Now, your application will be available at `http://localhost:5000`.

## Note on Corepack

If you are using Yarn 2 or later, you may need to install and enable
[Corepack](https://github.com/nodejs/corepack) to manage package managers.After
following their steps to install Corepack you can just enable it with the
following command:

```bash
corepack enable
```

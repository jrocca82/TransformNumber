## Purpose

The purpose of this application is to create a user-friendly front end for the server. The user can input a number in the input field and on submission, the number is sent to the server and transformed into a string output.

## Approach

The developer (Jo Rocca) chose to use Next.js for this app, as it provides easy access to API endpoints, built in protection of environment variables, and type safety.

The style library used in this app is Chakra UI, which allows for quick, clean styling of this simplistic app.

Most functionality comes from the useTransform hook, which allows for clean code with separation of concerns (i.e. state management, API logic, and UI are located in different places).

The application also includes loading states and error handling for a seamless user experience.

## Running the Application

Install dependencies by running `yarn`

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the web page. This web page is mobile responsive.

## Connecting to Server

This repo also contains an ASP.NET server that is used in the pages/api directory.
To connect to this server, set the following env variable:

```
SERVER_ENDPOINT="http://localhost:5000"
```

## Testing
Without input, the page will display an error message

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

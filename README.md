# Gemini Clone

## Overview

Gemini Clone is a React-based web application that leverages Google's Gemini Generative AI to provide users with an interactive and intelligent conversational experience. Whether you're looking to brainstorm business ideas, seek travel suggestions, or improve website designs, Gemini Clone is here to assist.

## Features

- **Interactive Chat Interface**: Engage with the Gemini AI by entering prompts and receiving real-time responses.
- **Predefined Prompts**: Access a set of predefined prompts to get started quickly.
- **Chat History**: View and revisit your recent prompts and conversations.
- **Responsive Design**: Enjoy a seamless experience across various devices and screen sizes.
- **Loading Indicators**: Visual feedback while the AI generates responses.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Vite**: Fast development build tool.
- **Google Generative AI SDK**: Integration with Google's Gemini AI for generating responses.
- **ESLint**: Code linting to maintain code quality.
- **CSS**: Styling and responsive design.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   cd gemini-clone
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Gemini API key:

   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. **Enter a Prompt**

   In the input box at the bottom of the main interface, type your query or request. Examples include:

   - "Suggest beautiful places to see on an upcoming road trip."
   - "Brainstorm a list of 10 possible business names for a new company."

2. **Send the Prompt**

   Click the send icon to submit your prompt. The AI will process your request and display the response.

3. **View Responses**

   The AI-generated response will appear below your prompt. You can scroll through previous prompts in the sidebar.

4. **Manage Chat History**

   Use the sidebar to view recent prompts and revisit previous conversations.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run preview`**: Serves the build locally for preview.

## Configuration

- **`package.json`**: Contains project metadata, scripts, and dependencies.
- **`vite.config.js`**: Configuration file for Vite.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`eslint.config.js`**: Configuration for ESLint to enforce code quality and consistency.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

   Describe your changes and submit the pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Google Generative AI](https://ai.google.dev/gemini-api/docs)
- [ESLint](https://eslint.org/)
# Project Title
Marvel-Studio

## Description
Website about Marvel and its characters.

## Requirements
This project requires Node.js and npm to be installed. The project depends on several npm packages which are listed in the `package.json` file.

## Installation
1. Clone the repository: git clone https://github.com/yourusername/yourrepository.git
2. Navigate to the project directory:  cd yourrepository
3. Install the necessary dependencies: npm install

## API Setup
This project uses the X API, which requires a unique API key, a timestamp, and a hash for authentication.

### Getting your API Key
1. Sign up for an account on the API provider's website.
2. Once registered, navigate to your account settings and generate a new API key.

### Generating the Timestamp and Hash
The timestamp can be generated using the current time, and the hash is a hashed combination of the timestamp, your private key, and your public key. Our project includes a helper function that generates these for you automatically, so you don't need to worry about generating them yourself.

### Configuring the API Key, Timestamp, and Hash
1. Create a new file called `.env` in the project root.
2. Add the following lines to the file, replacing `your_api_key`, `your_timestamp`, and `your_hash` with your actual API key, timestamp, and hash:
    API_KEY=your_api_key
    TIMESTAMP=your_timestamp
    HASH=your_hash

## Usage
Run in console: npm run dev


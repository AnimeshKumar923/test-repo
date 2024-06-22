# Step 1: Set Up Development Environment
## 1. Install Node.js and npm

Download and install Node.js from nodejs.org.
Open your terminal and run the following commands to verify the installation:

```bash
 node -v && npm -v
```

## 2. Install Vite

Open a terminal and install Vite globally by running:

```bash
 npm install -g create-vite
```

## 3. Create a New Vite Project

Create a new Vite project named "photo-gallery" by running:

```bash
npm create vite@latest photo-gallery --template react
```

## 4. Navigate to Project Directory

Change into the project directory by running:

```bash
 cd photo-gallery
```

# Step 2: Install Dependencies
## 1. Install Tailwind CSS

Install Tailwind CSS and its dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## 2.Tailwind CSS Installation

    Configure Tailwind CSS:
        Modify tailwind.config.js to specify the paths to your template files.
        Add the required Tailwind directives to your index.css file.

## Step 3: Set Up Project Structure
1. Create Required Components

    Create a components directory and add Gallery.js, ImageUpload.js, and ImageCard.js.

2. Develop Core Components

    Develop the main components (Gallery, ImageUpload, ImageCard) to handle image display, upload, and deletion.

## Step 4: Integrate AWS Amplify for Persistent Storage
### 1. Install AWS Amplify

    Install Amplify CLI globally by running:

    bash

npm install -g @aws-amplify/cli

 Initialize Amplify in your project:

csharp

    amplify init

### 2. Configure Amplify Services

    Add authentication and storage (S3) to your project:

    csharp

amplify add auth
amplify add storage

Push changes to the cloud:

perl

    amplify push

### 3. Update Your Project for AWS Integration

    Install Amplify libraries:

    bash

    npm install aws-amplify @aws-amplify/ui-react

    Configure Amplify in your project by modifying the entry point to include AWS configurations.

## Step 5: Implement Image Upload and Retrieval

    Update your ImageUpload component to upload images to AWS S3.
    Update your Gallery component to retrieve and display images from AWS S3.
    Ensure the ImageCard component can handle image deletion from AWS S3.

## Step 6: Run the Project

    Start the development server:

    arduino

npm run dev

Open your browser and navigate to http://localhost:3000 to see your photo gallery application in action


# Video and Report link :point_down:

- [VIDEO LINK]()
- [PROJECT REPORT](https://drive.google.com/file/d/1qeLEC-addLXGnC0FQGogoBTEMxYeSzAE/view?usp=sharing)

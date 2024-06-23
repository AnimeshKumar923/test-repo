# Step 1: Set Up Project Directory

Create a project directory named photo-gallery.
Inside photo-gallery, create two subdirectories: backend and frontend.

# Step 2: Set Up the Backend

Navigate to the backend directory:

```bash
cd photo-gallery/backend
```

Initialize a new Node.js project:

```bash

npm init -y
```

Install necessary dependencies:

```bash
npm install express multer mongodb dotenv cors
```
Create the following files in the backend directory:
- server.js: The main backend server file.
- `.env`: To store environment variables, specifically the MongoDB URI.

Create a directory named uploads to store uploaded images.

Configure the server:

- Set up Express to handle file uploads, connect to MongoDB, serve static files, and handle CORS.

- Implement API endpoints for fetching photos, uploading photos, and deleting photos.

# Step 3: Set Up the Frontend

Navigate to the frontend directory:

```bash
cd ../frontend
```
Create the following files:
- index.html: The main HTML file for the UI.
- styles.css: The CSS file for styling the UI.
- app.js: The JavaScript file to handle frontend functionality.

# Step 4: Configure the Frontend

Design the HTML structure in index.html:
- Create a container for the photo gallery.
- Add an upload section with a file input and a button.
- Add a section to display the uploaded photos.

Style the UI in styles.css:
- Style the photo gallery container, upload section, photo items, and buttons.
- Ensure the layout is user-friendly and visually appealing.

Implement functionality in app.js:
- Fetch the existing photos from the backend and display them in the gallery.
- Implement the upload functionality to send the selected file to the backend.
- Implement the delete functionality to remove a photo from the backend and update the UI.

# Step 5: Running the Project

Start the Backend Server:
- Ensure MongoDB is running on your machine.
- Navigate to the backend directory and run the server:
```bash
cd ../backend
node server.js
```
Open index.html in a Browser:
- Navigate to the frontend directory and open index.html in your browser.

# Step 6: Testing

Upload Photos:
- Use the upload section in the UI to select and upload photos.
- Verify that photos appear in the gallery without needing a page refresh.

Delete Photos:
- Use the delete button on each photo to remove it.
- Verify that photos are removed from both the UI and the backend.

# Video and Report link :point_down:

- [VIDEO LINK]()
- [PROJECT REPORT](https://drive.google.com/file/d/1qeLEC-addLXGnC0FQGogoBTEMxYeSzAE/view?usp=sharing)
# Node.js Utility Functions POC

**A Node.js proof-of-concept project featuring a collection of utility functions and tools to streamline development tasks and demonstrate core functionalities.**

## Table of Contents

1. [About the Project](#about-the-project)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)
7. [Functinalities] (#functinalities)

---

### 1. About the Project

This project serves as a proof of concept for various utility functions and tools written in Node.js. It aims to streamline development tasks and demonstrate key functionalities that can be reused in other projects.

### 2. Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Pavadeppam/nodejs-poc-utilities.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd your-repo-name
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

### 3. Usage

- To run an individual utility function, use the following command:
  ```bash
  node path/to/your-script.js
  ```
- [Include specific examples for running different utility functions or scripts as you develop them.]

### 4. Project Structure

- `src/` – Contains all the source code, organized by functionality (e.g., `utils/`).
- `README.md` – Project documentation.

### 5. Contributing

This project is currently a personal endeavor, but contributions are welcome. Feel free to fork the repository and submit a pull request.

### 6. License

NULL

### 7. Functionality

### 7.1 Initiating git repo

### 7.1.1 Create a git repo in git hub

### 7.1.2 In local create a project directory nodejs-poc-utilities

### 7.1.3 Run below git commands

git init
git remote add origin https://github.com/Pavadeppam/nodejs-poc-utilities.git
git stash push -m "url-validation-work"
git pull origin main
git branch

### 7.2

### 7.1. **Automatic URL Status Check**: The utility function is used to automatically check the status of a specified URL.

- If the status is `200`, it confirms the URL is valid.
- If the status is anything other than `200` (e.g., `404`), it prints a message to the console indicating whether the URL is valid or invalid.

git checkout -b utility/check_list_of_url_valid_or_not
git branch
git staus
git stash list
git stash apply stash@{0}
git stash drop stash@{0}  
git stash clear

git add .
git commit -m "Add URL check utility to validate HTTP status codes"  
git push -u origin utility/check_list_of_url_valid_or_not # Push the changes

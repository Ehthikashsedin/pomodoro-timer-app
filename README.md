# Pomodoro Timer App

This is a Pomodoro Timer application built with HTML, CSS, and Vanilla JavaScript, fulfilling the requirements of **Day 5 Task 2**. It demonstrates the use of ES Modules, Classes, and Closures/Encapsulation.

## Running the Application Locally
Since the project relies on native ES Modules (`type="module"` in `index.html`), opening `index.html` directly in the browser by double-clicking it will lead to a CORS error.

You must run it through a local HTTP server.
- In VS Code, you can install the **Live Server** extension. Once installed, right-click `index.html` and click **"Open with Live Server"**.

## Git Setup and Submission Instructions

To upload your work to a new public GitHub repository for submission:

1. **Initialize Git local repository:**
   ```bash
   git init
   ```

2. **Add all your base files to staging:**
   ```bash
   git add .
   ```

3. **Commit the base structure:**
   ```bash
   git commit -m "Initial commit: Base Pomodoro timer structure"
   ```

4. Go to [GitHub](https://github.com/new) and **create a new public repository**. Do not check the "Initialize this repository with a README" box.

5. **Link your local project to the remote repository and push:**
   Copy the commands provided by GitHub under the section titled *“…or push an existing repository from the command line”*. They will look like this:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

6. As you complete the implementation according to the task requirements, commit and push regularly:
   ```bash
   git add .
   git commit -m "feat: added start and pause logic"
   git push
   ```

7. Finally, host the website (e.g. using Netlify, Vercel, or GitHub Pages) and submit the Live URL and the Repository URL to your reviewer!

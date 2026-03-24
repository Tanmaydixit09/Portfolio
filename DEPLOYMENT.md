# Deployment on Vercel

Vercel is the easiest way to deploy a Vite React application. Follow these instructions to get your portfolio live:

## Option 1: Using the Vercel Dashboard (Recommended)

1. **Push to GitHub**: Make sure all your code is committed and pushed to a GitHub repository.
   ```bash
   git init
   git add .
   git commit -m "Initial commit for portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-tanmay.git
   git push -u origin main
   ```

2. **Login to Vercel**: Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.

3. **Import Project**: 
   - Click the "Add New..." button and select "Project".
   - Import the `portfolio-tanmay` repository you just created.

4. **Configure Project**:
   - Vercel automatically detects Vite settings.
   - Leave the default build command (`npm run build`) and output directory (`dist`) as they are.

5. **Deploy**: Click the "Deploy" button. Wait for the build to finish. Your portfolio is now live!

## Option 2: Using the Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Run Vercel CLI in your project directory**:
   ```bash
   cd portfolio-tanmay
   vercel
   ```

3. **Follow Prompts**:
   - Set up and deploy `~\path\to\portfolio-tanmay`? **Y**
   - Which scope do you want to deploy to? **[Your Name]**
   - Link to existing project? **N**
   - What's your project's name? **portfolio-tanmay**
   - In which directory is your code located? **./**
   - Want to modify these settings (Build Command/Output Directory)? **N**

4. **Production Deployment**: After reviewing the preview URL, run `vercel --prod` to deploy it to production.

## Vercel Settings for Single Page Applications
Vite React apps handle routing on the client side. Since your portfolio is a single page app, Vercel will naturally handle the scrolling and anchors flawlessly. If you ever add multiple routes using React Router in the future, remember to add a `vercel.json` file to rewrite all requests to `index.html`. For this portfolio, none of that is needed and it works directly!

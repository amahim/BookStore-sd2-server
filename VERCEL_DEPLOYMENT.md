# BookStore Backend - Vercel Deployment Guide

## 📦 Vercel Deployment Steps

### 1. Prepare Your Backend

✅ Already configured with:

- `vercel.json` - Vercel configuration
- Updated `index.js` - Exports app for serverless
- `package.json` - Production ready

### 2. Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

1. Navigate to backend folder:

   ```bash
   cd backend
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy:

   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option B: Using Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset:** Other
   - **Root Directory:** `backend`
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty

### 4. Add Environment Variables in Vercel

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

   - **Key:** `MONGODB_URL`

     - **Value:** Your MongoDB Atlas connection string
     - Example: `mongodb+srv://username:password@cluster.mongodb.net/books-collection?retryWrites=true&w=majority`

   - **Key:** `NODE_ENV`

     - **Value:** `production`

   - **Key:** `PORT`
     - **Value:** `5555` (optional, Vercel auto-assigns)

3. Save and redeploy

### 5. Update Frontend with Backend URL

After deployment, you'll get a URL like:

```
https://your-project.vercel.app
```

Update your frontend to use this URL instead of `http://localhost:5555`

In all frontend files, replace:

```javascript
axios.get("http://localhost:5555/books");
```

With:

```javascript
axios.get("https://your-project.vercel.app/books");
```

### 6. Test Your Deployment

Test these endpoints:

- `https://your-project.vercel.app/` - Welcome message
- `https://your-project.vercel.app/books` - Get all books
- `https://your-project.vercel.app/books/:id` - Get book by ID

## 🔧 Important Notes

1. **MongoDB Atlas**: Make sure your MongoDB cluster allows connections from anywhere (0.0.0.0/0) or add Vercel IPs to whitelist

2. **CORS**: Already configured to accept all origins for production

3. **Serverless Functions**: Each API route runs as a serverless function on Vercel

4. **Cold Starts**: First request might be slow due to serverless cold start

5. **Logs**: View logs in Vercel dashboard under "Deployments" → Select deployment → "Runtime Logs"

## 🐛 Troubleshooting

### Issue: 404 Not Found

- Check `vercel.json` routes configuration
- Ensure `index.js` is properly exported

### Issue: Database Connection Failed

- Verify MongoDB connection string in environment variables
- Check MongoDB Atlas network access settings
- Ensure database user has proper permissions

### Issue: CORS Errors

- Already handled with `cors({origin: '*'})` in production
- If still having issues, add your frontend URL to allowed origins

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Deploying Express on Vercel](https://vercel.com/guides/using-express-with-vercel)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)

## 🚀 After Deployment

Your backend will be live at: `https://your-project-name.vercel.app`

Test it with:

```bash
curl https://your-project-name.vercel.app/
curl https://your-project-name.vercel.app/books
```

# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

- [x] `vercel.json` configured
- [x] `index.js` exports app for serverless
- [x] `package.json` updated with engines and scripts
- [x] CORS configured for production
- [x] Environment variables support added
- [x] `.gitignore` updated

## 📋 Deployment Steps

### Step 1: Push to GitHub (if not done)

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Configure:
   - **Root Directory:** `backend`
   - **Framework:** Other
   - Leave build settings as default

### Step 3: Add Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables:

Add:

```
MONGODB_URL = mongodb+srv://BookStore:OUVKphGNdLmzlfTg@cluster0.kreq4.mongodb.net/?appName=Cluster0
NODE_ENV = production
```

### Step 4: Deploy

Click "Deploy" and wait for deployment to complete.

### Step 5: Get Your Backend URL

After deployment, you'll get a URL like:

```
https://your-backend-name.vercel.app
```

### Step 6: Update MongoDB Whitelist

1. Go to MongoDB Atlas
2. Network Access → Add IP Address
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirm

### Step 7: Test Your API

Test these endpoints:

```bash
# Welcome message
https://your-backend-name.vercel.app/

# Get all books
https://your-backend-name.vercel.app/books

# Get book by ID
https://your-backend-name.vercel.app/books/BOOK_ID
```

### Step 8: Update Frontend

Replace all instances of `http://localhost:5555` in your frontend with:

```
https://your-backend-name.vercel.app
```

Files to update in frontend:

- `src/pages/Home.jsx`
- `src/pages/CreateBooks.jsx`
- `src/pages/ShowBook.jsx`
- `src/pages/EditBook.jsx`
- `src/pages/DeleteBook.jsx`

## 🎉 Done!

Your backend is now live on Vercel!

## 🔍 Monitoring

- View logs: Vercel Dashboard → Deployments → Runtime Logs
- Monitor usage: Vercel Dashboard → Analytics
- Check errors: Vercel Dashboard → Deployments → Functions

## ⚠️ Common Issues

1. **500 Error**: Check environment variables are set correctly
2. **Database Connection Failed**: Whitelist IPs in MongoDB Atlas
3. **CORS Error**: Already handled, but verify in browser console
4. **404 Error**: Check vercel.json routes configuration

## 📱 Next Steps

After backend is deployed:

1. Deploy frontend to Vercel/Netlify
2. Update frontend API URLs
3. Test complete application
4. Share your live application! 🎊

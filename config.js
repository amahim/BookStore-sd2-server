// Use environment variables in production (Vercel) or fallback to defaults
export const PORT = process.env.PORT || 5555;

export const mongoDBURL =
  process.env.MONGODB_URL ||
  "mongodb+srv://BookStore:OUVKphGNdLmzlfTg@cluster0.kreq4.mongodb.net/?appName=Cluster0";

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/job');
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL=process.env.FRONTEND||'http://localhost:4200'

app.use(cors({
  origin: FRONTEND_URL, // Allow requests from Angular frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

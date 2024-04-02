// app.js

import express from 'express';
import { adminRoleRouter, getbankRouter, createBankRouter } from './routes/routes.js';

const app = express();

// Parse JSON bodies
app.use(express.json());

// Register admin role routes
app.use('/api/admin_roles', adminRoleRouter);

// get  bank routes
app.use('/api/get_banks', getbankRouter);

app.use('/api/create_bank', createBankRouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


//get
// endpoint - http://localhost:3000/api/admin_roles

//post
//endpoint - curl -X POST \
//   http://localhost:3000/api/create_bank \
//   -H 'Content-Type: application/json' \
//   -d '{
//     "name": "Example Bank"
//   }'










































// app.js fully functional

// import express from 'express';
// import mysql from 'mysql';

// const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'carrimen'
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // API endpoint to get all admin roles
// app.get('/api/admin_roles', (req, res) => {
//   connection.query('SELECT * FROM admin_roles', (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching admin roles:', error);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     res.json(results);
//   });
// });

// app.js in which connection db is in seprate file

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



// import express from 'express';
// import connection from '../task-app-backend-mysql/db/connect.js';

// const app = express();

// // API endpoint to get all admin roles
// app.get('/api/admin_roles', (req, res) => {
//     connection.query('SELECT * FROM admin_roles', (error, results, fields) => {
//         if (error) {
//             console.error('Error fetching admin roles:', error);
//             res.status(500).json({ error: 'Internal server error' });
//             return;
//         }
//         res.json(results);
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });


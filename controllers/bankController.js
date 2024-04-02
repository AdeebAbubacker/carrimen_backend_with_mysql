import connection from '../db/connect.js';
import Bank from '../models/bankModel.js';


const getAllBanks = (req, res) => {
    connection.query('SELECT * FROM bank', (error, results, fields) => {
        if (error) {
            console.error('Error fetching admin roles:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};
const createBank = (req, res) => {
    const { name, deleted_at } = req.body;

    // Validate required fields
    if (!name) {
        return res.status(400).json({ error: 'Name is a required field' });
    }

    // Set default value for deleted_at if not provided
    const newBank = new Bank(name, deleted_at || null);

    connection.query('INSERT INTO bank SET ?', newBank, (error, results, fields) => {
        if (error) {
            console.error('Error creating bank:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(201).json({ message: 'Bank created successfully', bankId: results.insertId });
    });
};


export { getAllBanks, createBank };

import connection from '../db/connect.js';

const getAllAdminRoles = (req, res) => {
    connection.query('SELECT * FROM admin_roles', (error, results, fields) => {
        if (error) {
            console.error('Error fetching admin roles:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};

export { getAllAdminRoles };

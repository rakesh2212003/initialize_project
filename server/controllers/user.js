import { getConnection } from '../config/mysql.config.js';
import { getUserQuery, getAllUserQuery, deleteUserQuery } from "../models/user.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const [rows] = await connection.execute(getUserQuery, [id]);
        connection.end();
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ data: rows[0] });
    } catch (error) {
        console.error('Error retrieving user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.execute(getAllUserQuery);
        connection.end();
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Users not found' });
        }
        return res.status(200).json({ data: rows });
    } catch (error) {
        console.error('Error retrieving user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUser = async(req,res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const [rows] = await connection.execute(deleteUserQuery, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not Found' });
        }
        return res.status(200).json({ message: 'User deleted' });
    }catch(error){
        return res.status(500).json({ message: 'Internal server error' });
    }
}
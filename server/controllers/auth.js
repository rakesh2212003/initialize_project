import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { getConnection } from '../config/mysql.js'
import { userTable, createUser, findEmail } from '../models/user.js'

export const signup = async (req, res) => {
    try {
        const id = uuidv4();
        const { username,firstname,lastname,email,password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = [id,username,firstname,lastname,email,hashedPassword];

        const connection = await getConnection();
        connection.execute(userTable);
        const [rows] = await connection.execute(findEmail, [email]);
        if (rows.length !== 0) {
            return res.status(401).json({ success: false, message: 'User email already exist' });
        }
        connection.execute(createUser, data);
        connection.end();

        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1hr' });

        return res.status(201).json({
            success: true,
            message: 'Signup Successful',
            token: token,
            data: {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
            },
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: 'Registration failed' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const connection = await getConnection();
        const [rows] = await connection.execute(findEmail, [email]);
        connection.end();

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1hr' });

        res.status(200).json({
            message: 'Login successful',
            token: token,
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}
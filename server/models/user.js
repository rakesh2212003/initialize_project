export const userTable = `
CREATE TABLE IF NOT EXISTS user(
    id char(36) PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password CHAR(60) NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted TINYINT(1) DEFAULT 0
)
`

export const createUser = `
INSERT INTO user (id, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)
`

export const findEmail = `
SELECT * FROM user WHERE email = ?
`
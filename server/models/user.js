export const userTable = `
CREATE TABLE IF NOT EXISTS user(
    id char(36) PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password CHAR(60) NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted TINYINT(1) DEFAULT 0
)
`

export const createUser = `
INSERT INTO user (id,username,firstname,lastname,email,password) VALUES(?,?,?,?,?,?)
`

export const findEmail = `
SELECT * FROM user WHERE deleted=0 AND email=?
`

export const getUserQuery = `
SELECT username,firstname,lastname,email,created_on,updated_on FROM user WHERE deleted=0 AND id=?
`

export const getAllUserQuery = `
SELECT username,firstname,lastname,email,created_on,updated_on FROM user WHERE deleted=0;
`

export const deleteUserQuery = `
UPDATE user SET deleted=1 WHERE id=?
`
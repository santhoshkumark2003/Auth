# Auth API

This is a simple auth API built with Node.js and Express.js. It uses MongoDB for storing user data and JWT for authentication.

## Endpoints

### Register

* Method: POST
* Endpoint: /api/auth/register
* Body: {name: string, email: string, password: string}
* Response: User data with token

### Login

* Method: POST
* Endpoint: /api/auth/login
* Body: {email: string, password: string}
* Response: User data with token

### Profile

* Method: GET
* Endpoint: /api/auth/profile
* Header: Authorization: Bearer <token>
* Response: User data without password
### Links

* [GitHub](https://github.com/santhoshkumark2003/Auth)
* [API](https://documenter.getpostman.com/view/50347515/2sB3dTuTyU)
* [Render](https://auth-kjjm.onrender.com)

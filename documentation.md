## API Documentation

### Register User

**Endpoint:** `POST /register`

**Description:** This endpoint registers a new user.

**Request Body:**
```json
{
    "name": "string",
    "lastName": "string",
    "email": "string",
    "password": "string"
}
```

**Response:**
- **Success:** 
    - **Status Code:** 201 Created
    - **Body:**
        ```json
        {
            "message": "User registered successfully",
            "userId": "string"
        }
        ```
- **Error:**
    - **Status Code:** 400 Bad Request
    - **Body:**
        ```json
        {
            "error": "Error message"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `POST` request.
3. Set the URL to `http://yourapiurl.com/register`.
4. Go to the `Body` tab and select `raw` and `JSON`.
5. Enter the request body as shown above.
6. Click `Send`.

### Login User

**Endpoint:** `POST /login`

**Description:** This endpoint logs in an existing user.

**Request Body:**
```json
{
    "email": "string",
    "password": "string"
}
```

**Response:**
- **Success:** 
    - **Status Code:** 200 OK
    - **Body:**
        ```json
        {
            "message": "Login successful",
            "token": "string"
        }
        ```
- **Error:**
    - **Status Code:** 401 Unauthorized
    - **Body:**
        ```json
        {
            "error": "Invalid email or password"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `POST` request.
3. Set the URL to `http://yourapiurl.com/login`.
4. Go to the `Body` tab and select `raw` and `JSON`.
5. Enter the request body as shown above.
6. Click `Send`.
### Create Income

**Endpoint:** `POST /income/create`

**Description:** This endpoint creates a new income entry.

**Request Body:**
```json
{
    "amount": "number",
    "source": "string",
    "date": "string"
}
```

**Response:**
- **Success:** 
    - **Status Code:** 201 Created
    - **Body:**
        ```json
        {
            "message": "Income created successfully",
            "incomeId": "string"
        }
        ```
- **Error:**
    - **Status Code:** 400 Bad Request
    - **Body:**
        ```json
        {
            "error": "Error message"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `POST` request.
3. Set the URL to `http://yourapiurl.com/income/create`.
4. Go to the `Body` tab and select `raw` and `JSON`.
5. Enter the request body as shown above.
6. Click `Send`.

### Get All Income

**Endpoint:** `GET /`

**Description:** This endpoint retrieves all income entries.

**Response:**
- **Success:** 
    - **Status Code:** 200 OK
    - **Body:**
        ```json
        [
            {
                "incomeId": "string",
                "amount": "number",
                "source": "string",
                "date": "string"
            }
        ]
        ```
- **Error:**
    - **Status Code:** 500 Internal Server Error
    - **Body:**
        ```json
        {
            "error": "Error message"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `GET` request.
3. Set the URL to `http://yourapiurl.com/`.
4. Click `Send`.

### Delete Income

**Endpoint:** `DELETE /:id`

**Description:** This endpoint deletes an income entry by ID.

**Response:**
- **Success:** 
    - **Status Code:** 200 OK
    - **Body:**
        ```json
        {
            "message": "Income deleted successfully"
        }
        ```
- **Error:**
    - **Status Code:** 404 Not Found
    - **Body:**
        ```json
        {
            "error": "Income not found"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `DELETE` request.
3. Set the URL to `http://yourapiurl.com/{id}`.
4. Click `Send`.

### Update Income

**Endpoint:** `PUT /:id`

**Description:** This endpoint updates an income entry by ID.

**Request Body:**
```json
{
    "amount": "number",
    "source": "string",
    "date": "string"
}
```

**Response:**
- **Success:** 
    - **Status Code:** 200 OK
    - **Body:**
        ```json
        {
            "message": "Income updated successfully"
        }
        ```
- **Error:**
    - **Status Code:** 400 Bad Request
    - **Body:**
        ```json
        {
            "error": "Error message"
        }
        ```
    - **Status Code:** 404 Not Found
    - **Body:**
        ```json
        {
            "error": "Income not found"
        }
        ```

**Example Request in Postman:**
1. Open Postman.
2. Create a new `PUT` request.
3. Set the URL to `http://yourapiurl.com/{id}`.
4. Go to the `Body` tab and select `raw` and `JSON`.
5. Enter the request body as shown above.
6. Click `Send`.

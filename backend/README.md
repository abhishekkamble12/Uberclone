# Uber Backend API Documentation

## `/users/register` Endpoint

### Description
Registers a new user. Validates input, checks for existing users, hashes the password, creates the user, and returns an authentication token.

---

### Request

- **Method:** POST
- **URL:** `/users/register`
- **Content-Type:** `application/json`

#### Required Data Format

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

---

### Responses

#### Success
- **Status Code:** 201 Created
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error
- **Status Code:** 400 Bad Request
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists
- **Status Code:** 400 Bad Request
- **Body:**
  ```json
  {
    "message": "User already exist"
  }
  ```

---

### Notes
- All fields are required.
- Password must be at least 6 characters.
- First and last names must be at
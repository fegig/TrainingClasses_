## Number Inversion and Multiplication API

Write a simple program that performs number inversion and returns the multiplicated result.

- The program should accept a **POST** request.
- The payload should be an **integer**.

### Steps
1. When the integer is received, the system reverses the number.
2. The reversed number is then **tripled**.
3. The resulting value is returned in the response.

---

### Example

#### Request

**POST** `/your-endpoint`

```json
{
  "number": 123456
}
```

#### Logic

- Inverse of number: `654321`
- Tripled: `654321 * 3 = 1962963`

#### Response

```json
{
  "ans": 1962963
}
```

---
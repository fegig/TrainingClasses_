import { Hono } from 'hono'
import userController from './controller/User.controller';
import studentController from './controller/Student.controller';
import invertTripleController from './controller/Task.controller';
const app = new Hono()


app.route('/users', userController);
app.route('/students', studentController);
app.route('/invert-and-triple', invertTripleController);
 


app.get('/', (c) => {
  return c.json({ message: 'method not allowed' }, 405)
})





export default app

// MVC architecture

// Model (Database)

// View (HTML, CSS, JavaScript)

// Controller (Logic)

//REST API Methods // GET, POST, PUT, DELETE
//CRUD Operations //  Read, Create, Update, Delete


// Middleware (Authentication, Authorization, Logging, Error Handling)

// Routes (API Endpoints)

// Database (MongoDB, PostgreSQL, MySQL, SQLite)

// Authentication (JWT, OAuth, Basic Auth)

// Authorization (Role-based Access Control)

// Logging ( Winston, Bunyan, Pino, Sentry)

// Error Handling (Express Error Handling, Sentry)
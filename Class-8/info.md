# Class 8: TypeScript Fundamentals and Advanced Concepts

## Introduction to TypeScript

**TypeScript** is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It provides static type checking, better IDE support, and helps catch errors at compile time rather than runtime.

### Key Features:
- **Static Type Checking**: Catch errors during development
- **Enhanced IDE Support**: Better autocomplete, refactoring, and navigation
- **Modern JavaScript**: Supports all ES6+ features
- **Gradual Adoption**: Can be added incrementally to existing JavaScript projects

## Core TypeScript Concepts Covered

### 1. Primitive Data Types
- **number**: `let age: number = 20;`
- **string**: `let userName: string = "John";`
- **boolean**: `let isStudent: boolean = true;`

### 2. Arrays and Objects
- **Arrays**: `let numbers: number[] = [1, 2, 3, 4, 5];`
- **Objects**: `let user: { name: string; age: number } = { name: "John", age: 20 };`

### 3. Union Types
Custom types that allow multiple types:
```typescript
type Status = "success" | "error" | "warning";
```

### 4. Interfaces
Define the structure of objects:
```typescript
interface AddTwoNumbersProps {
  a: number;
  b: number;
  c: Status;
}
```

### 5. Interface Extension and Inheritance
```typescript
interface User extends AddTwoNumbersProps {
  name: string;
  age: number;
}
```

### 6. Complex Type Systems
- **Nested Interfaces**: Building complex data structures for user management
- **Role-based Systems**: Student, tutor, and principal roles
- **Multi-dimensional Data**: 2D arrays and complex object relationships

### 7. Type Assertions and Utility Types
```typescript
as unknown as Partial<typeof data>
```

## Practical Applications

### 1. School Management System
- **User Management**: Students, tutors, and principals
- **Enrollment System**: Managing student registrations
- **Tutor System**: Assigning students to tutors
- **Role-based Access Control**: Different permissions for different user types

### 2. E-commerce Shopping Cart (products.ts)
- **Type-safe DOM Manipulation**: Working with HTML elements
- **Local Storage Management**: Persisting cart data
- **Currency Formatting**: International number formatting
- **Toast Notifications**: User feedback system
- **Discount Calculations**: Price manipulation with types

### 3. Leap Year Checker (year.ts)
- **Function Parameters**: Type annotations for function inputs
- **DOM Event Handling**: TypeScript with browser APIs
- **Type Assertions**: Safe casting of HTML elements

## Advanced Concepts Demonstrated

### System Architecture
- **Modular Design**: Separating concerns across multiple files
- **Type Safety**: Preventing runtime errors through compile-time checks
- **Scalable Code**: Building systems that can grow with requirements

### Real-world Implementation
- **API Integration**: Fetching data from external sources
- **State Management**: Managing application state (cart, user data)
- **Error Handling**: Graceful error management with async operations

## File Structure
- `index.ts`: Core TypeScript concepts and school management system
- `products.ts`: E-commerce functionality with TypeScript
- `year.ts`: Utility functions and DOM manipulation
- `index.html`: Frontend interface for leap year checker

## Learning Outcomes
By the end of Class 8, students will be able to:
- Define and use primitive and complex TypeScript types
- Create interfaces and extend them for inheritance
- Implement role-based systems with proper typing
- Build type-safe applications with DOM manipulation
- Apply TypeScript in real-world scenarios like e-commerce and user management
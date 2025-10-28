//what are data types

//primitive data types

//number
let age: number = 20;

//string
let userName: string = "John";

//boolean
let isStudent: boolean = true;

//array

let numbers: number[] = [1, 2, 3, 4, 5];

//object

let user: { name: string; age: number } = { name: "John", age: 20 };

//function

//union data type

type Status = "success" | "error" | "warning";

interface AddTwoNumbersProps {
  a: number;
  b: number;
  c: Status;
}

const addTwoNumbers = ({ a, b, c }: AddTwoNumbersProps): number => {
  return a + b;
};

interface User extends AddTwoNumbersProps {
  name: string;
  age: number;
}

addTwoNumbers({ a: 1, b: 2, c: "success" });

// 2d array

interface UserRoles {
  roleId: string;
  role: "student" | "tutor" | "principal";
}

interface UserId {
  id: string;
  email: string;
  name: string;
  role: UserRoles;
}
interface UserBios extends UserId {
  age: number;
  bio: string;
  gender: "male" | "female";
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  postalCode: string;
  countryCode: string;
}

//tutor system

interface TutorData {
  tutorId: string;
  students:UserBios[]
}


const data = {
  tutorId: 123,
  students: [
    {
      id: "123",
      email: "john@example.com",
      name: "John",
      role: { roleId: "123", role: "student" },
    },
  ],
}


const tutorsData = {
  tutorId: 123,
  students: [
    {
      id: "123",
      email: "john@example.com",
      name: "John",
    },
  ]
} as unknown as Partial<typeof data>






// School management system

//attendance system
//grading system
//course systems
//ticketing system 
//enrollment system ✔️
//tutors systems  ✔️

// studentID

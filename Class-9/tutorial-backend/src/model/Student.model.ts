import type { StudentType } from "../schema/Student.schema";
import { randomUUID } from "crypto";

const firstNames = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "David", "Elizabeth", "William", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Christopher", "Karen", "Daniel", "Nancy", "Matthew", "Lisa",
  "Anthony", "Betty", "Mark", "Margaret", "Donald", "Sandra", "Steven", "Ashley",
  "Paul", "Kimberly", "Andrew", "Emily", "Joshua", "Donna", "Kenneth", "Michelle",
  "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Timothy", "Deborah"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Wilson", "Anderson", "Thomas", "Taylor",
  "Moore", "Jackson", "Martin", "Lee", "Thompson", "White", "Harris", "Sanchez",
  "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King",
  "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams"
];

const middleNames = [
  "Alexander", "Marie", "James", "Ann", "Michael", "Rose", "David", "Grace",
  "Robert", "Jane", "William", "Louise", "Joseph", "May", "Thomas", "Elizabeth",
  "Charles", "Marie", "Daniel", "Anne", "Matthew", "Lee", "Anthony", "Lynn"
];

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France",
  "Japan", "India", "Brazil", "Mexico", "Spain", "Italy", "South Korea", "China",
  "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland"
];

const groups: ("home" | "int")[] = ["home", "int"];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateStudent(index: number): StudentType {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const hasMiddleName = Math.random() > 0.5;
  const group = getRandomElement(groups);
  
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@example.com`;
  const createdAt = generateRandomDate(new Date(2020, 0, 1), new Date());
  const updatedAt = generateRandomDate(createdAt, new Date());
  
  const student: StudentType = {
    studentId: randomUUID(),
    studentFirstName: firstName,
    studentLastName: lastName,
    studentEmail: email,
    studentGroup: group,
    studentCreatedAt: createdAt,
    studentUpdatedAt: updatedAt,
  };
  
  if (hasMiddleName) {
    student.studentMiddleName = getRandomElement(middleNames);
  }
  
  // Only add country for international students
  if (group === "int") {
    student.studentCountry = getRandomElement(countries);
  }
  
  return student;
}

const StudentData: StudentType[] = Array.from({ length: 50 }, (_, i) => generateStudent(i));

export default StudentData;
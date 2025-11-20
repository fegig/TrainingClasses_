import { Hono, type Context, type MiddlewareHandler } from "hono";
import { StudentSchema } from "../schema/Student.schema";
import type { StudentType } from "../schema/Student.schema";
import StudentData from "../model/Student.model";

const studentController = new Hono();

studentController.get("/", (c: Context) => {
  return c.json({ students: StudentData });
});

studentController.get("/total-students", (c: Context) => {
  return c.json({ totalStudents: StudentData.length });
});

studentController.get("/home-students", (c: Context) => {
  return c.json({ totalHomeStudents: totalHomeStudents });
});

studentController.get("/int-students", (c: Context) => {
  return c.json({ totalIntStudents: totalIntStudents });
});


studentController.get("/comparison-test", (c: Context) => {
    if (totalHomeStudents > totalIntStudents) {
        return c.json({ message: "Home students are greater than int students", totalHomeStudents, totalIntStudents });
    } else {
        return c.json({ message: "Int students are greater than home students", totalHomeStudents, totalIntStudents });
    }
})
studentController.get("/students-per-country", (c: Context) => {
    return c.json({ highestStudentsPerCountry: highestStudentsPerCountry });
})

studentController.get("/highest-students-per-country", (c: Context) => {
    return c.json({ highestStudentsPerCountry: Object.entries(highestStudentsPerCountry).sort((a, b) => b[1] - a[1])[0] });
})

studentController.get("/highest-country-students", (c: Context) => {
    const highestCountryStudents = Object.entries(highestStudentsPerCountry).sort((a, b) => b[1] - a[1])[0];
    const studentList = StudentData.filter((student) => student.studentCountry === highestCountryStudents[0]);

    return c.json({ highestCountryStudents: studentList });
})




export default studentController;



const totalHomeStudents = StudentData.filter((student) => student.studentGroup === "home").length;
const totalIntStudents = StudentData.filter((student) => student.studentGroup === "int").length;
const highestStudentsPerCountry = StudentData.filter((student) => student.studentGroup === "int")?.reduce((acc, student) => {
    if (student.studentCountry) {
        acc[student.studentCountry] = (acc[student.studentCountry] || 0) + 1;
        return acc;
    }
    return acc;
}, {} as Record<string, number>) ?? {};



()=>{


}

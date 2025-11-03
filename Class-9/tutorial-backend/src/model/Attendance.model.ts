import { AttendanceType, DailyAttendanceType } from "../types/Attendance.type";

const Attendance: AttendanceType[] = [
  {
    attendanceId: "SJFG9WE8RG89S9",
    userId: "1skdjv0wifvnsi09dvcijsdovaj9"
  },
  {
    attendanceId: "HJJ98SAUDHGFUS9F",
    userId: "shu9fgh8uehgugs9dhufh9sh9fh"
  },
];

const dailyAttendance: DailyAttendanceType[] = [
  {
    attendanceId: "SJFG9WE8RG89S9",
    date: "03-11-2025",
    status: "present",
  },
  {
    attendanceId: "HJJ98SAUDHGFUS9F",
    date: "03-11-2025",
    status: "absent",
  },
];

export { Attendance, dailyAttendance };
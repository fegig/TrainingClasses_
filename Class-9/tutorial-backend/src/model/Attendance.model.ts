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
  {
    attendanceId: "NJKDSA9FHASJDFHASJDF",
    userId: "sjdg98sd7fh879sdh897fhs"
  },
  {
    attendanceId: "JHS8AF7EFHG8SDHFHJSD",
    userId: "oisa0dfoajdfsajdofjsidj"
  },
  {
    attendanceId: "HJSDFH97FHSDF987SHF",
    userId: "shu9fgh8uehgugs9dhufh9sh9fh9"
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
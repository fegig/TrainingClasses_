import { type Context, Hono } from "hono";
import User from "../model/User.model";
import { Attendance, dailyAttendance } from "../model/Attendance.model";
import { AttendanceType, DailyAttendanceType } from "../types/Attendance.type";

const userController = new Hono();

userController.get("/", (c: Context) => {
  return c.json({ users: User });
});

userController.get("/:userId", (c: Context) => {
  const userId = c.req.param("userId");
  const user = User.find((user) => user.userId === userId);
  if (!user) {
    return c.json({ message: "user not found" }, 404);
  }
  return c.json(user, 200);
});


userController.get("/:userId/attendance", (c: Context) => {
  const userId = c.req.param("userId");

  const attendanceId = Attendance.find((attendance: AttendanceType) => attendance.userId === userId)?.attendanceId;

  if (!attendanceId) {
    return c.json({ message: "user has no attendance" }, 404);
  }
  const attendance = dailyAttendance.filter((attendance: DailyAttendanceType) => attendance.attendanceId === attendanceId);
  if (!attendance) {
    return c.json({ message: "user has no attendance" }, 404);
  }
  return c.json(attendance, 200);
});

export default userController;
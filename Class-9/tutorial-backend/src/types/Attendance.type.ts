export type AttendanceStatus = "present" | "absent" | "late" | "early_out";
export interface AttendanceType {
  attendanceId: string;
  userId: string;
}

export interface DailyAttendanceType extends Partial<AttendanceType> {
  date: string;
  status: AttendanceStatus;
}
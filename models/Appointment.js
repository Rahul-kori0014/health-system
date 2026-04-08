import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
     age: String,
    email: String,
    mobile: String,
    gender: String,
    appointmentDate: String,
    preferredTime: String,
    specialist: String,   fullName: String,

    address: String,
    issue: String,
  },
  { timestamps: true }
);

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);

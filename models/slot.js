import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
  {
    CourseName: {
      type: String,
      required: true,
    },
    BatchNumber: {
      type: Number,
      required: true,
    },
    Time: {
      type: String,
      required: true,
    },
    Days: {
      type: Array,
      required: true,
    },
    TeacherName: {
      type: String,
      required: true,
    },
    TeacherId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Slot", slotSchema);

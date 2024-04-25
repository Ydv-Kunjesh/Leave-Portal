var mongoose = require("mongoose");
var leaveSchema = new mongoose.Schema(
  {
    name: { type: String, required: "name cant be blank" },
    subject: { type: String, required: "subject cant be blank" },
    percentage: { type: String, required: "percentage cant be blank" },
    roomno: { type: String, required: "roomno cant be blank" },


    from: Date,
    to: Date,
    days: Number,
    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    },
    wardenstatus: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    },
    principalstatus: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    },
    finalstatus: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    },
    approved: {
      type: Boolean,
      default: false
    },
    denied: {
      type: Boolean,
      default: false
    },
    stud: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
      },
      username: String
    }
  },
  { timestamps: {} }
);

module.exports = mongoose.model("Leave", leaveSchema);

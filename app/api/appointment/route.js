import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(
      JSON.stringify({ success: false, message: "Please login first!" }),
      { status: 401 }
    );
  }

  try {
    await connectDB();
    const body = await req.json();

    const newAppointment = await Appointment.create({
      ...body,
      userId: session.user._id,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Appointment Saved Successfully",
        data: newAppointment,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey", // this is literally "apikey"
        pass: process.env.SENDGRID_API_KEY!,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Dog Grooming Quote Request - ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Alt Phone:</strong> ${data.altPhone || "N/A"}</p>
        <h3>Dog Info</h3>
        <p><strong>Name:</strong> ${data.dogName}</p>
        <p><strong>Breed:</strong> ${data.dogBreed}</p>
        <p><strong>Weight:</strong> ${data.dogWeight} lbs</p>
        <p><strong>DOB:</strong> ${data.dogDob}</p>
        <h3>Services</h3>
        <p><strong>Main:</strong> ${data.mainService}</p>
        <p><strong>Additional:</strong> ${data.additionalServices.join(", ") || "None"}</p>
        <h3>Appointment</h3>
        <p><strong>Desired Date:</strong> ${data.firstAvailable ? "First Available" : data.desiredDate}</p>
        <h3>Comments</h3>
        <p>${data.comments || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
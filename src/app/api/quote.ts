import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateAppointmentEmailHTML, generateAppointmentEmailSubject } from "@/utils/emailTemplate";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract form fields
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      altPhone: formData.get("altPhone") as string || undefined,
      email: formData.get("email") as string,
      dogName: formData.get("dogName") as string,
      dogBreed: formData.get("dogBreed") as string,
      dogWeight: formData.get("dogWeight") as string,
      dogAge: formData.get("dogAge") as string,
      mainService: formData.get("mainService") as string,
      additionalServices: JSON.parse(formData.get("additionalServices") as string || "[]"),
      desiredDate: formData.get("desiredDate") as string,
      firstAvailable: formData.get("firstAvailable") === "true",
      comments: formData.get("comments") as string || undefined,
    };

    // Extract uploaded files
    const uploadedFiles: File[] = [];
    const dogPhoto = formData.get("dogPhoto") as File | null;
    
    // Get document files
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("documents_") && value instanceof File) {
        uploadedFiles.push(value);
      }
    }

    // Create Mailgun transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAILGUN_SMTP_SERVER || "smtp.mailgun.org",
      port: parseInt(process.env.MAILGUN_SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILGUN_SMTP_USERNAME!,
        pass: process.env.MAILGUN_SMTP_PASSWORD!,
      },
    });

    // Prepare attachments
    const attachments: any[] = [];

    // Add document files as attachments
    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      const buffer = Buffer.from(await file.arrayBuffer());
      
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    // Add dog photo if provided
    if (dogPhoto && dogPhoto.size > 0) {
      const photoBuffer = Buffer.from(await dogPhoto.arrayBuffer());
      attachments.push({
        filename: dogPhoto.name,
        content: photoBuffer,
        contentType: dogPhoto.type,
      });
    }

    // Generate email content
    const emailData = {
      ...data,
      uploadedFiles: [
        ...uploadedFiles.map(f => f.name),
        ...(dogPhoto && dogPhoto.size > 0 ? [dogPhoto.name] : [])
      ]
    };

    const htmlContent = generateAppointmentEmailHTML(emailData);
    const subject = generateAppointmentEmailSubject(emailData);

    // Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: subject,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending appointment email:", err);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send appointment request" 
    }, { status: 500 });
  }
}
interface AppointmentData {
  firstName: string;
  lastName: string;
  phone: string;
  altPhone?: string;
  email: string;
  dogName: string;
  dogBreed: string;
  dogWeight: string;
  dogAge: string;
  mainService: string;
  additionalServices: string[];
  desiredDate: string;
  firstAvailable: boolean;
  comments?: string;
  uploadedFiles?: string[];
}

export function generateAppointmentEmailHTML(data: AppointmentData): string {
  const formatDate = (dateString: string) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatAge = (ageString: string) => {
    const age = parseInt(ageString);
    if (isNaN(age)) return "Not specified";
    if (age === 1) return "1 year old";
    if (age < 1) return "Less than 1 year old";
    return `${age} years old`;
  };

  const formatMainService = (service: string) => {
    const serviceMap: { [key: string]: string } = {
      'full-groom': 'Full Groom',
      'sanitary-groom': 'Sanitary Groom'
    };
    return serviceMap[service] || service;
  };

  const formatAdditionalServices = (services: string[]) => {
    const serviceMap: { [key: string]: string } = {
      'teeth-brushing': 'Teeth Brushing',
      'nail-filing': 'Nail Filing',
      'paw-nose-balm': 'Paw & Nose Balm',
      'medicated-bath': 'Medicated Bath',
      'anal-gland-expression': 'Anal Gland Expression',
      'de-shedding': 'De-shedding',
      'de-skunk-bath': 'De-skunk Bath Treatment',
      'flea-tick-treatment': 'Flea & Tick Treatment'
    };
    
    return services.map(service => serviceMap[service] || service);
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Grooming Appointment Request</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f7f7f7;
        }
        .container {
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #e5e5e5;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #2c3e50;
          margin: 0;
          font-size: 28px;
        }
        .section {
          margin-bottom: 25px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 6px;
          border-left: 4px solid #007bff;
        }
        .section h2 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 18px;
          border-bottom: 1px solid #dee2e6;
          padding-bottom: 8px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }
        .info-item {
          background-color: white;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #e9ecef;
        }
        .info-label {
          font-weight: bold;
          color: #495057;
          margin-bottom: 4px;
          font-size: 14px;
        }
        .info-value {
          color: #212529;
          font-size: 16px;
        }
        .full-width {
          grid-column: span 2;
        }
        .services-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .services-list li {
          background-color: white;
          padding: 8px 12px;
          margin-bottom: 5px;
          border-radius: 4px;
          border-left: 3px solid #28a745;
        }
        .urgent {
          background-color: #fff3cd;
          border-left-color: #ffc107;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
        }
        .files-list {
          background-color: white;
          border-radius: 4px;
          padding: 10px;
        }
        .file-item {
          padding: 8px;
          background-color: #e9ecef;
          margin-bottom: 5px;
          border-radius: 3px;
          font-family: monospace;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
        }
        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🐕 New Grooming Appointment Request</h1>
          <p style="margin: 10px 0 0 0; color: #6c757d;">
            Submitted on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>

        ${data.firstAvailable ? `
          <div class="urgent">
            <strong>⚡ Priority Request:</strong> Customer is flexible and wants the first available appointment!
          </div>
        ` : ''}

        <div class="section">
          <h2>👤 Customer Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Full Name</div>
              <div class="info-value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Email Address</div>
              <div class="info-value">
                <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">
                  ${data.email}
                </a>
              </div>
            </div>
            <div class="info-item">
              <div class="info-label">Primary Phone</div>
              <div class="info-value">
                <a href="tel:${data.phone.replace(/[^+\d]/g, '')}" style="color: #007bff; text-decoration: none;">
                  ${data.phone}
                </a>
              </div>
            </div>
            ${data.altPhone ? `
              <div class="info-item">
                <div class="info-label">Alternate Phone</div>
                <div class="info-value">
                  <a href="tel:${data.altPhone.replace(/[^+\d]/g, '')}" style="color: #007bff; text-decoration: none;">
                    ${data.altPhone}
                  </a>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="section">
          <h2>🐾 Dog Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Dog's Name</div>
              <div class="info-value">${data.dogName}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Breed</div>
              <div class="info-value">${data.dogBreed}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Weight</div>
              <div class="info-value">${data.dogWeight} lbs</div>
            </div>
            <div class="info-item">
              <div class="info-label">Age</div>
              <div class="info-value">${formatAge(data.dogAge)}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>✂️ Requested Services</h2>
          <div class="info-item" style="margin-bottom: 15px;">
            <div class="info-label">Main Service</div>
            <div class="info-value" style="font-size: 18px; font-weight: bold; color: #007bff;">
              ${formatMainService(data.mainService)}
            </div>
          </div>
          
          ${data.additionalServices && data.additionalServices.length > 0 ? `
            <div class="info-label" style="margin-bottom: 10px;">Additional Services:</div>
            <ul class="services-list">
              ${formatAdditionalServices(data.additionalServices).map(service => 
                `<li>${service}</li>`
              ).join('')}
            </ul>
          ` : `
            <p style="color: #6c757d; font-style: italic;">No additional services requested</p>
          `}
        </div>

        <div class="section">
          <h2>📅 Appointment Details</h2>
          <div class="info-item">
            <div class="info-label">Preferred Date</div>
            <div class="info-value" style="font-size: 18px; ${data.firstAvailable ? 'color: #ffc107; font-weight: bold;' : ''}">
              ${data.firstAvailable ? '⚡ First Available Appointment' : formatDate(data.desiredDate)}
            </div>
          </div>
        </div>

        ${data.comments ? `
          <div class="section">
            <h2>💬 Additional Comments</h2>
            <div class="info-item">
              <div class="info-value" style="white-space: pre-wrap; line-height: 1.6;">
                ${data.comments}
              </div>
            </div>
          </div>
        ` : ''}

        ${data.uploadedFiles && data.uploadedFiles.length > 0 ? `
          <div class="section">
            <h2>📎 Uploaded Documents</h2>
            <div class="files-list">
              <div class="info-label" style="margin-bottom: 10px;">
                ${data.uploadedFiles.length} file(s) attached to this email:
              </div>
              ${data.uploadedFiles.map(filename => 
                `<div class="file-item">${filename}</div>`
              ).join('')}
            </div>
          </div>
        ` : ''}

        <div class="footer">
          <p>
            <strong>Next Steps:</strong> Review the request and contact the customer within 24 hours to confirm appointment details and provide a personalized quote.
          </p>
          <p style="margin-top: 15px;">
            This email was automatically generated from your dog grooming website appointment form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateAppointmentEmailSubject(data: AppointmentData): string {
  const urgency = data.firstAvailable ? '[PRIORITY] ' : '';
  return `${urgency}New Grooming Appointment: ${data.dogName} (${data.firstName} ${data.lastName})`;
}

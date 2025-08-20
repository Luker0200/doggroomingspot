"use client";

import { Column, Card, Heading, Text, Flex, Button, Input, Checkbox } from "@once-ui-system/core";
import { useState } from "react";
import styles from "./AppointmentForm.module.scss";

export default function AppointmentForm() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dogPhoto, setDogPhoto] = useState<File | null>(null);
  const [mainService, setMainService] = useState<string>("");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [desiredDate, setDesiredDate] = useState<string>("");
  const [firstAvailable, setFirstAvailable] = useState<boolean>(false);

  const mainServices = [
    { value: "full-groom", label: "Full Groom" },
    { value: "sanitary-groom", label: "Sanitary Groom" }
  ];

  const additionalServicesList = [
    { value: "teeth-brushing", label: "Teeth Brushing" },
    { value: "nail-filing", label: "Nail Filing" },
    { value: "paw-nose-balm", label: "Paw & Nose Balm" },
    { value: "medicated-bath", label: "Medicated Bath" },
    { value: "anal-gland-expression", label: "Anal Gland Expression" },
    { value: "de-shedding", label: "De-shedding" },
    { value: "de-skunk-bath", label: "De-skunk Bath Treatment" },
    { value: "flea-tick-treatment", label: "Flea & Tick Treatment" }
  ];

  const RequiredIndicator = () => <span style={{ color: "var(--critical-strong)" }}>*</span>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email sending functionality
    console.log("Form submitted", {
      mainService,
      additionalServices,
      desiredDate,
      firstAvailable,
      dogPhoto: dogPhoto?.name
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleDogPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDogPhoto(e.target.files[0]);
    }
  };

  const removeDogPhoto = () => {
    setDogPhoto(null);
  };

  const handleMainServiceChange = (value: string) => {
    setMainService(value);
  };

  const handleAdditionalServiceChange = (value: string, checked: boolean) => {
    if (checked) {
      setAdditionalServices([...additionalServices, value]);
    } else {
      setAdditionalServices(additionalServices.filter(service => service !== value));
    }
  };

  const handleFirstAvailableChange = (checked: boolean) => {
    setFirstAvailable(checked);
    if (checked) {
      setDesiredDate("");
    }
  };

  return (
    <Card
      background="neutral-alpha-weak"
      padding="xl" 
      style={{ width: "min(100%, 880px)", marginInline: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Column gap="xl" horizontal="center" fillWidth>
          {/* Contact Information */}
          <Column gap="l" horizontal="center">
            <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
              Contact Information
            </Heading>
            <div className={styles.autoFit}>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="first-name" variant="body-default-s">
                  First Name <RequiredIndicator />
                </Text>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="last-name" variant="body-default-s">
                  Last Name <RequiredIndicator />
                </Text>
                <Input
                  id="last-name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="phone-number" variant="body-default-s">
                  Phone Number <RequiredIndicator />
                </Text>
                <Input
                  id="phone-number"
                  placeholder="(555) 123-4567"
                  type="tel"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="alternate-phone" variant="body-default-s">
                  Alternate Phone
                </Text>
                <Input
                  id="alternate-phone"
                  placeholder="(555) 123-4567 (optional)"
                  type="tel"
                />
              </div>
              <div className={`${styles.spanTwo} ${styles.fieldWrapper}`}>
                <Text as="label" htmlFor="email" variant="body-default-s">
                  Email <RequiredIndicator />
                </Text>
                <Input
                  id="email"
                  placeholder="your.email@example.com"
                  type="email"
                  required
                />
              </div>
            </div>
          </Column>

          {/* Dog Information */}
          <Column gap="l" horizontal="center">
            <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
              Dog Information
            </Heading>
            <div className={styles.autoFit}>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="dog-name" variant="body-default-s">
                  Dog's Name <RequiredIndicator />
                </Text>
                <Input
                  id="dog-name"
                  placeholder="Enter your dog's name"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="dog-breed" variant="body-default-s">
                  Dog's Breed <RequiredIndicator />
                </Text>
                <Input
                  id="dog-breed"
                  placeholder="e.g., Golden Retriever, Mixed Breed"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="dog-weight" variant="body-default-s">
                  Dog's Weight (lbs) <RequiredIndicator />
                </Text>
                <Input
                  id="dog-weight"
                  placeholder="e.g., 45"
                  type="number"
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Text as="label" htmlFor="dog-dob" variant="body-default-s">
                  Dog's Date of Birth <RequiredIndicator />
                </Text>
                <Input
                  id="dog-dob"
                  placeholder="MM/DD/YYYY"
                  type="date"
                  required
                />
              </div>
            </div>

            {/* Dog Photo Upload */}
            <Column gap="m" fillWidth>
              <Text variant="body-strong-s">Dog Photo (Optional)</Text>
              <Text variant="body-default-s" color="neutral-on-background-weak" marginBottom="s">
                Upload a photo of your dog to help us prepare for the grooming session
              </Text>
              
              <div
                style={{
                  border: "2px dashed var(--neutral-alpha-medium)",
                  borderRadius: "8px",
                  padding: "24px",
                  textAlign: "center",
                  backgroundColor: "var(--neutral-alpha-weak)",
                  transition: "border-color 0.2s ease",
                  cursor: "pointer",
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "var(--brand-strong)";
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "var(--neutral-alpha-medium)";
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "var(--neutral-alpha-medium)";
                  const files = Array.from(e.dataTransfer.files);
                  if (files.length > 0) {
                    setDogPhoto(files[0]);
                  }
                }}
                onClick={() => document.getElementById('dog-photo-upload')?.click()}
              >
                <input
                  id="dog-photo-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleDogPhotoChange}
                  style={{ display: "none" }}
                />
                <Text variant="body-default-s" color="neutral-on-background-weak">
                  Insert a photo here:
                </Text>
                <br />
                <Text variant="body-default-xs" color="neutral-on-background-weak">
                  Accepted formats: JPG, PNG
                </Text>
              </div>

              {/* Selected Dog Photo */}
              {dogPhoto && (
                <Column gap="s">
                  <Text variant="body-strong-s">Selected Dog Photo:</Text>
                  <Flex horizontal="space-between" vertical="center" 
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "var(--neutral-alpha-weak)",
                          borderRadius: "4px",
                          border: "1px solid var(--neutral-alpha-medium)"
                        }}>
                    <Text variant="body-default-s">{dogPhoto.name}</Text>
                    <Button
                      variant="secondary"
                      size="s"
                      onClick={removeDogPhoto}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Column>
              )}
            </Column>
          </Column>

          {/* Service Selection */}
          <Column gap="l" horizontal="center">
            <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
              Service Details
            </Heading>
            
            {/* Main Service Selection */}
            <Column gap="m" fillWidth>
              <Text variant="body-strong-s">Main Service <RequiredIndicator /></Text>
              <div className={styles.autoFit}>
                {mainServices.map((service) => (
                  <div key={service.value} className={styles.fieldWrapper}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="main-service"
                        value={service.value}
                        checked={mainService === service.value}
                        onChange={(e) => handleMainServiceChange(e.target.value)}
                        required
                        style={{ width: "16px", height: "16px" }}
                      />
                      <Text variant="body-default-s">{service.label}</Text>
                    </label>
                  </div>
                ))}
              </div>
            </Column>

            {/* Additional Services Selection */}
            <Column gap="m" fillWidth>
              <Text variant="body-strong-s">Additional Services (Optional)</Text>
              <div className={styles.autoFit}>
                {additionalServicesList.map((service) => (
                  <div key={service.value} className={styles.fieldWrapper}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        value={service.value}
                        checked={additionalServices.includes(service.value)}
                        onChange={(e) => handleAdditionalServiceChange(service.value, e.target.checked)}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <Text variant="body-default-s">{service.label}</Text>
                    </label>
                  </div>
                ))}
              </div>
            </Column>

            {/* Date Selection */}
            <Column gap="m" fillWidth>
              <Text variant="body-strong-s">Desired Date <RequiredIndicator /></Text>
              <div className={styles.autoFit}>
                <div className={styles.fieldWrapper}>
                  <Input
                    id="desired-date"
                    type="date"
                    value={desiredDate}
                    onChange={(e) => setDesiredDate(e.target.value)}
                    disabled={firstAvailable}
                    required={!firstAvailable}
                    style={{ 
                      opacity: firstAvailable ? 0.5 : 1,
                      backgroundColor: firstAvailable ? "var(--neutral-alpha-weak)" : "var(--neutral-on-background)"
                    }}
                  />
                </div>
                <div className={styles.fieldWrapper}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={firstAvailable}
                      onChange={(e) => handleFirstAvailableChange(e.target.checked)}
                      style={{ width: "16px", height: "16px" }}
                    />
                    <Text variant="body-default-s">First Available</Text>
                  </label>
                </div>
              </div>
            </Column>
          </Column>

          {/* File Upload */}
          <Column gap="l" horizontal="center">
            <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
              Required Documents
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak" marginBottom="s">
              Please upload proof of rabies vaccination and any other relevant documents <RequiredIndicator />
            </Text>
            
            {/* Custom File Upload Component */}
            <div
              style={{
                border: "2px dashed var(--neutral-alpha-medium)",
                borderRadius: "8px",
                padding: "24px",
                textAlign: "center",
                backgroundColor: "var(--neutral-alpha-weak)",
                transition: "border-color 0.2s ease",
                cursor: "pointer",
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "var(--brand-strong)";
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "var(--neutral-alpha-medium)";
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "var(--neutral-alpha-medium)";
                const files = Array.from(e.dataTransfer.files);
                setSelectedFiles([...selectedFiles, ...files]);
              }}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileChange}
                style={{ display: "none" }}
                required
              />
              <Text variant="body-default-s" color="neutral-on-background-weak">
                Drop files here or click to select
              </Text>
              <br />
              <Text variant="body-default-xs" color="neutral-on-background-weak">
                Accepted formats: PDF, JPG, PNG, DOC, DOCX
              </Text>
            </div>

            {/* Selected Files List */}
            {selectedFiles.length > 0 && (
              <Column gap="s">
                <Text variant="body-strong-s">Selected Files:</Text>
                {selectedFiles.map((file, index) => (
                  <Flex key={index} horizontal="space-between" vertical="center" 
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "var(--neutral-alpha-weak)",
                          borderRadius: "4px",
                          border: "1px solid var(--neutral-alpha-medium)"
                        }}>
                    <Text variant="body-default-s">{file.name}</Text>
                    <Button
                      variant="secondary"
                      size="s"
                      onClick={() => removeFile(index)}
                    >
                      Remove
                    </Button>
                  </Flex>
                ))}
              </Column>
            )}
          </Column>

          {/* Additional Comments */}
          <Column gap="l" horizontal="center">
            <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
              Additional Information
            </Heading>
            <div className={styles.fieldWrapper}>
              <Text variant="body-default-s">Comments or Special Requests</Text>
              <textarea
                id="comments"
                placeholder="Please include any special instructions, behavioral notes, or additional services you'd like to request..."
                rows={4}
                className={styles.textarea}
              />
            </div>
          </Column>

          {/* Submit Button */}
          <Flex horizontal="center" marginTop="l">
            <Button
              type="submit"
              variant="primary"
              size="l"
              style={{ minWidth: "200px" }}
            >
              Submit Appointment Request
            </Button>
          </Flex>
        </Column>
      </form>
    </Card>
  );
}

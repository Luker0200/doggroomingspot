import { Column, Meta, Schema, Heading, Text, Flex, Badge, Card, Button } from "@once-ui-system/core";
import { baseURL, appointment, person, business } from "@/resources";
import AppointmentForm from "./AppointmentForm";

export async function generateMetadata() {
  return Meta.generate({
    title: appointment.title,
    description: appointment.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(appointment.title)}`,
    path: appointment.path,
  });
}

export default function Appointment() {
  return (
    <Column maxWidth="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={appointment.title}
        description={appointment.description}
        path={appointment.path}
        image={`/api/og/generate?title=${encodeURIComponent(appointment.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/appointment`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header Section */}
      <Column gap="l" marginBottom="xl">
        <Text variant="body-default-l" style={{ textAlign: "center" }} color="neutral-on-background-weak" marginTop="xl">
          Fill out the form below to schedule your mobile dog grooming appointment
        </Text>
        <Column horizontal="center" gap="8">
          <Text variant="heading-strong-s" style={{ textAlign: "center" }}>
            Servicing
          </Text>
          <Flex horizontal="center">
            <Badge background="accent-alpha-weak" onBackground="accent-strong" style={{ textAlign: "center" }}>
              Magnolia, Woodlands, Tomball, Waller, Hockley, Pinehurst, Todd Mission, and Plantersville
            </Badge>
          </Flex>
          <Text variant="body-default-s" color="neutral-on-background-weak" style={{ textAlign: "center" }}>
            Plus surrounding areas!
          </Text>
        </Column>
      </Column>

      {/* Appointment Form */}
      <AppointmentForm />

      {/* Information Note */}
      <Card
        padding="l"
        marginTop="l"
        style={{ 
          textAlign: "center", 
          width: "min(100%, 720px)", 
          marginInline: "auto",
          backgroundColor: "rgba(220, 38, 38, 0.15)",
          border: "1px solid rgba(220, 38, 38, 0.2)"
        }}
      >
        <Column gap="s">
          <Text variant="body-strong-s" style={{ color: "#dc2626" }}>
            What happens next?
          </Text>
          <Text variant="body-default-s" style={{ color: "#991b1b" }}>
            After submitting your request, we'll review your information and contact you within 24 hours to confirm your appointment details and provide a personalized quote.
          </Text>
        </Column>
      </Card>

      {/* Contact Information */}
      <Card
        border="neutral-alpha-medium"
        padding="l"
        marginTop="l"
        style={{ textAlign: "center", width: "min(100%, 720px)", marginInline: "auto" }}
      >
        <Column gap="s" horizontal="center" fitWidth style={{ marginInline: "auto" }}>
          <Text variant="body-strong-s" style={{ textAlign: "center" }}>
            Questions? Contact us directly:
          </Text>
          <Flex horizontal="center" gap="m" fitWidth>
            <Button
              href={`mailto:${person.email}`}
              variant="secondary"
              size="s"
            >
              Email Us
            </Button>
            <Button
              href={`tel:${person.phone?.replace(/[^+\\d]/g, "")}`}
              variant="secondary"
              size="s"
            >
              Call Us
            </Button>
          </Flex>
        </Column>
      </Card>
    </Column>
  );
}

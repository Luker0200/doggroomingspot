import { Column, Meta, Schema, Heading, Text, Flex, Badge, Card, Button } from "@once-ui-system/core";
import { baseURL, appointment, person, business } from "@/resources";
import FilloutEmbed from "./FilloutEmbed";

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
      
      {/* Contact Information */}
      <Card
        border="neutral-alpha-medium"
        padding="l"
        marginBottom="l"
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

      {/* Fillout Appointment Form */}
      <FilloutEmbed />
    </Column>
  );
}

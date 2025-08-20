import { Column, Meta, Schema, Heading, Text, Flex, Badge, Card, Button, Icon } from "@once-ui-system/core";
import { baseURL, about, person, services, business, appointment } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  const getServiceIcon = (service: string) => {
    const iconMap: Record<string, string> = {
      "Haircut": "scissors",
      "Bath": "bathtub", 
      "Blow dry": "hairDryer",
      "Brush out": "brush",
      "Fragrance": "flower",
      "Nail trim": "pawprint",
      "Ear cleaning and/or plucking": "ear",
      "Decorative Bandana or Bow": "bowtie",
      "Trim out of eyes, sanitary area, paw pads": "scissors"
    };
    return iconMap[service] || "scissors";
  };

  const groomingServices = [
    {
      title: "Full Groom",
      description: "The Complete Package",
      duration: "1.5-2 hr",
      includes: ["Haircut", "Bath", "Blow dry", "Brush out", "Nail trim", "Ear cleaning and/or plucking", "Fragrance", "Decorative Bandana or Bow"]
    },
    {
      title: "Sanitary Groom",
      description: "Clean and Trim",
      duration: "45-60 min",
      includes: ["Trim out of eyes, sanitary area, paw pads", "Bath", "Blow dry", "Brush out", "Nail trim", "Ear cleaning and/or plucking", "Fragrance", "Decorative Bandana or Bow"]
    }
  ];

  const additionalServices = [
    {
      title: "Teeth Brushing",
      description: "Dental hygiene maintenance for your dog's oral health"
    },
    {
      title: "Nail Filing",
      description: "Smooth nail finishing for extra comfort"
    },
    {
      title: "Paw & Nose Balm",
      description: "Moisturizing treatment for dry paws and noses"
    },
    {
      title: "Medicated Bath",
      description: "Therapeutic bath treatment for skin conditions"
    },
    {
      title: "Anal Gland Expression",
      description: "Health maintenance service for your dog's comfort"
    },
    {
      title: "De-shedding",
      description: "Deep de-shedding treatment for heavy shedders"
    },
    {
      title: "De-skunk Bath Treatment",
      description: "Specialized treatment to eliminate skunk odor"
    },
    {
      title: "Flea & Tick Bath Treatment",
      description: "Safe and effective flea and tick elimination"
    }
  ];

  return (
    <Column maxWidth="xl" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={services.path}
        title={services.title}
        description={services.description}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header Section */}
      <Column gap="l" marginBottom="xl">
        <Heading variant="display-strong-l" style={{ textAlign: "center" }}>
        Grooming Brought to You
        </Heading>
        <Text variant="body-default-l" style={{ textAlign: "center" }} color="neutral-on-background-weak">
          
        </Text>
        <Flex horizontal="center">
          <Column as="ul" gap="0" style={{ textAlign: "left" }}>
            <Text as="li" variant="body-default-s" color="neutral-on-background-weak" style={{ fontStyle: "italic" }}>
              I have no issue working with puppies 12 weeks or older and senior dogs; they will receive gentle care tailored to their specific needs.
            </Text>
          </Column>
        </Flex>
        <Card
          background="brand-weak"
          padding="l"
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          <Text variant="display-strong-s" color="brand-on-background">
            Price varies depending on size, breed, coat, condition, type of service, etc.
          </Text>
        </Card>
        <Flex fillWidth horizontal="center" paddingTop="m">
          <Button
            href={appointment.path}
            variant="primary"
            size="m"
            weight="default"
            data-border="rounded"
            arrowIcon
          >
            Request Quote
          </Button>
        </Flex>
      </Column>

      {/* Main Services */}
      <Column gap="xl" marginBottom="xl" fillWidth>
        <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
          Grooming Services
        </Heading>
                 <div
           style={{
             display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
              maxWidth: "680px",
             margin: "0 auto",
             alignItems: "stretch",
             justifyItems: "center",
             justifyContent: "center",
             padding: "0 16px",
             position: "relative",
             zIndex: 1,
           }}
         >
          {groomingServices.map((service, index) => (
                         <Card
               key={index}
               background="neutral-weak"
                               padding="s"
                style={{ height: "100%", minHeight: "300px", maxHeight: "340px", width: "100%", position: "relative", pointerEvents: "none" }}
              >

                <Column gap="s" style={{ height: "100%", justifyContent: "space-between" }}>
                  <Heading variant="display-strong-xs" style={{ marginBottom: "0px" }}>
                    {service.title}
                  </Heading>
                  <Column gap="s">
                    <Text variant="body-strong-s" weight="default">
                      Includes:
                    </Text>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "6px 12px",
                      }}
                    >
                      {service.includes.map((item, itemIndex) => (
                        <Flex key={itemIndex} vertical="center" gap="4">
                          <Icon name={getServiceIcon(item)} size="xs" />
                          <Text variant="body-default-s" color="neutral-on-background-weak">
                            {item}
                          </Text>
                        </Flex>
                      ))}
                    </div>
                  </Column>
                  <Text variant="body-default-s" color="neutral-on-background-weak" style={{ textAlign: "center", marginTop: "auto" }}>
                    Plus, a complementary headshot of your dog looking fresh!
                  </Text>
                </Column>
             </Card>
          ))}
        </div>
      </Column>

      {/* Additional Services */}
      <Column gap="l" marginBottom="xl">
        <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
          Additional Services
        </Heading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {additionalServices.map((service, index) => (
            <Card
              key={index}
              border="neutral-alpha-medium"
              padding="m"
              style={{ height: "100%", minHeight: "120px", pointerEvents: "none" }}
            >
              <Column gap="s" style={{ height: "100%" }}>
                <Heading variant="body-strong-s">
                  {service.title}
                </Heading>
                <Text variant="body-default-s" color="neutral-on-background-weak" style={{ whiteSpace: "normal" }}>
                  {service.description}
                </Text>
              </Column>
            </Card>
          ))}
        </div>
      </Column>

      {/* Call to Action */}
      <div style={{ width: "100%", display: "grid", placeItems: "center", padding: "0 16px" }}>
        <Card
          background="brand-alpha-weak"
          padding="xl"
          style={{ textAlign: "center", width: "100%", maxWidth: "820px", margin: "0 auto" }}
        >
          <Column gap="m">
            <Heading variant="display-strong-s">
              Ready to Schedule?
            </Heading>
            <Text variant="body-default-l" color="brand-on-background-weak">
              Request your mobile grooming appointment today and give your pup the care they deserve!
            </Text>
            <Flex horizontal="center" marginTop="m">
              <Button
                href="/appointment"
                variant="primary"
                size="l"
              >
                Get Quote
              </Button>
            </Flex>
            <Column gap="8" horizontal="center" marginTop="l">
              <Flex gap="8" vertical="center">
                <Icon name="email" size="xs" />
                <a href={`mailto:${person.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <Text variant="body-default-m">{person.email}</Text>
                </a>
              </Flex>
              {person.phone && (
                <Flex gap="8" vertical="center">
                  <Icon name="phone" size="xs" />
                  <a href={`tel:${person.phone.replace(/[^+\\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                    <Text variant="body-default-m">{person.phone}</Text>
                  </a>
                </Flex>
              )}
            </Column>
          </Column>
        </Card>
      </div>

    </Column>
  );
}

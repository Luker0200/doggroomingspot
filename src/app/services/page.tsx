import { Column, Meta, Schema, Heading, Text, Flex, Badge, Card, Button } from "@once-ui-system/core";
import { baseURL, about, person, services, business } from "@/resources";

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
  const groomingServices = [
    {
      title: "Full Grooming",
      description: "- Complete grooming package",
      duration: "1.5-2 hours on average",
      includes: ["Haircut", "Warm bath", "Blow dry", "Brush out", "Fragrance"]
    },
    {
      title: "Sanitary Groom",
      description: "- Good clean and trim",
      duration: "45-60 minutes on average",
      includes: ["Warm bath", "Blow dry", "Brush out", "Fragrance"]
    }
  ];

  const additionalServices = [
    {
      title: "Nail Trim & File",
      description: "Quick nail maintenance to keep your pup comfortable"
    },
    {
      title: "Ear Cleaning",
      description: "Thorough ear cleaning to prevent infections and maintain health"
    },
    {
      title: "De-shedding Treatment",
      description: "Deep de-shedding for heavy shedders"
    },
    {
      title: "Flea & Tick Treatment",
      description: "Safe treatment during grooming"
    },
    {
      title: "Teeth Brushing",
      description: "Dental hygiene maintenance"
    },
    {
      title: "Anal Gland Expression",
      description: "Health maintenance service"
    }
  ];

  return (
    <Column maxWidth="xl">
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
          Rates & Services
        </Heading>
        <Text variant="body-default-l" style={{ textAlign: "center" }} color="neutral-on-background-weak">
          Professional mobile dog grooming services brought directly to your home in Magnolia, Texas. 
          I am fully comfortable and experienced working with puppies 12 weeks or older and senior dogs, 
          providing gentle care tailored to their specific needs.
        </Text>
        <Card
          background="brand-alpha-weak"
          padding="l"
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <Text variant="display-strong-s" color="brand-on-background">
            Price varies depending on size, breed, coat, condition, type of service, etc.
          </Text>
        </Card>
      </Column>

      {/* Main Services */}
      <Column gap="xl" marginBottom="xl">
        <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
          Grooming Services
        </Heading>
                 <div
           style={{
             display: "grid",
                           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
              maxWidth: "600px",
             margin: "0 auto",
             alignItems: "stretch",
             justifyItems: "center",
           }}
         >
          {groomingServices.map((service, index) => (
                         <Card
               key={index}
               background="neutral-alpha-weak"
                               padding="m"
                style={{ height: "100%", minHeight: "320px", maxHeight: "360px" }}
              >
                <Column gap="s" style={{ height: "100%", justifyContent: "space-between" }}>
                <Heading variant="display-strong-xs">
                  {service.title}
                </Heading>
                <Text variant="body-default-s" color="neutral-on-background-weak">
                  {service.description}
                </Text>
                                 <Flex horizontal="start" vertical="center" marginTop="s">
                   <Badge background="neutral-alpha-weak" onBackground="neutral-strong">
                     {service.duration}
                   </Badge>
                 </Flex>
                <Column gap="s" marginTop="m">
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
                      <Text key={itemIndex} variant="body-default-s" color="neutral-on-background-weak">
                        • {item}
                      </Text>
                                         ))}
                   </div>
                 </Column>
                 <Text variant="body-default-s" color="neutral-on-background-weak" style={{ textAlign: "center", marginTop: "auto" }}>
                   Plus, a complementary decorative bow or bandana for your dog!
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
              style={{ height: "100%", minHeight: "180px" }}
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
      <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
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
            <Flex horizontal="center" gap="m" marginTop="m">
              <Button
                href="/appointment"
                variant="primary"
                size="l"
              >
                Request Appointment
              </Button>
              <Button
                href={`mailto:${person.email}`}
                variant="secondary"
                size="l"
              >
                Contact Us
              </Button>
            </Flex>
          </Column>
        </Card>
      </div>

    </Column>
  );
}

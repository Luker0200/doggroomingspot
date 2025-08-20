import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Icon, Card, Input } from "@once-ui-system/core";
import { home, about, services, appointment, person, newsletter, baseURL, business } from "@/resources";
import { Mailchimp, RevolvingGallery } from "@/components";

// Add CSS for placeholder styling
const placeholderStyles = `
  #preview-name::placeholder,
  #preview-phone::placeholder,
  #preview-email::placeholder,
  #preview-dog-name::placeholder {
    color: #f5f5f5 !important;
    opacity: 1 !important;
  }
`;

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: placeholderStyles }} />
      <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex fillWidth paddingY="24" gap="xl" mobileDirection="column">
        {/* Left Column - Content */}
        <Column maxWidth="s" flex="1">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="nowrap" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="4" delay={0.25} fillWidth horizontal="start" paddingBottom="16">
            <Column gap="8" fillWidth horizontal="start">
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
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="start" paddingBottom="32">
            <Column gap="8" paddingLeft="16">
              {home.features.map((feature, index) => (
                <Flex key={index} gap="8" vertical="center">
                  <Text variant="body-default-m" onBackground="neutral-medium">•</Text>
                  <Text variant="body-default-m" onBackground="neutral-medium">{feature}</Text>
                </Flex>
              ))}
            </Column>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="appointment"
              data-border="rounded"
              href={appointment.path}
              variant="primary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {home.buttons.appointment}
              </Flex>
            </Button>
          </RevealFx>

        </Column>

        {/* Right Column - Gallery (Desktop) / Below Content (Mobile) */}
        <Flex flex="1" horizontal="center" vertical="center">
          <RevealFx delay={0.7} fillWidth>
            <RevolvingGallery />
          </RevealFx>
        </Flex>
      </Flex>
      {/* About Us Preview Section */}
      <Column gap="xl" fillWidth marginTop="xl" id="about-preview">
        <RevealFx delay={0.8} fillWidth>
          <Column gap="l" fillWidth horizontal="center">
            <Flex gap="m" vertical="center">
              <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
                Meet Your Dog Groomer
              </Heading>
              <Button 
                href={about.path} 
                variant="secondary" 
                size="s" 
                suffixIcon="chevronRight"
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)", // Water blue
                  borderColor: "rgba(135, 206, 235, 0.9)",
                  color: "#1a1a1a", // Dark text for contrast
                }}
              >
                Learn More
              </Button>
            </Flex>
            
                         <Card background="neutral-weak" padding="l" style={{ maxWidth: "720px", pointerEvents: "none", margin: "0 auto" }}>
              <Flex fillWidth mobileDirection="column" gap="l" vertical="center">
                <Avatar src={person.avatar} size="xl" />
                <Column gap="m" flex="1">
                  <Text variant="body-default-m" style={{ textAlign: "center" }}>
                    Hi! My name is {person.firstName}. I have been grooming since 2010. I love all animals and have experience with dogs, cats, horses, goats, and more! 🐾
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" style={{ textAlign: "center" }}>
                    I graduated from grooming academy where I learned all breed standards, safety, and dog behavior. After recovering from surgery, I'm happy to be back doing what I love with our new mobile service!
                  </Text>
                  <Flex gap="8" horizontal="center" fillWidth marginTop="s">
                    <Flex gap="8" vertical="center" style={{ pointerEvents: "auto" }}>
                      <Icon name="email" size="xs" />
                      <a href={`mailto:${person.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                        <Text variant="body-default-s">{person.email}</Text>
                      </a>
                    </Flex>
                    {person.phone && (
                      <Flex gap="8" vertical="center" style={{ pointerEvents: "auto" }}>
                        <Icon name="phone" size="xs" />
                        <a href={`tel:${person.phone.replace(/[^+\\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                          <Text variant="body-default-s">{person.phone}</Text>
                        </a>
                      </Flex>
                    )}
                  </Flex>
                </Column>
              </Flex>
            </Card>
          </Column>
        </RevealFx>
      </Column>

      {/* Services Preview Section */}
      <Column gap="xl" fillWidth marginTop="xl" id="services-preview">
        <RevealFx delay={0.9} fillWidth>
          <Column gap="l" fillWidth horizontal="center">
            <Flex gap="m" vertical="center">
              <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
                Our Grooming Services
              </Heading>
              <Button 
                href={services.path} 
                variant="secondary" 
                size="s" 
                suffixIcon="chevronRight"
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)", // Water blue
                  borderColor: "rgba(135, 206, 235, 0.9)",
                  color: "#1a1a1a", // Dark text for contrast
                }}
              >
                View All Services
              </Button>
            </Flex>
            
            <Text variant="body-default-s" style={{ textAlign: "center", fontStyle: "italic", maxWidth: "600px" }} color="neutral-on-background-weak">
              Price varies depending on size, breed, coat, condition, type of service, etc.
            </Text>

                         <div style={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
               gap: "24px",
               width: "100%",
               maxWidth: "800px",
               margin: "0 auto"
             }}>
               {/* Full Groom Preview */}
               <Column gap="m">
                 <Heading variant="heading-strong-m">Full Groom</Heading>
                 <Column gap="4" paddingLeft="16">
                   {["Haircut", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                     <Flex key={index} gap="8" vertical="center">
                       <Icon name="scissors" size="xs" />
                       <Text variant="body-default-s">{item}</Text>
                     </Flex>
                   ))}
                   <Text variant="body-default-xs" color="neutral-on-background-weak" style={{ fontStyle: "italic" }}>
                     Plus a complimentary headshot!
                   </Text>
                 </Column>
               </Column>

               {/* Sanitary Groom Preview */}
               <Column gap="m">
                 <Heading variant="heading-strong-m">Sanitary Groom</Heading>
                 <Column gap="4" paddingLeft="16">
                   {["Sanitary trim", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                     <Flex key={index} gap="8" vertical="center">
                       <Icon name="scissors" size="xs" />
                       <Text variant="body-default-s">{item}</Text>
                     </Flex>
                   ))}
                   <Text variant="body-default-xs" color="neutral-on-background-weak" style={{ fontStyle: "italic" }}>
                     Plus a complimentary headshot!
                   </Text>
                 </Column>
               </Column>
             </div>
          </Column>
        </RevealFx>
      </Column>

      {/* Appointment Preview Section */}
      <Column gap="xl" fillWidth marginTop="xl" id="appointment-preview">
        <RevealFx delay={1.0} fillWidth>
          <Column gap="l" fillWidth horizontal="center">
            <Flex gap="m" vertical="center">
              <Heading variant="display-strong-s" style={{ textAlign: "center" }}>
                Request an Appointment
              </Heading>
              <Button 
                href={appointment.path} 
                variant="secondary" 
                size="s" 
                suffixIcon="chevronRight"
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)", // Water blue
                  borderColor: "rgba(135, 206, 235, 0.9)",
                  color: "#1a1a1a", // Dark text for contrast
                }}
              >
                Full Form
              </Button>
            </Flex>
            
            <Text variant="body-default-m" style={{ textAlign: "center" }} color="neutral-on-background-weak">
              <strong>Quick preview</strong> - fill out the complete form for your appointment request
            </Text>
            
                         <Card background="neutral-weak" padding="l" style={{ maxWidth: "720px", pointerEvents: "none", margin: "0 auto" }}>
              <Column gap="l">
                {/* Quick Contact Fields */}
                <Column gap="m">
                  <Heading variant="body-strong-m">Quick Contact Info</Heading>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px"
                  }}>
                                         <Column gap="4">
                       <Text variant="body-default-s">Name</Text>
                                              <Input 
                          id="preview-name" 
                          placeholder="Your name" 
                          disabled 
                          style={{
                            color: "#000000",
                            opacity: 1
                          }}
                        />
                      </Column>
                      <Column gap="4">
                        <Text variant="body-default-s">Phone</Text>
                        <Input 
                          id="preview-phone" 
                          placeholder="(555) 123-4567" 
                          disabled 
                          style={{
                            color: "#000000",
                            opacity: 1
                          }}
                        />
                      </Column>
                      <Column gap="4">
                        <Text variant="body-default-s">Email</Text>
                        <Input 
                          id="preview-email" 
                          placeholder="your.email@example.com" 
                          disabled 
                          style={{
                            color: "#000000",
                            opacity: 1
                          }}
                        />
                      </Column>
                      <Column gap="4">
                        <Text variant="body-default-s">Dog's Name</Text>
                        <Input 
                          id="preview-dog-name" 
                          placeholder="Buddy" 
                          disabled 
                          style={{
                            color: "#000000",
                            opacity: 1
                          }}
                        />
                     </Column>
                  </div>
                </Column>

                {/* Service Selection Preview */}
                <Column gap="m">
                  <Heading variant="body-strong-m">Service Selection</Heading>
                  <Flex gap="m" wrap>
                    <Badge background="brand-alpha-weak" padding="8">Full Groom</Badge>
                    <Badge background="neutral-alpha-weak" padding="8">Sanitary Groom</Badge>
                    <Badge background="neutral-alpha-weak" padding="8">+ Additional Services</Badge>
                  </Flex>
                </Column>

                {/* Service Area */}
                <Column gap="m">
                  <Heading variant="body-strong-m">Service Area</Heading>
                  <Badge background="accent-alpha-weak" onBackground="accent-strong" style={{ textAlign: "center", width: "fit-content" }}>
                    Magnolia, Woodlands, Tomball, Waller, Hockley, Pinehurst & more!
                  </Badge>
                </Column>

                {/* CTA */}
                <Flex horizontal="center" marginTop="m">
                  <Button href={appointment.path} variant="primary" size="m" arrowIcon>
                    Fill Out a Full Form Here!
                  </Button>
                </Flex>
              </Column>
            </Card>
          </Column>
        </RevealFx>
      </Column>

             {newsletter.display && <Mailchimp newsletter={newsletter} />}
     </Column>
     </>
   );
 }

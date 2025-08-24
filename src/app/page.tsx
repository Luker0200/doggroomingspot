import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Icon, Card, Input } from "@once-ui-system/core";
import { home, about, services, appointment, person, newsletter, baseURL, business } from "@/resources";
import { Mailchimp, RevolvingGallery } from "@/components";

// Add CSS for placeholder styling and Google Fonts
const placeholderStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
  
  #preview-name::placeholder,
  #preview-phone::placeholder,
  #preview-email::placeholder,
  #preview-dog-name::placeholder {
    color: #1e40af !important;
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
            <Heading wrap="nowrap" variant="display-strong-l" style={{ 
              color: "#1e40af", 
              fontFamily: "'Playfair Display', serif",
              fontWeight: "600"
            }}>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="4" delay={0.25} fillWidth horizontal="start" paddingBottom="16">
            <Column gap="8" fillWidth horizontal="start">
              {person.phone && (
                <Flex gap="12" vertical="center">
                  <Icon name="phone" size="l" />
                  <a href={`tel:${person.phone.replace(/[^+\\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                    <Text variant="display-strong-l" style={{ 
                      fontWeight: "900", 
                      color: "#1a1a1a",
                      fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                      fontSize: "2.5rem",
                      letterSpacing: "0.05em"
                    }}>
                      {person.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                    </Text>
                  </a>
                </Flex>
              )}
              <Flex gap="12" vertical="center">
                <Icon name="email" size="l" />
                <a href={`mailto:${person.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <Text variant="heading-strong-l" style={{ 
                    fontWeight: "800", 
                    color: "#1a1a1a",
                    fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "1.8rem"
                  }}>{person.email}</Text>
                </a>
              </Flex>
            </Column>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="start" paddingBottom="32">
            <Flex gap="8" vertical="start" fillWidth>
              <Column gap="8" paddingLeft="8" flex="1">
                {home.features.map((feature, index) => (
                  <Flex key={index} gap="8" vertical="center">
                    <Text variant="body-default-m" onBackground="neutral-medium">•</Text>
                    <Text variant="body-default-m" onBackground="neutral-medium">{feature}</Text>
                  </Flex>
                ))}
              </Column>
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                flex: "0 0 auto"
              }}>
                <img 
                  src="/vectors/groomingspot-dog-logo.svg" 
                  alt="The Grooming Spot Mascot" 
                  style={{ 
                    width: "120px", 
                    height: "auto",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
                  }} 
                />
              </div>
            </Flex>
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


      {/* Services Preview Section */}
      <Column gap="xl" fillWidth marginTop="xl" id="services-preview">
        <RevealFx delay={0.9} fillWidth>
          <Column gap="l" fillWidth horizontal="center">
            <Flex gap="m" vertical="center">
              <Heading variant="display-strong-s" style={{ 
                textAlign: "center",
                color: "#1e40af", 
                fontFamily: "'Playfair Display', serif",
                fontWeight: "600"
              }}>
               Grooming Services
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
               <Column gap="m" horizontal="center" className="s-flex-show">
                 <Heading variant="heading-strong-m" style={{ textAlign: "center" }}>Full Groom</Heading>
                 <Column gap="4" horizontal="center">
                   {["Haircut", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                     <Flex key={index} gap="8" vertical="center">
                       <Icon name="scissors" size="xs" />
                       <Text variant="body-default-s">{item}</Text>
                     </Flex>
                   ))}
                 </Column>
               </Column>
               
               {/* Full Groom Preview - Desktop */}
               <Column gap="m" className="s-flex-hide">
                 <Heading variant="heading-strong-m">Full Groom</Heading>
                 <Column gap="4" paddingLeft="16">
                   {["Haircut", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                     <Flex key={index} gap="8" vertical="center">
                       <Icon name="scissors" size="xs" />
                       <Text variant="body-default-s">{item}</Text>
                     </Flex>
                   ))}
                 </Column>
               </Column>

               {/* Sanitary Groom Preview - Mobile */}
                <Column gap="m" horizontal="center" className="s-flex-show">
                  <Heading variant="heading-strong-m" style={{ textAlign: "center" }}>Sanitary Groom</Heading>
                  <Column gap="4" horizontal="center">
                    {["Maintenance Trim", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                      <Flex key={index} gap="8" vertical="center">
                        <Icon name="scissors" size="xs" />
                        <Text variant="body-default-s">{item}</Text>
                      </Flex>
                    ))}
                  </Column>
                  <Text variant="body-default-s" color="neutral-on-background-weak" style={{ fontStyle: "italic", textAlign: "center" }}>
                    Maintenance trim includes hair out of the eyes, sanitary areas, and under paw pads only
                  </Text>
                </Column>
                
                {/* Sanitary Groom Preview - Desktop */}
                <Column gap="m" className="s-flex-hide">
                  <Heading variant="heading-strong-m">Sanitary Groom</Heading>
                  <Column gap="4" paddingLeft="16">
                    {["Maintenance Trim", "Bath & Blow dry", "Nail trim", "Ear cleaning", "Fragrance", "Decorative Bandana"].map((item, index) => (
                      <Flex key={index} gap="8" vertical="center">
                        <Icon name="scissors" size="xs" />
                        <Text variant="body-default-s">{item}</Text>
                      </Flex>
                    ))}
                  </Column>
                  <Text variant="body-default-s" color="neutral-on-background-weak" style={{ fontStyle: "italic" }}>
                    Maintenance trim includes hair out of the eyes, sanitary areas, and under paw pads only
                  </Text>
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
              <Heading variant="display-strong-s" style={{ 
                textAlign: "center",
                color: "#1e40af", 
                fontFamily: "'Playfair Display', serif",
                fontWeight: "600"
              }}>
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
                <Flex horizontal="center" marginTop="m" style={{ pointerEvents: "auto" }}>
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

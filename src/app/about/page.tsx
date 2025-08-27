import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, business, social, appointment } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

// Add CSS for Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
`;

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.services.title,
      display: about.services.display,
      items: about.services.experiences.map((experience) => experience.company),
    },
    {
      title: about.employee.title,
      display: about.employee.display,
      items: [],
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
                         {about.calendar.display && (
               <Button
                 href={about.calendar.link}
                 variant="secondary"
                 size="m"
                 weight="default"
                 data-border="rounded"
                 prefixIcon="calendar"
               >
                 Press Here to Get in Touch!
               </Button>
             )}
            <Heading className={styles.textAlign} variant="display-strong-xl" wrap="nowrap" style={{ 
              color: "#1e40af", 
              fontFamily: "'Playfair Display', serif",
              fontWeight: "600"
            }}>
              {business.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Column gap="8" horizontal="center" paddingTop="m">
                <Flex gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                 {social.map(
                   (item) =>
                     item.link && (
                         <React.Fragment key={item.name}>
                             <Button
                                 className="s-flex-hide"
                                 key={item.name}
                                 href={item.link}
                                 prefixIcon={item.icon}
                                 label={item.name}
                                 size="s"
                                 weight="default"
                                 variant="secondary"
                             />
                             <IconButton
                                 className="s-flex-show"
                                 size="l"
                                 key={`${item.name}-icon`}
                                 href={item.link}
                                 icon={item.icon}
                                 variant="secondary"
                             />
                         </React.Fragment>
                     ),
                 )}
               </Flex>
                               
               <Column gap="8" horizontal="center" marginTop="m">
                 {person.phone && (
                   <Flex gap="12" vertical="center" horizontal="center">
                     <a href={`tel:${person.phone.replace(/[^+\\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                       <Text variant="display-strong-l" style={{ 
                         fontWeight: "800", 
                         color: "#1a1a1a",
                         fontFamily: "'Poppins', sans-serif",
                         fontSize: "2.5rem",
                         letterSpacing: "0.02em"
                       }}>
                         {person.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                       </Text>
                     </a>
                   </Flex>
                 )}
                 <Flex gap="12" vertical="center" horizontal="center">
                   <a href={`mailto:${person.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                     <Text variant="body-default-s" style={{ 
                       fontWeight: "400", 
                       color: "#666666",
                       fontFamily: "'Arial', sans-serif",
                       fontSize: "0.9rem",
                       fontStyle: "italic"
                     }}>{person.email}</Text>
                   </a>
                 </Flex>
               </Column>
               
               <Flex fillWidth horizontal="center" marginTop="m">
                 <Button
                   href={appointment.path}
                   variant="primary"
                   size="m"
                   weight="default"
                   data-border="rounded"
                   suffixIcon="chevronRight"
                 >
                   Click here to fill out our appointment form!
                 </Button>
               </Flex>
             </Column>
           )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.services.display && (
            <>
              <Heading as="h2" id={about.services.title} variant="display-strong-s" marginBottom="m" style={{ 
                color: "#1e40af", 
                fontFamily: "'Playfair Display', serif",
                fontWeight: "600"
              }}>
                {about.services.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.services.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.employee.display && (
            <>
              <Heading as="h2" id={about.employee.title} variant="display-strong-s" marginBottom="m" style={{ 
                color: "#1e40af", 
                fontFamily: "'Playfair Display', serif",
                fontWeight: "600"
              }}>
                {about.employee.title}
              </Heading>
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                {about.employee.description}
              </Column>

            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
                style={{ 
                  color: "#1e40af", 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "600"
                }}
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {index === 0 && (
                      <Flex fillWidth horizontal="center" paddingTop="m">
                        <Button
                          href={appointment.path}
                          variant="primary"
                          size="m"
                          weight="default"
                          data-border="rounded"
                          suffixIcon="chevronRight"
                        >
                          Request Quote
                        </Button>
                      </Flex>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            style={{ width: "100%" }}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              style={{ 
                                width: "100%", 
                                height: "auto", 
                                display: "block",
                                borderRadius: "8px"
                              }}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
    </>
  );
}

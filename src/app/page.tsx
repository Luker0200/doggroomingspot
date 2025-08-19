import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema } from "@once-ui-system/core";
import { home, about, services, appointment, person, newsletter, baseURL } from "@/resources";
import { Mailchimp, RevolvingGallery } from "@/components";

export default function Home() {
  return (
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
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {home.buttons.about}
              </Flex>
            </Button>
          </RevealFx>
          <RevealFx paddingTop="8" delay={0.5} horizontal="start" paddingLeft="12">
            <Button
              id="services"
              data-border="rounded"
              href={services.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {home.buttons.services}
              </Flex>
            </Button>
          </RevealFx>
          <RevealFx paddingTop="8" delay={0.6} horizontal="start" paddingLeft="12">
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
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}

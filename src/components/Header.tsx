"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton, Text } from "@once-ui-system/core";

import { routes, display, person, about, appointment, services, gallery } from "@/resources";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  // Get current page title for mobile indicator
  const getCurrentPageTitle = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return about.label;
    if (pathname.startsWith("/services")) return services.label;
    if (pathname.startsWith("/appointment")) return appointment.label;
    if (pathname.startsWith("/gallery")) return gallery.label;
    return "Home";
  };

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      
      {/* Mobile floating logo */}
      <a 
        href="/" 
        className="s-flex-show"
        style={{ 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          left: '0px',
          top: '0px',
          zIndex: 10
        }}
      >
        <img 
          src="/vectors/groomingspot-dog-logo.svg" 
          alt="Grooming Spot Logo" 
          style={{ 
            height: '32px', 
            width: 'auto',
            filter: 'var(--logo-filter, none)' // This will adapt to theme
          }} 
        />
      </a>
      
      {/* Mobile page indicator */}
      <Flex
        show="s"
        position="fixed"
        top="0"
        fillWidth
        horizontal="center"
        zIndex={9}
        style={{ pointerEvents: "none" }}
      >
        <Flex
          background="page"
          border="neutral-alpha-weak"
          radius="xs"
          shadow="l"
          padding="8"
          paddingX="12"
        >
          <Text variant="body-default-xs" onBackground="neutral-medium">
            {getCurrentPageTitle()}
          </Text>
        </Flex>
      </Flex>
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {/* Logo - Desktop version */}
          <a 
            href="/" 
            className="s-flex-hide"
            style={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              left: '0px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <img 
              src="/vectors/groomingspot-dog-logo.svg" 
              alt="Grooming Spot Logo" 
              style={{ 
                height: '80px', 
                width: 'auto',
                filter: 'var(--logo-filter, none)' // This will adapt to theme
              }} 
            />
          </a>
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="xs"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            className={styles.navContainer}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton 
                  prefixIcon="home" 
                  href="/" 
                  selected={pathname === "/"}
                  className={`${styles["navButton"]} ${styles["mobile-nav-icon"]}`}
                  style={{
                    fontSize: "1.2rem",
                  }}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-hide`}
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-show ${styles["mobile-nav-icon"]}`}
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                    style={{
                      fontSize: "1.2rem",
                    }}
                  />
                </>
              )}
              {routes["/services"] && (
                <>
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-hide`}
                    prefixIcon="scissors"
                    href="/services"
                    label={services.label}
                    selected={pathname.startsWith("/services")}
                  />
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-show ${styles["mobile-nav-icon"]}`}
                    prefixIcon="scissors"
                    href="/services"
                    selected={pathname.startsWith("/services")}
                    style={{
                      fontSize: "1.2rem",
                    }}
                  />
                </>
              )}
              {routes["/appointment"] && (
                <>
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-hide`}
                    prefixIcon="calendar"
                    href="/appointment"
                    label={appointment.label}
                    selected={pathname.startsWith("/appointment")}
                  />
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-show ${styles["mobile-nav-icon"]}`}
                    prefixIcon="calendar"
                    href="/appointment"
                    selected={pathname.startsWith("/appointment")}
                    style={{
                      fontSize: "1.2rem",
                    }}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-hide`}
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className={`${styles["navButton"]} s-flex-show ${styles["mobile-nav-icon"]}`}
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                    style={{
                      fontSize: "1.2rem",
                    }}
                  />
                </>
              )}
              
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

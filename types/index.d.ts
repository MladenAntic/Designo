import { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  footer?: boolean;
}

export interface AboutBannerProps {
  image: string;
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  reverse?: boolean;
}

export interface LocationInfoProps {
  country: string;
  office: string;
  address1: string;
  address2: string;
  number: string;
  email: string;
}

export interface CallToActionProps {
  text: string;
  href: string;
  background: string;
  textColor: string;
}

export interface InfoBannerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export interface LocationCardProps {
  image: string;
  title: string;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export interface ServiceBannerProps {
  title: string;
  description: string;
}

export interface ServiceCardProps {
  uniqueClassname: string;
  serviceName: string;
  link: string;
  className?: string;
}

export interface AboutCardProps {
  image: string;
  title: string;
  description: string;
}
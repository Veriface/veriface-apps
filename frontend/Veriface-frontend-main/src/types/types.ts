import { ChangeEvent, ChangeEventHandler } from "react";

export type FeatureCardType = {
  id: number;
  Icon: any;
  title: string;
  content: string;
};

export type BtnProps = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
};

export type SelectCardType = {
  Icon: any;
  btnText: string;
  content: string;
  href: string;
};


export type FormInputType = {
  name: string;
  label: string;
  type: string;
  htmlFor: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
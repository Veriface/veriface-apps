type BaseFonts = {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontStyle?: string;
  textDecoration?: string;
  textTransform?: string;
  fontFamily?: string;
  mobileSize?: string;
  mobileLineHeight?: string;
  smallerPhoneSize?: string;
  smallerPhoneLineHeight?: string;
  tabSize?: string;
  tabLineHeight?: string;
};

const title = {
  fontWeight: 900,
  fontSize: "8.5rem",
  lineHeight: "130%",
  mobileSize: "5.5rem",
  smallerPhoneSize: "4.5rem",
  tabSize: "8rem",
  letterSpacing: "-4%",
};

const h1 = {
  fontWeight: 700,
  fontSize: "5.93rem",
  lineHeight: "120%",
  letterSpacing: "-2%",
  mobileSize: "3.5rem",
  tabSize: "4.5rem",
};

const h2 = {
  fontWeight: 900,
  fontSize: "5rem",
  lineHeight: "100%",
  letterSpacing: "-2%",
  tabSize: "4rem",
  mobileSize: "3.2rem"
};

const h2a = {
  ...h2,
  lineHeight: "140%",
};

const h3 = {
  fontWeight: 500,
  fontSize: "2.265rem",
  lineHeight: "160%",
  letterSpacing: "0%",
  mobileSize: "2rem"
};

const h3b = {
  ...h3,
  fontWeight: 700,
  lineHeight: "140%",
  letterSpacing: "-2%",
};

const bodyText = {
  fontWeight: 500,
  fontSize: "1.6rem",
  lineHeight: "160%",
  letterSpacing: "0%",
  mobileSize: "1.4rem"
};

const bodyTextb = {
  ...bodyText,
  fontWeight: 600,
};

let typography: {
  [key: string]: BaseFonts;
} = {};

typography = {
  h1,
  h2,
  h2a,
  h3,
  h3b,
  bodyText,
  bodyTextb,
  title
};

export default typography;

import type { SVGProps } from "react";

const paths = {
  palette:
    "M21 12a9 9 0 1 0-9 9h2a2 2 0 0 0 1-3.7 1.4 1.4 0 0 1 .7-2.6H18a3 3 0 0 0 3-2.7ZM7 9v.1M11 6v.1M16 8v.1M6 14v.1",
  pencil: "m15 4 5 5M4 20l5-1L21 7l-4-4L5 15l-1 5Z",
  envelope: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  monitor: "M3 4h18v13H3V4Zm5 17h8m-4-4v4",
  users:
    "M16 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3m20 0v-3a4 4 0 0 0-3-3.9M13 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm5-3a4 4 0 0 1 0 8",
  checkCircle: "m8 12 3 3 5-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  listChecks: "m3 6 2 2 3-4m4 3h9M3 13l2 2 3-4m4 3h9M3 21l2 2 3-4m4 2h9",
  glasses:
    "m3 3 6 2-1 5a3 3 0 0 1-6-1l1-6Zm3 9-2 7m-3-1 6 2M21 3l-6 2 1 5a3 3 0 0 0 6-1l-1-6Zm-3 9 2 7m-3 1 6-2M9 5l6 0",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20",
  penTool:
    "m12 3 8 8-5 9-11-1-1-11 9-5Zm0 0-2 9m-5 7 6-6m3-1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  chat: "M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.8-5A10 10 0 0 1 3 11a9 9 0 0 1 18 0ZM8 11h8",
  instagram:
    "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1-5v.1",
  help: "M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 3v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  lock: "M5 10h14v11H5V10Zm3 0V7a4 4 0 0 1 8 0v3m-4 5v2",
  userPlus:
    "M15 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3M13 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6 2v6m-3-3h6",
  arrowLeft: "M19 12H5m6 6-6-6 6-6",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  eyeOff:
    "m3 3 18 18M10 5c6-1 12 7 12 7a20 20 0 0 1-4 4M6 6a20 20 0 0 0-4 6s4 7 10 7a12 12 0 0 0 4-1m-6-8a3 3 0 0 0 4 4",
  info: "M12 11v6m0-10v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  alert: "m12 3 10 18H2L12 3Zm0 6v5m0 3v.1",
  chevron: "m6 9 6 6 6-6",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  diagonal: "M7 17 17 7M7 7h10v10",
  check: "m5 12 4 4L19 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18Z",
  calendar: "M8 3v4m8-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z",
  link: "m10 13 4-4m-6 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 3 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  phone: "M5 3h14v18H5V3Zm5 14h4",
  heart: "M20 5c-3-3-7-1-8 1-1-2-5-4-8-1-4 4 1 9 8 15 7-6 12-11 8-15Z",
} as const;

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-icon={name}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}

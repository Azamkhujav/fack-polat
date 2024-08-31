import * as React from "react";

export const service = [
  {
    title: "CarpetCleaning",
    text: "The beauty and life of your carpet depends on the care it receives. Special attention to spots, heavy traffic areas, pet stains, and odor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32zM5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "MattressCleaning",
    text: "Discover how little it costs to keep your mattress clean, fresh, and healthy with professional mattress sanitizing and cleaning.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "RugCleaning",
    text: "Eliminate all of the dirt, dust, and build-up on your rug, bringing out its true beauty once again! Pick up and delivery at your convenience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          color="currentColor"
        >
          <path d="M5 21h11c1.886 0 2.828 0 3.414-.586S20 18.886 20 17v-6c0-1.886 0-2.828-.586-3.414S17.886 7 16 7H8"></path>
          <path d="M8 21H4a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2v0c1.886 0 2.828 0 3.414-.586S8 14.886 8 13V8c0-1.886 0-2.828-.586-3.414S5.886 4 4 4v0a2 2 0 0 0-2 2zm9-2.643h.331c.29 0 .435 0 .557.029c.122.028.355.145.82.377c1.602.802 2.671-.6 3.596-1.736c.464-.57.696-.855.696-1.027s-.232-.457-.696-1.027c-.925-1.136-1.994-2.539-3.596-1.736c-.465.232-.698.349-.82.377c-.122.03-.267.03-.557.03H11M20 16h2m-2 4h2m-2-8h2m-2-4h2"></path>
        </g>
      </svg>
    ),
    description: "",
  },
  {
    title: "UpholsteryCleaning",
    text: "We offer a thorough upholstery deep down cleaning that can restore your favorite chair or couch to its original luster.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21 9V7c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v2h2v-2h14v2h2v-2c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3m-7-3h4c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2h-5V7c0-.55.45-1 1-1M5 7c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v7H6v-2c0-.88-.39-1.67-1-2.22zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1z"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "AirDuctCleaning",
    text: "Not only will you have a healthy home, but a clean ventilation system may save you money too!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 18.31V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.7c-.46-.18-1.05-.3-2-.3a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V12.3c-.46-.18-1.05-.3-2-.3a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V8.3C4.54 8.12 3.95 8 3 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.82 0 1.47.08 2 .21V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.16c1.78.31 2.54.97 2.71 1.13c.39.39.39 1.03 0 1.42s-.91.38-1.42 0c0 0-1.04-.71-3.29-.71c-1.26 0-2.09.41-3.05.9c-1.04.51-2.21 1.1-3.95 1.1c-.36 0-.69 0-1-.04V7.95c.3.05.63.05 1 .05c1.26 0 2.09-.41 3.05-.89C14.09 6.59 15.27 6 17 6V4H7v16h10v-2c1.5 0 1.97.29 2 .31M17 10c-1.73 0-2.91.59-3.95 1.11c-.96.48-1.79.89-3.05.89c-.37 0-.7 0-1-.05v2.01c.31.04.64.04 1 .04c1.74 0 2.91-.59 3.95-1.1c.96-.48 1.79-.9 3.05-.9c2.25 0 3.29.71 3.29.71c.51.39 1.03.39 1.42 0s.39-1.02 0-1.42C21.5 11.08 20.25 10 17 10m0 4c-1.73 0-2.91.59-3.95 1.11c-.96.48-1.79.89-3.05.89c-.37 0-.7 0-1-.05v2.01c.31.04.64.04 1 .04c1.74 0 2.91-.59 3.95-1.1c.96-.48 1.79-.9 3.05-.9c2.25 0 3.29.71 3.29.71c.51.39 1.03.39 1.42 0s.39-1.02 0-1.42C21.5 15.08 20.25 14 17 14"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "MoldRemediation",
    text: "No one should live or work in an environment overgrown with mold. Mold can be a bigger problem than you'd think.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M13.5 1.5a.5.5 0 0 0-1 0v1.563a3.8 3.8 0 0 0-2.004 1.053L9.16 5.453L7.854 4.146a.5.5 0 1 0-.708.708L8.453 6.16L6.16 8.453L4.854 7.146a.5.5 0 1 0-.708.708L5.453 9.16l-1.338 1.337A3.8 3.8 0 0 0 3.062 12.5H1.5a.5.5 0 0 0 0 1h1.512c.058.713.315 1.412.773 2.008l-1.641 1.641a.5.5 0 1 0 .707.707l1.641-1.641a3.8 3.8 0 0 0 2.008.772V18.5a.5.5 0 0 0 1 0v-1.564a3.8 3.8 0 0 0 2.002-1.052l1.337-1.338l1.307 1.308a.5.5 0 0 0 .708-.708l-1.308-1.307l2.293-2.293l1.307 1.308a.5.5 0 0 0 .708-.708l-1.308-1.307l1.337-1.336A3.8 3.8 0 0 0 16.936 7.5H18.5a.5.5 0 0 0 0-1h-1.514a3.8 3.8 0 0 0-.772-2.007l1.64-1.64a.5.5 0 0 0-.708-.707l-1.639 1.64a3.8 3.8 0 0 0-2.007-.773zM4 13.242v-.103a2.8 2.8 0 0 1 .822-1.935l6.382-6.381a2.809 2.809 0 0 1 3.972 3.972l-6.381 6.382A2.81 2.81 0 0 1 4 13.242M6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M14 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "WaterAndFireDamage",
    text: "Trained Restoration Technicians can handle any size job and are available 24 hours a day, 7 days a week.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" d="M12 18a2 2 0 0 1-1.932-1.482"></path>
          <path d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.2 27.2 0 0 1 2.707 6.315c1.027 3.593-1.67 7.17-5.408 7.17h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.2 27.2 0 0 1 2.707-6.315z"></path>
        </g>
      </svg>
    ),
    description: "",
  },
  {
    title: "TileAndGroutCleaning",
    text: "Thorough high and low pressure cleaning removes the deep-down dirt, built-up dust, grime, and mold.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m3 5l2-2l16 16l-2 2zm10 0l1-2l1 2l2 1l-2 1l-1 2l-1-2l-2-1zM5 15l1-2l1 2l2 1l-2 1l-1 2l-1-2l-2-1zM4 9l1 1l-1 1l-1-1zm14 1l1 1l-1 1l-1-1z"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "SanitizingAndDisinfection",
    text: "Protect your family and employees from dangerous viruses, such as COVID-19. Keep everyone safe!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M304.9.7c-9.6-2.7-19.5 2.8-22.3 12.4l-4.3 15.2c-8.3-.6-16.8 0-25.2 1.9c-7.3 1.7-14.3 3.5-21.1 5.5L226.5 23c-3.9-9.1-14.5-13.4-23.6-9.5s-13.4 14.5-9.5 23.6l4.4 10.4c-16.6 6.7-31.7 14.4-45.4 22.8L147 62c-5.5-8.3-16.7-10.5-25-5s-10.5 16.7-5 25l6 9c-13.7 11-25.5 22.8-35.8 34.9l-10-8c-7.8-6.2-19.1-5-25.3 2.8s-5 19.1 2.8 25.3l11.2 9c-1.8 2.8-3.5 5.7-5.1 8.5c-6.6 11.4-11.8 22.6-16 33l-8-3.2c-9.2-3.7-19.7.8-23.4 10s.8 19.7 10 23.4l10.4 4.2c-.2.8-.4 1.5-.5 2.3c-2.2 9.3-3.4 17.3-4.1 23.4c-.4 3.1-.6 5.7-.8 7.8c-.1 1.1-.1 2-.2 2.8l-.1 1.1v.8s0 .1 29.1 1h-.1l-29.1-.8c-.1 3.1 0 6.1.2 9.1L13 282.7C3.5 285.4-2 295.4.7 304.9S13.4 320 23 317.3l15.6-4.5c7.6 13.6 18.9 25 32.6 32.6L66.7 361c-2.7 9.6 2.8 19.5 12.4 22.3s19.5-2.8 22.3-12.4l4.3-15.2c1.2.1 2.4.2 3.6.2c15.6.5 30.3-3.3 43-10.2l9 9c7 7 18.4 7 25.5 0s7-18.4 0-25.5l-7.2-7.2c9.3-12.6 15.2-27.8 16.3-44.5l7.1 3c9.1 3.9 19.7-.3 23.6-9.5s-.3-19.7-9.5-23.6l-8.6-3.7c6.4-9.9 17.3-22.4 36.9-33.3l1.3 4.4c2.7 9.6 12.7 15.1 22.3 12.4s15.1-12.7 12.4-22.3l-2.3-8.1c3.8-1.1 7.7-2.1 11.9-3.1c11.6-2.7 22.1-7.7 31.1-14.4l7.2 7.2c7 7 18.4 7 25.5 0s7-18.4 0-25.5l-9-9c7.6-13.9 11.3-30.1 10.1-46.6l15.2-4.3c9.6-2.7 15.1-12.7 12.4-22.3S370.6 64 361 66.7l-15.6 4.5c-7.7-13.9-19.1-25.1-32.6-32.6l4.5-15.6c2.7-9.6-2.8-19.5-12.4-22.3M112 272l-48-1.5c11.7.4 27.3.9 48 1.6zm16-80a32 32 0 1 1 0 64a32 32 0 1 1 0-64m64-48a16 16 0 1 1 32 0a16 16 0 1 1-32 0m130.7 345c-2.7 9.6 2.8 19.5 12.4 22.3s19.5-2.8 22.2-12.4l4.3-15.2c8.3.6 16.8 0 25.2-1.9c7.3-1.7 14.3-3.5 21.1-5.5l5.5 12.7c3.9 9.1 14.5 13.4 23.6 9.5s13.4-14.5 9.5-23.6l-4.4-10.4c16.6-6.7 31.7-14.4 45.4-22.8l5.5 8.3c5.5 8.3 16.7 10.5 25 5s10.5-16.7 5-25l-6-9c13.7-11 25.5-22.8 35.8-34.9l10 8c7.8 6.2 19.1 5 25.3-2.8s5-19.1-2.8-25.3l-11.2-9c1.8-2.8 3.5-5.7 5.1-8.5c6.6-11.4 11.8-22.6 16-33l8 3.2c9.2 3.7 19.7-.8 23.4-10s-.8-19.7-10-23.4l-10.4-4.2c.2-.8.4-1.5.5-2.3c2.2-9.3 3.4-17.3 4.1-23.4c.4-3.1.6-5.7.8-7.8c.1-1.1.1-2 .2-2.8l.1-1.1v-.8s0-.1-29.1-1h.1l29.1.9c.1-3.1 0-6.1-.2-9.1l15.2-4.3c9.6-2.7 15.1-12.7 12.4-22.3s-12.7-15.1-22.3-12.4l-15.6 4.5c-7.6-13.6-18.9-25-32.6-32.6l4.5-15.6c2.7-9.6-2.8-19.5-12.4-22.3s-19.5 2.8-22.3 12.4l-4.3 15.2c-1.2-.1-2.4-.2-3.6-.2c-15.6-.5-30.3 3.3-43 10.2l-9-9c-7-7-18.4-7-25.5 0s-7 18.4 0 25.5l7.2 7.2c-9.3 12.6-15.2 27.8-16.3 44.5l-7.1-3c-9.1-3.9-19.7.3-23.6 9.5s.3 19.7 9.5 23.6l8.6 3.7c-6.4 9.9-17.3 22.4-36.9 33.3l-1.3-4.4c-2.7-9.6-12.7-15.1-22.3-12.4s-15.1 12.7-12.4 22.3l2.3 8.1c-3.8 1.1-7.7 2.1-11.9 3.1c-11.6 2.7-22.1 7.7-31.1 14.4l-7.2-7.2c-7-7-18.4-7-25.5 0s-7 18.4 0 25.5l9 9c-7.6 13.9-11.3 30.1-10.1 46.6l-15.2 4.3c-9.6 2.7-15.1 12.7-12.4 22.2s12.7 15.1 22.3 12.4l15.6-4.5c7.7 13.9 19.1 25.1 32.6 32.6zM576 241.5c-11.7-.4-27.3-.9-48-1.6l48 1.5zM448 384a32 32 0 1 1-64 0a32 32 0 1 1 64 0"
        ></path>
      </svg>
    ),
    description: "",
  },
  {
    title: "HardwoodFloors",
    text: "Rejuvenates all types of wood floors with expert hardwood floor cleaning, restoration, and repair for homes and businesses.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="full"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={4}
        >
          <rect width={36} height={36} x={6} y={6} rx={3}></rect>
          <path
            strokeLinecap="round"
            d="M28 6L6 28m36-8L20 42M40 8L8 40m4-18l7 7m10-10l7 7"
          ></path>
        </g>
      </svg>
    ),
    description: "",
  },
];

export const moreService = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="currentColor" d="m19 3l-4 4l3 3l1-1l1 1l2-2l-3-3zM3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3l-1 1H5z"></path></svg>, title: "Pet Stain & Odor" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a1 1 0 0 0 .77-.37A1 1 0 0 0 8 19.8s-.27-1.38-.53-3s-.41-2.6-.47-3.37a9.64 9.64 0 0 0 2.4-4.14A15.8 15.8 0 0 0 10 5h4c0 1.91.4 5.88 3 8.43c-.12 2.1-1 6.33-1 6.37a1 1 0 0 0 .21.83A1 1 0 0 0 17 21h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></path></g></svg>, title: "Curtains / Blinds Cleaning" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 32 32"><path fill="currentColor" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z"></path><path fill="currentColor" d="M16 25.277V6h8v10.805a7 7 0 0 1-3.7 6.173Z"></path></svg>, title: "Stain Protection" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="currentColor" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"></path></svg>, title: "Move In & Out Cleaning" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 21.193c.685 1.051 1.571 1.051 2.273 0c2.257-3.452 4.407 2.483 6 .04c2.43-3.664 4.178 2.689 6-.04c2.376-3.635 3.857 2.385 5.727.391M3.572 17l-1.497-4.354c-.271-.789.228-1.646.958-1.646h17.825c3.094 0-.864 6-2.861 6M18 11l-2.799-3.499A4 4 0 0 0 12.078 6H8a2 2 0 0 0-2 2v3m4-5V3a1 1 0 0 0-1-1H8" color="currentColor"></path></svg>, title: "Boat / Yacht Cleaning" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.5 22l-1.117-5.024a37 37 0 0 1-.883-8.049a.93.93 0 0 0-.928-.927H7.428a.927.927 0 0 0-.927.927a37 37 0 0 1-.883 8.049L4.5 22M3 22h14m0-20h-4a3 3 0 0 0-3 3m10-3h1m-8 3h6" color="currentColor"></path></svg>, title: "Chimney Cleaning & Repair" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M18 20.5V20m0 .5a3 3 0 0 1-3 3h-2.5v-.25l.22-.357a12 12 0 0 0 1.78-6.29V16.5H18m0 4a3 3 0 0 0 3 3h2.5v-.25l-.22-.357a12 12 0 0 1-1.78-6.29V16.5H18m0 0V0M3.5 13.5V11a2.5 2.5 0 0 1 5 0v2.5m-6 10v-1.03a20 20 0 0 0-1.904-8.515L.5 13.75v-.25h11v.25l-.096.205A20 20 0 0 0 9.5 22.47v1.03z"></path></svg>, title: "House Cleaning" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 512 512"><path fill="currentColor" d="M80 33c-12.62 0-21.38 6.47-28.26 18.09C44.86 62.7 41 79.33 41 96c0 16.7 3.86 33.3 10.74 44.9S67.38 159 80 159h39V33zm57 0v126h174V33zm192 0v126h39c12.6 0 21.4-6.5 28.3-18.1c6.8-11.6 10.7-28.2 10.7-44.9c0-16.67-3.9-33.3-10.7-44.91C389.4 39.47 380.6 33 368 33zM119 177v32H41v94h366v-94h-78v-32h-18v32H137v-32zm306 48v30h46v-30zm-337.54 4.2l17.04 5.6l-15.96 48l-17.08-5.6zm48.04 0l17 5.6l-16 48l-17-5.6zm48 0l17 5.6l-16 48l-17-5.6zM84.95 321L65 440.7c12.89-22.1 26.47-44 42.9-64c18-21.8 39.6-41.3 67.1-55.7zm123.15 5.1c-37.8 13.2-64.3 35.2-86.3 62c-22.2 27-39.57 59.1-58.07 90.9H144c5 0 10.7-2.4 17.6-9.4c6.8-6.8 14.3-17.8 21.9-32.7zM247 328v23h-26l-4 18h30v23h18v-64z"></path></svg>, title: "Pressure Cleaning" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h12a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m1 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m2 4c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-3.89 2.5H8c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H8c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21m4 0H12c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H12c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21M20 15h2v2h-2zm0-8h2v6h-2z"></path></svg>, title: "Dryer Vent Cleaning & Repair" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V9.625l-1.934 1.49l-.604-.792L12 3.019l9.539 7.304l-.605.787l-1.953-1.485v1.4q-.206-.054-.427-.068t-.438-.015q-2.945 0-5.03 2.057T10.962 18q0 .25.017.5t.071.5zm11.73 3.73h-3.384v-.884h1.848q-.823-.713-1.335-1.71q-.513-.995-.513-2.097q0-1.608.955-2.839t2.43-1.658v.916q-1.1.402-1.8 1.372t-.7 2.209q0 .917.445 1.753t1.17 1.447v-1.893h.885zm2.386-.195V21.6q1.125-.408 1.812-1.388t.688-2.173q0-.918-.446-1.754q-.445-.837-1.17-1.447v1.893h-.885v-3.385H22.5v.885h-1.848q.823.713 1.336 1.71q.512.995.512 2.097q0 1.608-.955 2.839t-2.43 1.658"></path></svg>   , title: "Gutter Cleaning & Repair" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22q-1.25 0-2.125-.875T1 19t.875-2.125T4 16t2.125.875T7 19t-.875 2.125T4 22m0-2q.425 0 .713-.288T5 19t-.288-.712T4 18t-.712.288T3 19t.288.713T4 20m4 2q.35-.45.563-.937T8.9 20H11v-7q0-.825-.587-1.412T9 11H4v3q-.525 0-1.037.1T2 14.4V9h3V5.6q0-1.925 1.338-3.262T9.6 1q1.4 0 2.55.763t1.7 2.037L20.675 20H23v2h-7v-2h2.5L12.025 4.6q-.3-.725-.962-1.162T9.6 3q-1.1 0-1.85.75T7 5.6V9h2q1.65 0 2.825 1.175T13 13v9zm-.5-6.5"></path></svg>, title: "Marble Floors Polishing" },
];

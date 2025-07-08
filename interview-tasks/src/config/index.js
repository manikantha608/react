export const fileExplorerSystemData = [
  {
    id: "1",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "components",
        type: "folder",
        children: [
          {
            id: "3",
            name: "Button.tsx",
            type: "folder",
            children: [{ id: "40", name: "Card.tsx", type: "file" }],
          },
          { id: "4", name: "Card.tsx", type: "file" },
          { id: "5", name: "Input.tsx", type: "file" },
        ],
      },
      {
        id: "6",
        name: "pages",
        type: "folder",
        children: [
          { id: "7", name: "index.tsx", type: "file" },
          { id: "8", name: "about.tsx", type: "file" },
          {
            id: "9",
            name: "blog",
            type: "folder",
            children: [
              { id: "10", name: "index.tsx", type: "file" },
              { id: "11", name: "[slug].tsx", type: "file" },
            ],
          },
        ],
      },
      { id: "12", name: "App.tsx", type: "file" },
      { id: "13", name: "main.tsx", type: "file" },
    ],
  },
  {
    id: "14",
    name: "public",
    type: "folder",
    children: [
      { id: "15", name: "favicon.ico", type: "file" },
      { id: "16", name: "robots.txt", type: "file" },
    ],
  },
  { id: "17", name: "package.json", type: "file" },
  { id: "18", name: "tsconfig.json", type: "file" },
  { id: "19", name: "new.json", type: "file" },
];
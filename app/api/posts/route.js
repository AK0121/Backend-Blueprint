import { NextRequest } from "next/server";

const postsData = [
  { id: 1, title: "Post One", content: "This is the first post." },
  { id: 2, title: "Post Two", content: "This is the second post." },
  { id: 3, title: "Post Three", content: "This is the third post." },
  { id: 4, title: "Post Four", content: "This is the fourth post." },
  { id: 5, title: "Post Five", content: "This is the fifth post." },
  { id: 6, title: "Post Six", content: "This is the sixth post." },
  { id: 7, title: "Post Seven", content: "This is the seventh post." },
  { id: 8, title: "Post Eight", content: "This is the eight post." },
  { id: 9, title: "Post Nine", content: "This is the ninth post." },
  { id: 10, title: "Post Ten", content: "This is the tenth post." },
];

export default async function GET() {
  return NextRequest.json(postsData);
}

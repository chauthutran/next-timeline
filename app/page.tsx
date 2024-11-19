'use client';

import Image from "next/image";
import HomePage from "./ui/HomePage";
import { EventProvider } from "./contexts/EventContext";

export default function Home() {
  return (
    <EventProvider>
      <div>
        <HomePage />
      </div>
    </EventProvider>
  );
}

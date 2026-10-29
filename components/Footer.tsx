"use client";

import Container from "@/components/Container";

export default function Footer() {
  return (
    <section className="bg-light-grey">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black-soft">
              Bite by Bite
            </h2>
          </div>
          <div>
            <h2 className="text-md font-medium tracking-tight text-black-soft">
              placeholder footer for privacy policy, terms of service (maybe?), contact info, not affiliated with purdue, etc.
            </h2>
          </div>
        </Container>
      </section>
  );
}
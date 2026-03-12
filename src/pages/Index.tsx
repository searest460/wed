import React, { useState, useCallback } from "react";
import { EnvelopeScene } from "@/components/wedding/EnvelopeScene";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { CountdownTimer } from "@/components/wedding/CountdownTimer";
import { CoupleSection } from "@/components/wedding/CoupleSection";
import { VenueSection } from "@/components/wedding/VenueSection";
import { ProgramTimeline } from "@/components/wedding/ProgramTimeline";
import { DressCode } from "@/components/wedding/DressCode";
import { GiftsSection } from "@/components/wedding/GiftsSection";
import { RSVPForm } from "@/components/wedding/RSVPForm";
import { WishesWall } from "@/components/wedding/WishesWall";
import { FAQSection } from "@/components/wedding/FAQSection";
import { ThankYouSection } from "@/components/wedding/ThankYouSection";
import { StickyNav } from "@/components/wedding/StickyNav";
import { WhatsAppButton } from "@/components/wedding/WhatsAppButton";

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const handleOpen = useCallback(() => setEnvelopeOpen(true), []);

  return (
    <div className="bg-ivory min-h-screen">
      {!envelopeOpen && <EnvelopeScene onOpen={handleOpen} />}
      {envelopeOpen && (
        <>
          <StickyNav />
          <WhatsAppButton />
          <InvitationCard />
          <CoupleSection />
          <CountdownTimer />
          <ProgramTimeline />
          <DressCode />
          <VenueSection />
          <GiftsSection />
          <RSVPForm />
          <WishesWall />
          <FAQSection />
          <ThankYouSection />
        </>
      )}
    </div>
  );
};

export default Index;

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

// Process Icons 
import requestIcon from "../assets/icons/quiz.svg"
import propertyIcon from "../assets/icons/roof.svg"
import receiveIcon from "../assets/icons/rate-review.svg"
import constructionIcon from "../assets/icons/wrench-hammer.svg"

export function Layout401() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-falcon-totem-pole md:mb-4">Process</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How it works
            </h1>
            <p className="md:text-md">
              Four steps from first message to finished work.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col justify-center bg-falcon-cream rounded-3xl p-6 shadow-large">
            <div className="mb-3 md:mb-4">
              <img
                src={requestIcon}
                className="size-12"
                alt="Request Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Request a quotation
            </h3>
            <p>Send us a message or call. Tell us what you need.</p>
            <div className="mt-5 md:mt-6">
              <Button
                className="font-semibold text-falcon-harvest"
                title="Start"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-falcon-cream rounded-3xl p-6 shadow-large">
            <div className="mb-3 md:mb-4">
              <img
                src={propertyIcon}
                className="size-12"
                alt="Roof Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Conduct an inspection
            </h3>
            <p>We come out, look at the job and take measurements.</p>
            <div className="mt-5 md:mt-6">
              <Button
                className="font-semibold text-falcon-harvest"
                title="Next"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Begin inspection
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-falcon-cream rounded-3xl roun p-6 shadow-large">
            <div className="mb-3 md:mb-4">
              <img
                src={receiveIcon}
                className="size-12"
                alt="Review Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Receive your quote
            </h3>
            <p>You get a clear recommendation and an honest price metrics.</p>
            <div className="mt-5 md:mt-6">
              <Button
                className="font-semibold text-falcon-harvest"
                title="Next"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Approve quote
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-falcon-cream rounded-3xl p-6 shadow-large">
            <div className="mb-3 md:mb-4">
              <img
                src={constructionIcon}
                className="size-12"
                alt="Wrench and Hammer Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Work is underway
            </h3>
            <p>We arrive, do the job and leave the site clean.</p>
            <div className="mt-5 md:mt-6">
              <Button
                className="font-semibold text-falcon-harvest"
                title="Finish"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Start the work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

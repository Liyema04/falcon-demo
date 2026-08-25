"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout401() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How it works
            </h1>
            <p className="md:text-md">
              Four steps from first message to finished work.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Request a quote
            </h3>
            <p>Send us a message or call. Tell us what you need.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Start"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Start
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Property or roof assessment
            </h3>
            <p>We come out, look at the job and take measurements.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Next"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Next
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Receive recommendation or quote
            </h3>
            <p>You get a clear recommendation and an honest price.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Next"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Next
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Work begins
            </h3>
            <p>We arrive, do the job and leave the site clean.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Finish"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

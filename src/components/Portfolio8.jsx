"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Projects</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Work that holds
          </h2>
          <p className="md:text-md">
            Real projects. Real roofs. Real proof of the trade.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <article className="border-none">
            <div className="aspect-[615/345] w-full overflow-hidden rounded-t-3xl">
              <a href="#" className="block size-full">
                <img
                  src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689058/roof-replace-clean_yxyxks.avif"
                  className="size-full object-cover"
                  alt="Centurion Roof Replacement"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6 rounded-b-3xl bg-falcon-cream">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Centurion roof replacement</a>
              </h3>
              <p>
                Full strip and replacement of a storm-damaged residential roof
                in Centurion.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Roofing
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Centurion
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Residential
                  </a>
                </li>
              </ul>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </article>
          <article className="border-none">
            <div className="aspect-[615/345] w-full overflow-hidden rounded-t-3xl"> 
              <a href="#" className="block size-full">
                <img
                  src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787698663/midstream-cleam_txjcqo.avif"
                  className="size-full object-cover"
                  alt="Worker fixing zinc panels"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6 rounded-b-3xl bg-falcon-cream">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Roof repair services</a>
              </h3>
              <p>Team member access roof to inspect and identify areas requiring repair.</p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Repair
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Midstream
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-md"
                  >
                    Recent work
                  </a>
                </li>
              </ul>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button className="button-falcon-secondary bg-falcon-ink-5 border-border-ink-5" title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

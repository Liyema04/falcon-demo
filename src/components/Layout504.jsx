"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout504() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-falcon-white">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why Falcon</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built on workmanship
            </h1>
            <p className="md:text-md">
              We do not hide behind slogans. We show up, assess the job honestly
              and do the work properly. That is our promise.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button className="button-falcon-secondary bg-falcon-ink-5 border-border-ink-5" title="Get a quote" variant="secondary">
                Get a quote
              </Button>
              <Button
                title="Our work"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Our work
                <hr/>
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Workmanship
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Reliability
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Experience
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
              <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none">
                <img
                  src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689054/roof-1-clean_n5euhk.avif"
                  className="size-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="aspect-square place-content-center rounded-b-3xl bg-falcon-cream sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none">
                <div className="p-6 md:p-8 lg:p-12">
                  <p className="mb-3 text-sm font-semibold md:mb-4 md:text-base">Workmanship</p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                    Every seam is sealed and every sheet is fixed right
                  </h2>
                  <p className="text-sm leading-relaxed md:text-base">
                    We treat each roof as if it were our own. No shortcuts, no
                    patch jobs that fail in the next storm.
                  </p>
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    <Button className="text-sm md:text-base button-falcon-secondary bg-falcon-ink-5 border-border-ink-5" title="Get a quote" variant="secondary">
                      Get a quote
                    </Button>
                    <Button
                      className="text-sm md:text-base"
                      title="Our work"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Our work
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
              <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none">
                <img
                  src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689061/solar-pannels-clean_oalxnk.avif"
                  className="size-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="aspect-square place-content-center rounded-b-3xl bg-falcon-cream sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none">
                <div className="p-6 md:p-8 lg:p-12">
                  <p className="mb-3 text-sm font-semibold md:mb-4 md:text-base">Reliability</p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                    We show up when promised and finish the job properly
                  </h2>
                  <p className="text-sm leading-relaxed md:text-base">
                    From the first inspection to the final check, we communicate clearly, work responsibly and follow through on every commitment.
                  </p>
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    <Button className="text-sm md:text-base button-falcon-secondary bg-falcon-ink-5 border-border-ink-5" title="Get a quote" variant="secondary">
                      Get a quote
                    </Button>
                    <Button
                      className="text-sm md:text-base"
                      title="Our work"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Our work
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
              <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none">
                <img
                  src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787690790/support-beams_hvkywj.avif"
                  className="size-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="aspect-square place-content-center rounded-b-3xl bg-falcon-cream sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none">
                <div className="p-6 md:p-8 lg:p-12">
                  <p className="mb-3 text-sm font-semibold md:mb-4 md:text-base">Experience</p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                    Knowing what to look for makes all the difference
                  </h2>
                  <p className="text-sm leading-relaxed md:text-base">
                    We understand how each part of a roofing system works together, helping us identify problems and choose the right solution.
                  </p>
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    <Button className="text-sm md:text-base button-falcon-secondary bg-falcon-ink-5 border-border-ink-5" title="Get a quote" variant="secondary">
                      Get a quote
                    </Button>
                    <Button
                      className="text-sm md:text-base"
                      title="Our work"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Our work
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

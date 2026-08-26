"use client";

import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-8 md:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-falcon-totem-pole md:mb-4">Quote</p>
            <h2 className="mb-5 text-5xl font-bold leading-[0.98] tracking-[-0.02em] md:mb-6 md:text-7xl lg:text-8xl">
              Request a quote
            </h2>
            <p className="max-w-md text-falcon-ink/70 md:text-md">
              Provide details about the service you require, and we’ll get back to you shortly.
            </p>
          </div>
          <div className="grid grid-cols-1 border-t border-falcon-ink/15">
            <div className="flex items-start gap-4 border-b border-falcon-ink/15 py-4">
              <BiEnvelope className="mt-0.5 size-5 flex-none text-falcon-totem-pole" />
              <p className="text-sm font-medium text-falcon-ink md:text-base">enquiry@falconroofing.co.za</p>
            </div>
            <div className="flex items-start gap-4 border-b border-falcon-ink/15 py-4">
              <BiPhone className="mt-0.5 size-5 flex-none text-falcon-totem-pole" />
              <p className="text-sm font-medium text-falcon-ink md:text-base">073 124 4478</p>
            </div>
            <div className="flex items-start gap-4 py-4">
              <BiMap className="mt-0.5 size-5 flex-none text-falcon-totem-pole" />
              <p className="text-sm font-medium text-falcon-ink md:text-base">8244/1 Sebini St, Rua Vista, Pretoria, 0175</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2 text-sm font-semibold text-falcon-ink">
                Name
              </Label>
              <Input className="h-12 rounded-falcon-control border-falcon-ink/20 bg-falcon-white px-4 shadow-none transition-colors placeholder:text-falcon-ink/45 focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15" type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2 text-sm font-semibold text-falcon-ink">
                Phone number
              </Label>
              <Input className="h-12 rounded-falcon-control border-falcon-ink/20 bg-falcon-white px-4 shadow-none transition-colors placeholder:text-falcon-ink/45 focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15" type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 text-sm font-semibold text-falcon-ink">
                Email
              </Label>
              <Input className="h-12 rounded-falcon-control border-falcon-ink/20 bg-falcon-white px-4 shadow-none transition-colors placeholder:text-falcon-ink/45 focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15" type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2 text-sm font-semibold text-falcon-ink">
                City/Suburb
              </Label>
              <Input className="h-12 rounded-falcon-control border-falcon-ink/20 bg-falcon-white px-4 shadow-none transition-colors placeholder:text-falcon-ink/45 focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15" type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2 text-sm font-semibold text-falcon-ink">Required service</Label>
            <Select>
              <SelectTrigger className="h-12 rounded-falcon-control border-falcon-ink/20 bg-falcon-white px-4 shadow-none transition-colors focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent className="rounded-falcon-control border-falcon-ink/15 bg-falcon-white shadow-none">
                <SelectItem value="first-choice">Roof inspection</SelectItem>
                <SelectItem value="second-choice">Roof installation</SelectItem>
                <SelectItem value="third-choice">Roof repair</SelectItem>
                <SelectItem value="fourth-choice">Damage repair</SelectItem>
                <SelectItem value="fifth-choice">Ceilings</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 text-sm font-semibold text-falcon-ink md:mb-4">Preferred contact method</Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="whatsapp" id="#first_choice" />
                <Label htmlFor="#first_choice">WhatsApp</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="phone-call" id="#second_choice" />
                <Label htmlFor="#second_choice">Phone call</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="email" id="#third_choice" />
                <Label htmlFor="#third_choice">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="sms" id="#fourth_choice" />
                <Label htmlFor="#fourth_choice">SMS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="in-person" id="#fifth_choice" />
                <Label htmlFor="#fifth_choice">In person</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-falcon-ink/30 text-falcon-totem-pole focus-visible:ring-falcon-totem-pole/20" value="other" id="#other" />
                <Label htmlFor="#other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 text-sm font-semibold text-falcon-ink">
              Project description
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about the job"
              className="min-h-[11.25rem] overflow-auto rounded-falcon-control border-falcon-ink/20 bg-falcon-white p-4 shadow-none transition-colors placeholder:text-falcon-ink/45 focus-visible:border-falcon-totem-pole focus-visible:ring-2 focus-visible:ring-falcon-totem-pole/15"
            />
          </div>
          <div>
            <Button className="button-falcon-primary border border-falcon-ink-5 w-full justify-center" title="Get Quote">Get Quote</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

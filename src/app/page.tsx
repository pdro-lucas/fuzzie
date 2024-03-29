import { CheckIcon } from 'lucide-react'

import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { InfiniteMovingCards } from '@/components/global/infinity-moving-cards'
import { LampComponent } from '@/components/global/lamp'
import { Navbar } from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constants'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <section className="relative flex  h-screen w-full  flex-col items-center !overflow-visible rounded-md bg-neutral-950  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="mt-[-100px] flex flex-col md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <Button
                  size={'lg'}
                  className="group mb-8 flex w-full items-center justify-center gap-4 rounded-full border-t-2 border-[#4D4D4D] bg-[#1F1F1F] p-8 text-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-neutral-500 sm:w-fit md:mb-0"
                >
                  <span className="goup-hover:to-black bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text  font-sans text-transparent group-hover:bg-gradient-to-r group-hover:from-black md:text-center">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="bg-gradient-to-b from-white  to-neutral-600 bg-clip-text font-sans text-5xl font-bold text-transparent md:text-8xl">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[20rem]"
        items={clients}
        direction="right"
        speed="slow"
      />

      <section>
        <HeroParallax products={products} />
      </section>

      <section className="-mt-60 w-full">
        <LampComponent />
        <div className="-mt-72 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                <span>Hobby</span>
                <h2 className="text-6xl">$0</h2>
              </CardItem>

              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                <p>
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us as after this!
                </p>

                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>3 free automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>100 tasks per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Two-step Actions</span>
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-bold text-white dark:text-white"
                >
                  <span>Try now →</span>
                </CardItem>
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold  text-white dark:bg-white dark:text-black"
                >
                  <span>Get started Now</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-[#E2DBFF] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                <span>Pro Plan</span>
                <h2 className="text-6xl">$29</h2>
              </CardItem>

              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                <p>
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us as after this!
                </p>

                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>3 free automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>100 tasks per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Two-step Actions</span>
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-bold text-white dark:text-white"
                >
                  <span>Try now →</span>
                </CardItem>
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold  text-white dark:bg-white dark:text-black"
                >
                  <span>Get started Now</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                <span>Unlimited</span>
                <h2 className="text-6xl">$99</h2>
              </CardItem>

              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                <p>
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us as after this!
                </p>

                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>3 free automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>100 tasks per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Two-step Actions</span>
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-bold text-white dark:text-white"
                >
                  <span>Try now →</span>
                </CardItem>
                <CardItem
                  translateZ="20"
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold  text-white dark:bg-white dark:text-black"
                >
                  <span>Get started Now</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  )
}

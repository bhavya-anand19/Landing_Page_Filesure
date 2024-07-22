import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
      </div>


      <header className="mt-5 flex flex-col md:items-start items-center container bg-background md:pt-16 pb-11">
        <div className="mt-24 md:mt-16 md:ml-10 flex items-center flex-col w-full md:w-1/2 text-center md:text-left">
          <h1 className="md:text-4xl text-3xl font-extrabold">
            <span className="text-secondary">User-Centric Excellence</span>: Our App Development services Tackle Your Pain Points
          </h1>
          <h2 className="md:text-[18px] mt-6">
            Experience a Seamless Digital Journey with <span className="text-primary">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-secondary">Elevates Your App Experience</span> to Unparalleled Heights.
          </h2>
        </div>
        <div className="md:ml-10 mt-14 flex flex-col md:w-1/2 w-full">
          <ContactForm />
        </div>
      </header>

      <main class='mt-32'>
        {/* Logobar and "Full development cycle" section */}
        <section className="bg-white px-0 md:px-10 py-10 container">
          <div className="py-5 border-y-2 mb-14 overflow-hidden">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {Array(6).fill("").map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Image alt="logo" src="./logobar.png" className="mx-auto" width={150} height={150} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:block" />
              <CarouselNext className="hidden md:block" />
            </Carousel>
          </div>

          <div id="services" className="grid grid-col-1 md:grid-cols-2 gap-5 md:gap-10 container">
            <div>
              <h2 className="md:text-3xl text-2xl font-bold mb-4">Full development cycle</h2>
              <p className="text-lg font-bold">We use proven technologies</p>
            </div>

            <div className="col-start-1">
              <div className="mb-5 bg-slate-100 shadow-lg p-4 rounded-md">
                <h3 className="font-bold text-lg mb-3">Web</h3>
                <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / Django / Python</p>
              </div>
              <div className="mb-4 bg-slate-100 shadow-lg p-4 rounded-md">
                <h3 className="font-bold text-lg mb-3">Mobile</h3>
                <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
              </div>
            </div>

            <Separator className="block md:hidden" />

            <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col gap-5 text-lg mt-8 ml-28">
              {["iOS development", "Android development", "Web development", "UI/UX design", "Testing", "Launch", "IT consulting"].map((service, index) => (
                <Link key={index} href="#" className="hover:underline hover:font-semibold hover:scale-105 transition-transform duration-300 underline-offset-4 decoration-primary">
                  <h4>{service} <span className="text-primary">&gt;</span></h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32">

          <h2 className="text-3xl sm:mx-auto md:ml-32 md:w-1/3 sm:w-3/4 font-bold">Developed More than <span className="text-lime-600"> 100 </span> projects in <span className="text-lime-600">15</span> industries</h2>
          <div className="w-full">


            <div class="md:flex justify-evenly mt-20 leading-[3] text-xl font-semibold">
              <div>
                <ul class="space-y-2 p-5">
                  <li>Social Media</li>
                  <li>Fitness and Sport</li>
                  <li>Bank</li>
                  <li>Construction</li>
                  <li>Game projects</li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2 p-5">
                  <li>Education</li>
                  <li>Auto, Transport</li>
                  <li>Medicine, health</li>
                  <li>Restaurants, food delivery</li>
                  <li>Marketplaces</li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2 p-5">
                  <li>AR Technologies</li>
                  <li>TV Series</li>
                  <li>Startups</li>
                  <li>Religion</li>
                  <li>Online courses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Separator className="block mt-20" />
        {/* FAQ section */}
        <section id="faq" className="bg-background md:px-14 py-10 container">
          <div>
            <h2 className="mt-20 md:text-3xl text-3xl font-bold my-5">FAQ</h2>
            <Accordion type="single" collapsible className="flex gap-x-10 gap-y-5 md:gap-10 flex-wrap">
              {[
                { question: "What is the cost of a mobile application?", answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis autem neque sed, atque eaque excepturi omnis sint ducimus asperiores, molestias ab consectetur a earum quod soluta. Cupiditate doloremque dignissimos voluptas quidem laborum." },
                { question: "Do you provide a guarantee for the mobile application?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab, expedita accusantium est tenetur eos adipisci reiciendis praesentium iste, explicabo blanditiis totam vero provident animi nisi maxime sint aliquid amet quibusdam? Consectetur, deserunt harum iste odit illum distinctio quidem assumenda sint inventore, velit suscipit ipsum?" },
                { question: "How long will development take?", answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.\n\nAverage development time from start to finished application:\nMedium projects up to 3 months.\nLarge projects about 4-6 months.\nTo get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality." },
                { question: "I will not tell my idea, do you guarantee confidentiality?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, maiores repellat laborum, culpa corporis atque, nobis obcaecati esse numquam dicta harum officia fuga autem iste." }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="w-full md:w-[46%]">
                  <AccordionTrigger className="font-bold text-start">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

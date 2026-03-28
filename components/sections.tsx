"use client";

import { motion } from "framer-motion";

const demos = [
  {
    title: "AI Salesforce Copilot",
    problem: "Reps lose time navigating records and writing repetitive updates.",
    solution: "An AI assistant embedded in Salesforce that drafts replies, summarizes opportunities, and suggests next actions."
  },
  {
    title: "Integration Engine",
    problem: "Disconnected tools create delays, data drift, and missed handoffs.",
    solution: "Event-driven orchestration layer connecting CRM, support, billing, and marketing systems with reliable syncs."
  },
  {
    title: "Revenue Leak Detector",
    problem: "Leads and renewal signals slip through the cracks.",
    solution: "Automated monitoring that flags high-risk deals, stale pipelines, and broken journeys before revenue is lost."
  }
];

const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    description: "Deploy copilots, triage bots, and intelligent workflows that remove repetitive work across teams."
  },
  {
    icon: "🔗",
    title: "Salesforce Integrations",
    description: "Connect Salesforce with support, finance, and growth tools to keep your data and processes aligned."
  },
  {
    icon: "⚙️",
    title: "Workflow Optimization",
    description: "Refactor pipeline logic and internal operations so handoffs are faster and conversion rates improve."
  }
];

const useCases = [
  {
    title: "Reduce support workload",
    detail: "AI summarizes cases, drafts responses, and routes escalations to shrink average handling time."
  },
  {
    title: "Automate lead conversion",
    detail: "Score and route leads instantly, trigger follow-ups, and surface qualified opportunities in real time."
  },
  {
    title: "Real-time alerts",
    detail: "Get proactive Slack/email alerts for stalled deals, churn signals, and workflow failures before impact."
  }
];

const tech = ["Salesforce", "OpenAI", "n8n", "REST APIs"];

const fadeIn = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" }
};

export default function Sections() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-screen">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -z-10 bg-hero-gradient bg-[length:200%_200%]"
        />
        <div className="section-shell flex min-h-screen flex-col justify-center">
          <motion.p
            {...fadeIn}
            className="mb-6 inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/80"
          >
            Salesforce + AI Automation Engineer
          </motion.p>
          <motion.h1
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl"
          >
            Build revenue-ready systems that automate operations and scale customer growth.
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg"
          >
            I design AI-powered Salesforce ecosystems that eliminate manual busywork, accelerate response times, and unlock measurable revenue lift.
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#demos"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-500"
            >
              View Live Demos
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      <section id="demos" className="section-shell">
        <motion.h2 {...fadeIn} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Live Demos
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {demos.map((demo, i) => (
            <motion.article
              key={demo.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold">{demo.title}</h3>
              <p className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white/85">Problem:</span> {demo.problem}
              </p>
              <p className="mt-3 text-sm text-white/75">
                <span className="font-medium text-white/85">Solution:</span> {demo.solution}
              </p>
              <button className="mt-6 rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-white/40 hover:bg-white/10">
                Watch Demo
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <motion.h2 {...fadeIn} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Services
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <motion.h2 {...fadeIn} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Use Cases
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <motion.h2 {...fadeIn} className="mb-10 text-3xl font-semibold sm:text-4xl">
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tech.map((name) => (
            <motion.div
              key={name}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card flex h-24 items-center justify-center text-sm font-medium text-white/80"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell">
        <motion.div {...fadeIn} className="glass-card p-8 sm:p-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s automate your business</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            Share your current stack and biggest operational bottleneck. I&apos;ll propose a focused automation roadmap.
          </p>

          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Work email"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-accent focus:outline-none"
            />
            <textarea
              placeholder="What do you want to automate?"
              className="min-h-32 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-accent focus:outline-none sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Send Inquiry
            </button>
            <a
              href="https://wa.me/15551234567"
              className="rounded-xl border border-green-400/30 bg-green-500/10 px-6 py-3 text-center text-sm font-semibold text-green-300 transition hover:bg-green-500/20"
            >
              Chat on WhatsApp
            </a>
          </form>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-2 py-0 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Salesforce AI Automation Engineer</p>
          <p>Built for high-conversion client acquisition.</p>
        </div>
      </footer>
    </main>
  );
}

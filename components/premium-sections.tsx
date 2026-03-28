"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { value: "42%", label: "faster lead response and qualification" },
  { value: "3.2x", label: "more consistent execution across teams" },
  { value: "99.9%", label: "reliable automations your team can trust" }
];

const demos = [
  {
    title: "Pipeline Copilot",
    category: "Revenue follow-up",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    problem: "Leads cool down when reps lose time pulling context and writing the same updates by hand.",
    solution: "A guided workspace that prepares follow-ups, highlights deal risk, and keeps momentum moving without extra admin work.",
    summary: "See how one streamlined workflow helps revenue teams respond faster, follow through more consistently, and protect pipeline value."
  },
  {
    title: "Signal Orchestration",
    category: "Operational visibility",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0",
    problem: "Important customer and revenue signals get lost when your systems do not speak to each other clearly.",
    solution: "A clean orchestration layer that keeps teams aligned, handoffs timely, and data dependable.",
    summary: "This walkthrough shows how to reduce operational drag, improve handoff quality, and give leaders better visibility."
  },
  {
    title: "Renewal Intelligence",
    category: "Retention and expansion",
    videoUrl: "https://www.loom.com/embed/7f9f1b0f3e7d4e2fb7ef0b1a98765432",
    problem: "Renewal risk often becomes obvious too late, after warning signs were already scattered across the business.",
    solution: "A focused view that surfaces churn risk and growth opportunities early so teams can intervene with confidence.",
    summary: "Watch how support signals, account health, and commercial context come together to improve retention decisions."
  }
];

const services = [
  {
    index: "01",
    title: "Reduce operational drag",
    description: "Remove manual follow-up, fragmented handoffs, and repetitive work that slows down revenue and service teams."
  },
  {
    index: "02",
    title: "Improve team responsiveness",
    description: "Give sales, support, and customer teams cleaner workflows so they can respond faster and with better context."
  },
  {
    index: "03",
    title: "Create measurable business lift",
    description: "Build systems that shorten cycle times, protect revenue, and make performance easier to scale."
  }
];

const useCases = [
  {
    title: "Support deflection with intelligence",
    detail: "Reduce handling time and improve customer experience by giving teams clearer summaries and stronger first responses."
  },
  {
    title: "Lead-to-meeting automation",
    detail: "Help qualified demand move faster from inbound capture to booked conversations without manual chasing."
  },
  {
    title: "Executive-grade alerting",
    detail: "Surface stalled deals, churn signals, and workflow failures early enough for teams to act before revenue is affected."
  }
];

const testimonials = [
  {
    quote:
      "Within a few weeks, we had cleaner handoffs, faster responses, and much better visibility into where revenue was getting stuck.",
    name: "Maya Thompson",
    role: "VP Revenue Operations, B2B SaaS"
  },
  {
    quote:
      "The biggest difference was not just automation. It was clarity. Our team suddenly knew what to do next without digging through five systems.",
    name: "Daniel Brooks",
    role: "Head of Customer Success, Growth-stage startup"
  },
  {
    quote:
      "We cut admin work, improved response quality, and gave leadership a much better picture of pipeline and risk.",
    name: "Priya Mehta",
    role: "COO, Services-led tech company"
  }
];

const tech = ["Salesforce", "OpenAI", "n8n", "HubSpot", "Slack", "Stripe"];

const aiActions = [
  "Summarizing the latest support case activity",
  "Detecting urgency from customer sentiment and contract tier",
  "Drafting a reply with escalation context and next steps"
];

const aiSignals = [
  { label: "Response confidence", value: "96%" },
  { label: "Time saved", value: "14 min" },
  { label: "Urgency score", value: "High" }
];

const sectionReveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
};

type Demo = (typeof demos)[number];

function VideoModal({
  demo,
  shouldReduceMotion,
  onClose
}: {
  demo: Demo;
  shouldReduceMotion: boolean | null;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/72 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="card-noise glass-card relative w-full max-w-4xl overflow-hidden"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">{demo.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                {demo.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/70 transition hover:border-white/20 hover:text-white"
              aria-label="Close demo modal"
            >
              &times;
            </button>
          </div>

          <div className="px-4 pb-4 sm:px-5">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950">
              <div className="aspect-video max-h-[70vh] w-full">
                <iframe
                  src={demo.videoUrl}
                  title={`${demo.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="grid gap-4 pt-6 sm:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">Demo overview</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">{demo.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-sm font-medium text-white/84">What it solves</p>
                <p className="mt-3 text-sm leading-7 text-white/58">{demo.problem}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PremiumSections() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);
  const gridY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -80]);

  useEffect(() => {
    if (!activeDemo) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDemo]);

  useEffect(() => {
    if (!activeDemo) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeDemo]);

  const handleFormChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value
    }));

    if (formStatus.type !== "idle") {
      setFormStatus({
        type: "idle",
        message: ""
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({
      type: "idle",
      message: ""
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: result.error ?? "Something went wrong. Please try again."
        });
        return;
      }

      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setFormStatus({
        type: "success",
        message: result.message ?? "Thanks, your message has been received."
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Unable to submit the form right now. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.16em] text-white/88">
            AI Revenue Systems
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/62 md:flex">
            <a href="#demos" className="transition hover:text-white">
              Demos
            </a>
            <a href="#results" className="transition hover:text-white">
              Results
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Testimonials
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <a href="#book-call" className="glow-button">
            <span>Book a Call</span>
          </a>
        </div>
      </header>

      <section className="relative isolate min-h-screen">
        <motion.div
          style={{ y: orbY }}
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem]"
        >
          <div className="absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-sky-400/18 blur-3xl" />
          <div className="absolute right-[6%] top-24 h-80 w-80 rounded-full bg-blue-500/18 blur-3xl" />
          <div className="absolute left-[28%] top-56 h-64 w-64 rounded-full bg-cyan-300/12 blur-3xl" />
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        >
          <div className="absolute inset-x-0 top-0 h-[32rem] bg-hero-gradient" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </motion.div>

        <div className="section-shell flex min-h-screen flex-col justify-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-end gap-16 lg:grid-cols-[minmax(0,1.1fr)_24rem]"
          >
            <div>
              <div className="eyebrow">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                Revenue systems for modern teams
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[5.75rem]">
                Fix the operational bottlenecks that slow down <span className="gradient-text">revenue, service, and growth.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                I help growing companies reduce manual work, improve response speed, and create cleaner execution across sales and support operations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  href="#demos"
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                  className="glow-button"
                >
                  <span>See How It Works</span>
                </motion.a>
                <motion.a
                  href="#book-call"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="ghost-button"
                >
                  Book a Discovery Call
                </motion.a>
              </div>

              <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.55 }}
                    className="card-noise glass-card px-5 py-5"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/56">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
                  className="card-noise glass-card relative overflow-hidden p-6 sm:p-7"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/42">
                <span>Automation command center</span>
                <span>Live</span>
              </div>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">Pipeline health</p>
                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-semibold tracking-[-0.05em]">87%</p>
                    <p className="text-sm text-emerald-300">+12.4%</p>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/42">SLA recovery</p>
                    <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">4.6 hrs</p>
                    <p className="mt-2 text-sm text-white/56">Average time to resolve blocked workflows.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/42">AI suggested actions</p>
                    <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">1,248</p>
                    <p className="mt-2 text-sm text-white/56">Qualified prompts shipped into daily ops this month.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/82">Workflow heartbeat</p>
                    <p className="text-xs text-white/42">Last 24 hours</p>
                  </div>
                  <div className="mt-5 flex items-end gap-2">
                    {[40, 62, 48, 78, 56, 84, 72, 90].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ height: 12, opacity: 0 }}
                        whileInView={{ height, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 * index, duration: 0.5 }}
                        className="flex-1 rounded-full bg-gradient-to-t from-blue-500/55 to-cyan-300/85"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="demos" className="section-shell">
        <motion.div {...sectionReveal} className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected builds</p>
            <h2 className="section-heading mt-5 max-w-3xl">
              See the kinds of systems that help teams move faster and operate with less friction.
            </h2>
          </div>
          <p className="section-copy">
            These examples are designed around business outcomes: faster follow-up, cleaner execution, better visibility, and less wasted effort.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.title}
              type="button"
              {...sectionReveal}
              transition={{ ...sectionReveal.transition, delay: index * 0.08 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
              onClick={() => setActiveDemo(demo)}
              className="card-noise glass-card group relative overflow-hidden p-7 text-left"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">{demo.category}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{demo.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/54">
                <span className="font-medium text-white/84">Problem:</span> {demo.problem}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                <span className="font-medium text-white/84">Solution:</span> {demo.solution}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-white/46">Interactive walkthrough</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/62 transition duration-300 group-hover:border-sky-300/30 group-hover:text-white">
                  Watch demo
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section id="results" className="section-shell pt-8">
        <motion.div
          {...sectionReveal}
          className="card-noise glass-card flex flex-col gap-6 overflow-hidden p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="eyebrow">What Clients Want</p>
            <h2 className="section-heading mt-5 max-w-3xl">
              Faster execution, fewer handoff issues, and systems leadership can actually trust.
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="section-copy">
              If your team is dealing with slow follow-up, messy CRM usage, inconsistent support processes, or scattered customer signals, the goal is simple: remove drag and improve outcomes.
            </p>
            <div className="mt-6">
              <a href="#book-call" className="glow-button">
                <span>Talk Through Your Bottlenecks</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div {...sectionReveal}>
            <p className="eyebrow">AI in Action</p>
            <h2 className="section-heading mt-5 max-w-3xl">
              Show your team what faster, better execution looks like with <span className="animated-gradient-text">AI-guided decisions</span>.
            </h2>
            <p className="section-copy mt-6">
              This kind of system helps teams answer customers faster, escalate more intelligently, and reduce the time lost to manual coordination.
            </p>

            <div className="mt-8 space-y-4">
              {aiActions.map((item, index) => (
                <motion.div
                  key={item}
                  {...sectionReveal}
                  transition={{ ...sectionReveal.transition, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="ai-panel glass-card flex items-center gap-4 px-5 py-4"
                >
                  <span className="signal-dot shrink-0" />
                  <p className="text-sm leading-7 text-white/74">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...sectionReveal}
            className="ai-panel card-noise glass-card relative overflow-hidden p-5 sm:p-6"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(84,153,255,0.16),rgba(27,36,58,0),rgba(103,232,249,0.14))] bg-[length:200%_200%]"
            />
            <div className="grid-fade pointer-events-none absolute inset-0 opacity-60" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/72">Realtime assistant</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Case Reply Generator</h3>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live simulation
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="rounded-[24px] border border-white/10 bg-slate-950/55 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/82">Incoming support case</p>
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-200">
                      Escalating
                    </span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-white/60">
                    <p>
                      <span className="text-white/86">Customer:</span> “Our sales reps are seeing duplicate records after the latest sync, and support is already getting complaints.”
                    </p>
                    <p>
                      <span className="text-white/86">Account tier:</span> Enterprise Annual
                    </p>
                    <p>
                      <span className="text-white/86">Recent signals:</span> Expansion conversation scheduled next week, 2 unresolved sync errors in the last 6 hours.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="rounded-[24px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(15,26,48,0.92),rgba(7,14,26,0.94))] p-4 shadow-[0_0_0_1px_rgba(115,207,255,0.06),0_18px_50px_rgba(20,90,140,0.18)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="signal-dot" />
                    <p className="text-sm font-medium text-white/84">AI response draft</p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-sm leading-7 text-white/72">
                    <p>
                      Hi team, we’ve identified that the duplicate records are tied to the most recent sync rule update. We’ve paused the affected automation, isolated the impacted accounts, and are validating a fix now.
                    </p>
                    <p className="mt-3">
                      We’ll send a confirmed recovery timeline within 30 minutes. Because this touches an upcoming expansion review, I’m also escalating the account context to your CSM so outreach stays proactive.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Empathetic tone", "Escalation included", "CSM notified"].map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {aiSignals.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.07, duration: 0.45 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/42">{signal.label}</p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">{signal.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div {...sectionReveal}>
            <p className="eyebrow">Core offerings</p>
            <h2 className="section-heading mt-5">
              Advisory-led systems designed to improve execution, not add complexity.
            </h2>
            <p className="section-copy mt-6">
              The goal is to simplify how your team works day to day, improve response quality, and create a stronger operating rhythm across functions.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...sectionReveal}
                transition={{ ...sectionReveal.transition, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { x: 6 }}
                className="card-noise glass-card group flex gap-5 p-6 sm:p-7"
              >
                <div className="text-sm font-semibold tracking-[0.16em] text-white/35">{service.index}</div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white transition duration-300 group-hover:text-cyan-100">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/62">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-shell">
        <motion.div {...sectionReveal} className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Client Perspective</p>
            <h2 className="section-heading mt-5 max-w-3xl">
              Trusted for making complex operations feel clearer, faster, and easier to scale.
            </h2>
          </div>
          <p className="section-copy">
            Placeholder testimonials below, styled to reflect the kind of outcomes clients typically care about most.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              {...sectionReveal}
              transition={{ ...sectionReveal.transition, delay: index * 0.08 }}
              className="card-noise glass-card p-7"
            >
              <p className="text-base leading-8 text-white/78">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-8">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/48">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <motion.div {...sectionReveal} className="mb-14">
          <p className="eyebrow">Use cases</p>
          <h2 className="section-heading mt-5 max-w-3xl">
            Common problems this kind of work helps solve.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              {...sectionReveal}
              transition={{ ...sectionReveal.transition, delay: index * 0.08 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="card-noise glass-card p-7"
            >
              <div className="h-10 w-10 rounded-2xl border border-white/12 bg-white/[0.06]" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <motion.div
          {...sectionReveal}
          className="card-noise glass-card overflow-hidden px-6 py-8 sm:px-8 lg:px-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Ecosystem</p>
              <h2 className="section-heading mt-5">Built to work with the tools your team already relies on.</h2>
            </div>
            <p className="section-copy">
              The priority is not more software. It is making your current systems work together more effectively so your team can execute with less friction.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {tech.map((name, index) => (
              <motion.div
                key={name}
                {...sectionReveal}
                transition={{ ...sectionReveal.transition, delay: index * 0.05 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5 text-center text-sm font-medium text-white/76"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="book-call" className="section-shell pt-8">
        <motion.div
          {...sectionReveal}
          className="card-noise glass-card mb-8 overflow-hidden p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Calendly Placeholder</p>
              <h2 className="section-heading mt-5">
                Add your Calendly here so interested clients can book instantly.
              </h2>
              <p className="section-copy mt-6">
                Replace this placeholder with your Calendly embed or scheduling link to capture intent while interest is highest.
              </p>
              <div className="mt-6">
                <a href="https://calendly.com/your-link" className="glow-button">
                  <span>Open Calendly</span>
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center text-white/50">
              <p className="text-sm uppercase tracking-[0.24em]">Calendly Embed Area</p>
              <p className="mt-4 text-sm leading-7">
                Paste your Calendly inline widget or booking script here.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section-shell pt-0">
        <motion.div
          {...sectionReveal}
          className="card-noise glass-card relative overflow-hidden p-8 sm:p-10 lg:p-12"
        >
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="absolute left-10 top-0 h-px w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Start a project</p>
              <h2 className="section-heading mt-5">
                If your team is losing time to messy processes, let&apos;s fix the bottlenecks.
              </h2>
              <p className="section-copy mt-6">
                Share what is slowing the business down, where teams are getting stuck, and what outcomes you want to improve. I&apos;ll help you map the next move.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(event) => handleFormChange("name", event.target.value)}
                className="input-shell"
              />
              <input
                type="email"
                placeholder="Work email"
                value={formData.email}
                onChange={(event) => handleFormChange("email", event.target.value)}
                className="input-shell"
              />
              <textarea
                placeholder="What is slowing your team down right now?"
                value={formData.message}
                onChange={(event) => handleFormChange("message", event.target.value)}
                className="input-shell min-h-36 resize-none sm:col-span-2"
              />
              <motion.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                disabled={isSubmitting}
                className="glow-button"
              >
                <span>{isSubmitting ? "Sending..." : "Request a Consultation"}</span>
              </motion.button>
              <motion.a
                href="#book-call"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                className="ghost-button"
              >
                Book Through Calendly
              </motion.a>
              {formStatus.type !== "idle" ? (
                <p
                  className={`text-sm sm:col-span-2 ${
                    formStatus.type === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {formStatus.message}
                </p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-3 py-0 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Salesforce AI Automation Engineer</p>
          <p>Designed for premium conversion and operational clarity.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeDemo ? (
          <VideoModal demo={activeDemo} shouldReduceMotion={shouldReduceMotion} onClose={() => setActiveDemo(null)} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

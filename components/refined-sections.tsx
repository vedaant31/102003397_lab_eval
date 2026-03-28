"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const demos = [
  {
    kicker: "Demo 01",
    title: "Pipeline Copilot",
    tag: "Sales productivity",
    metric: "42% faster follow-through",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    summary:
      "A focused AI layer that organizes pipeline context, recommends next steps, and reduces repetitive CRM work.",
    detail:
      "This walkthrough shows how account history, recent activity, and risk signals come together in a clean interface built for action."
  },
  {
    kicker: "Demo 02",
    title: "Signal Orchestration",
    tag: "Cross-system automation",
    metric: "99.9% sync reliability",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0",
    summary:
      "A structured orchestration layer connecting Salesforce, support, billing, and internal workflows with clarity.",
    detail:
      "The experience focuses on system flow, approvals, escalations, and how context stays intact across every handoff."
  },
  {
    kicker: "Demo 03",
    title: "Renewal Intelligence",
    tag: "Expansion and retention",
    metric: "14 min saved per case",
    videoUrl: "https://www.loom.com/embed/7f9f1b0f3e7d4e2fb7ef0b1a98765432",
    summary:
      "A renewal command layer that surfaces churn risk, opportunity timing, and account health in a more commercial way.",
    detail:
      "This demo combines customer signals, support context, and contract timing to help teams act earlier and with more confidence."
  }
];

const approach = [
  {
    index: "01",
    title: "Designed for operators",
    text: "Interfaces are kept simple, calm, and directional so teams can act quickly without hunting for context."
  },
  {
    index: "02",
    title: "Built around workflow timing",
    text: "Automation is shaped around the moments where speed, trust, and visibility matter most."
  },
  {
    index: "03",
    title: "AI that feels integrated",
    text: "Generated outputs should read like a natural part of the product, not an extra layer pasted on top."
  }
];

const capabilities = [
  "Salesforce architecture and automation",
  "AI summaries and response generation",
  "Revenue operations workflow design",
  "Escalation logic and support systems"
];

const heroSignals = [
  ["Response quality", "consistent"],
  ["Support load", "reduced"],
  ["Context delivery", "instant"],
  ["Revenue visibility", "improved"]
];

const terminalFrames = [
  "Reading account health, SLA history, and contract tier...",
  "Detected rising frustration signal and duplicate-record pattern.",
  "Drafting a reply with mitigation steps and CSM escalation context."
];

type Demo = (typeof demos)[number];

function ActionButton({
  href,
  children,
  accent = false
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`magnetic-button ${accent ? "magnetic-button--accent" : ""}`}
    >
      {children}
    </motion.a>
  );
}

function RevealHeadline() {
  const lines = [
    "Premium automation",
    "systems for sales,",
    "support, and growth."
  ];

  return (
    <div className="max-w-[11ch]">
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "108%", filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
            className={`editorial inline-block text-[3.3rem] leading-[0.9] tracking-[-0.06em] text-[#fff3e8] sm:text-[4.8rem] lg:text-[6.8rem] ${
              index === 2 ? "signal-text" : ""
            }`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

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
      transition={{ duration: 0.24 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090706]/85 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98, filter: "blur(8px)" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98, filter: "blur(8px)" }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="surface grain-panel w-full max-w-4xl overflow-hidden"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="accent-line p-4 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="eyebrow">{demo.tag}</p>
                <h3 className="editorial mt-5 text-4xl leading-none tracking-[-0.05em] text-[#fff4e9] sm:text-5xl">
                  {demo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4b3422] bg-[#19120f] text-xl text-[#e8c49d] transition hover:border-[#85552c] hover:text-[#ffdcb1]"
                aria-label="Close demo modal"
              >
                &times;
              </button>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#433025] bg-[#0d0a09]">
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

            <div className="mt-5 grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Demo overview</p>
                <p className="mt-3 text-sm leading-7 text-[#d7c4b4]">{demo.detail}</p>
              </div>
              <div className="surface-muted p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Signature outcome</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#fff0e2]">{demo.metric}</p>
                <p className="mt-3 text-sm leading-7 text-[#cbb7a7]">{demo.summary}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function AIConsole() {
  const [step, setStep] = useState(0);
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const current = terminalFrames[step];
    let charIndex = 0;
    setVisibleText("");

    const typer = window.setInterval(() => {
      charIndex += 1;
      setVisibleText(current.slice(0, charIndex));

      if (charIndex >= current.length) {
        window.clearInterval(typer);
        window.setTimeout(() => setStep((value) => (value + 1) % terminalFrames.length), 1300);
      }
    }, 28);

    return () => window.clearInterval(typer);
  }, [step]);

  return (
    <div className="surface grain-panel relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,187,105,0.55),transparent)]" />
      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="border-b border-[#32231b] p-5 lg:border-b-0 lg:border-r">
          <div className="label-chip">Input stream</div>
          <div className="mt-6 space-y-4">
            <div className="surface-muted p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Case</p>
              <p className="mt-3 text-sm leading-7 text-[#dcc9b8]">
                Duplicate records surfaced after the latest sync update. Support queue volume is rising and the customer has a renewal review next week.
              </p>
            </div>
            <div className="surface-muted p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Signals</p>
              <ul className="mt-3 space-y-2 text-sm text-[#ccb7a6]">
                <li>Enterprise contract tier</li>
                <li>Frustration trend increasing</li>
                <li>Expansion motion still active</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#120d0b] p-5">
          <div className="flex items-center justify-between">
            <div className="label-chip">AI in Action</div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8e7257]">Live simulation</span>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#423024] bg-[#0c0908] p-4">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#f0b569]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffb45e] shadow-[0_0_18px_rgba(255,180,94,0.28)]" />
              Reasoning engine
            </div>
            <p className="terminal-caret mt-5 min-h-[5rem] text-sm leading-7 text-[#f5d4b0]">{visibleText}</p>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[#423024] bg-[#120d0b] p-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Generated reply</p>
            <p className="mt-4 text-sm leading-7 text-[#ead4bf]">
              We have isolated the sync behavior that created duplicate records, paused the affected automation, and escalated account context to the owning CSM so communication stays proactive while the fix is verified.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Escalation included", "Empathetic tone", "Renewal aware"].map((pill) => (
                <span key={pill} className="label-chip">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RefinedSections() {
  const shouldReduceMotion = useReducedMotion();
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], shouldReduceMotion ? [0, 0] : [0, -60]);

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
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeDemo]);

  return (
    <main className="page-shell">
      <section className="stage relative pt-8 sm:pt-10 lg:pt-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2f221a] bg-[#120f0d] px-5 pb-10 pt-6 sm:px-8 lg:px-10 lg:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="eyebrow">Automation engineered like a product</div>
            <div className="flex flex-wrap gap-3">
              <ActionButton href="#demos" accent>
                View demos
              </ActionButton>
              <ActionButton href="#contact">Start a conversation</ActionButton>
            </div>
          </div>

          <motion.div style={{ y: heroY }} className="relative mt-12 pb-6 pt-4 sm:pb-10 lg:pb-14">
            <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="pt-2 lg:pt-10">
                <RevealHeadline />
                <motion.p
                  initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.55 }}
                  className="body-copy mt-8 max-w-xl text-base sm:text-lg"
                >
                  I design AI and Salesforce systems that help teams respond faster, reduce manual work, and create a more polished customer experience.
                </motion.p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {heroSignals.map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.75 + index * 0.08 }}
                      className="surface-muted p-4"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#926f4f]">{label}</p>
                      <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[#fff2e3]">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="surface grain-panel p-5 sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="label-chip">Live operating layer</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#8c6b4c]">Premium workflow UI</span>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="surface-muted p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#926f4f]">Account snapshot</p>
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-3xl font-semibold tracking-[-0.05em] text-[#fff1e0]">Northstar Health</p>
                        <p className="mt-2 text-sm text-[#cbb5a1]">Enterprise customer with active expansion opportunity.</p>
                      </div>
                      <div className="label-chip">Priority review</div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="surface-muted p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#926f4f]">Recommended action</p>
                      <p className="mt-4 text-lg font-semibold tracking-[-0.04em] text-[#fff0df]">
                        Send a recovery update with escalation context.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#cab3a0]">
                        The response is drafted with issue summary, mitigation status, and next checkpoint already attached.
                      </p>
                    </div>

                    <div className="surface-muted p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#926f4f]">Operational impact</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {[
                          ["Response prep", "6 min"],
                          ["Risk status", "Visible"],
                          ["Context sync", "Live"],
                          ["Escalation", "Ready"]
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-[1rem] border border-[#3b2a20] bg-[#18120f] p-3">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8e6e50]">{label}</p>
                            <p className="mt-2 text-lg font-semibold text-[#ffe2bc]">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stage relative mt-16 sm:mt-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface p-6 sm:p-8">
            <p className="eyebrow">Approach</p>
            <p className="editorial mt-6 text-4xl leading-none tracking-[-0.05em] text-[#fff1e5] sm:text-5xl">
              Clean systems.
              <br />
              Clear decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {approach.map((step, index) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="surface p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#b99161]">{step.index}</p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#fff2e4]">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#ceb9a8]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="stage relative mt-24 pb-10 sm:mt-28">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Demo sequence</p>
            <h2 className="editorial mt-5 max-w-3xl text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff4e8] sm:text-6xl">
              Explore the work through product-led demos.
            </h2>
          </div>
          <p className="body-copy max-w-md">
            The demos are still presented as a guided sequence, but with a cleaner frame and more disciplined spacing across screen sizes.
          </p>
        </div>

        <div className="story-rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.title}
              type="button"
              onClick={() => setActiveDemo(demo)}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              className="demo-snap surface grain-panel min-h-[72svh] w-[90vw] shrink-0 p-6 text-left sm:w-[82vw] sm:p-8 lg:w-[68vw] lg:p-10"
            >
              <div className="grid h-full gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="eyebrow">{demo.kicker}</p>
                    <h3 className="editorial mt-8 text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff4e8] sm:text-6xl">
                      {demo.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-base leading-8 text-[#dbc6b4]">{demo.summary}</p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="label-chip">{demo.tag}</div>
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-[#ffcf93]">{demo.metric}</p>
                  </div>
                </div>

                <div className="grid gap-4 self-stretch lg:grid-rows-[1fr_auto]">
                  <div className="surface-muted relative min-h-[18rem] overflow-hidden p-5 sm:min-h-[22rem]">
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="label-chip">Interactive walkthrough</span>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-[#8d7053]">Open demo</span>
                      </div>
                      <div className="mx-auto w-full max-w-xl">
                        <div className="rounded-[1.6rem] border border-[#4f3727] bg-[#100c0a] p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Preview</span>
                            <span className="text-sm text-[#ffca86]">01</span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-3 w-2/3 rounded-full bg-[#33251c]" />
                            <div className="h-3 w-full rounded-full bg-[#2a1e17]" />
                            <div className="h-3 w-4/5 rounded-full bg-[#3f2a1c]" />
                            <div className="mt-6 grid grid-cols-3 gap-3">
                              <div className="h-24 rounded-[1.2rem] border border-[#412f24] bg-[#17110e]" />
                              <div className="h-24 rounded-[1.2rem] border border-[#412f24] bg-[#1b1411]" />
                              <div className="h-24 rounded-[1.2rem] border border-[#412f24] bg-[#120d0b]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-[#ccb6a4]">{demo.detail}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="stage relative mt-20 sm:mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="pt-6">
            <p className="eyebrow">AI in Action</p>
            <h2 className="editorial mt-6 text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff2e4] sm:text-6xl">
              A calm, live-feeling AI layer built for real workflows.
            </h2>
            <p className="body-copy mt-6 max-w-md">
              This section keeps the interaction alive, but presents it in a more refined way so the concept is easy to understand at first glance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Case replies", "Summaries", "Escalation logic", "Context memory"].map((item) => (
                <span key={item} className="label-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <AIConsole />
        </div>
      </section>

      <section className="stage relative mt-24 pb-24 sm:mt-28 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Capabilities</p>
            <div className="mt-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="editorial text-5xl leading-[0.94] tracking-[-0.05em] text-[#fff4e8] sm:text-6xl">
                  Built for teams that want sharper systems, not louder software.
                </h2>
              </div>
              <div className="space-y-4">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    whileHover={shouldReduceMotion ? undefined : { x: 6 }}
                    className="surface-muted p-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.03em] text-[#ffe6c5]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div id="contact" className="surface flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="editorial mt-6 text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff5ea]">
                Let&apos;s build something cleaner and more effective.
              </h2>
              <p className="body-copy mt-6">
                Share the workflow that feels manual, cluttered, or hard to scale. I&apos;ll help shape it into a more elegant operating system.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="surface-muted p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Email</p>
                <p className="mt-3 text-lg text-[#fff0df]">hello@automationstudio.dev</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionButton href="mailto:hello@automationstudio.dev" accent>
                  Email me
                </ActionButton>
                <ActionButton href="https://wa.me/15551234567">WhatsApp</ActionButton>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-[#30221a] pt-6 text-sm text-[#8f7762] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Salesforce AI Automation Engineer</p>
          <p>Refined for clarity, balance, and stronger visual control.</p>
        </footer>
      </section>

      <AnimatePresence>
        {activeDemo ? (
          <VideoModal demo={activeDemo} shouldReduceMotion={shouldReduceMotion} onClose={() => setActiveDemo(null)} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

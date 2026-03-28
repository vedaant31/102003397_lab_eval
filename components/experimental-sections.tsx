"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useState } from "react";

const demos = [
  {
    kicker: "Narrative demo 01",
    title: "Pipeline Copilot",
    tag: "Sales productivity",
    metric: "42% faster follow-through",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    summary:
      "A guided selling layer that translates account noise into next actions, reply drafts, and sharper opportunity movement.",
    detail:
      "The demo shows how AI condenses CRM history, recent calls, and pipeline risk into a single operating surface for revenue teams."
  },
  {
    kicker: "Narrative demo 02",
    title: "Signal Orchestration",
    tag: "Cross-system choreography",
    metric: "99.9% sync reliability",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0",
    summary:
      "An event-led layer connecting support, billing, product and CRM signals without forcing operators into another dashboard.",
    detail:
      "This walkthrough focuses on orchestration design: triggers, approvals, escalation paths, and how critical context survives every handoff."
  },
  {
    kicker: "Narrative demo 03",
    title: "Renewal Intelligence",
    tag: "Expansion and retention",
    metric: "14 min saved per case",
    videoUrl: "https://www.loom.com/embed/7f9f1b0f3e7d4e2fb7ef0b1a98765432",
    summary:
      "A renewal command layer that surfaces churn signals, opportunity moments, and customer-health drift before teams lose timing.",
    detail:
      "The experience combines support sentiment, contract timing, and usage signals to generate a more commercially aware account view."
  }
];

const orbitNotes = [
  { title: "Case drift", value: "detected", position: "left-[8%] top-[18%] md:left-[12%] md:top-[20%]" },
  { title: "Reply quality", value: "elevated", position: "right-[10%] top-[14%] md:right-[14%] md:top-[16%]" },
  { title: "Sync queue", value: "stable", position: "left-[16%] bottom-[20%] md:left-[20%] md:bottom-[18%]" },
  { title: "Renewal risk", value: "visible", position: "right-[8%] bottom-[18%] md:right-[18%] md:bottom-[20%]" }
];

const storySteps = [
  {
    index: "01",
    title: "Design systems that think with the operator.",
    text: "Every interface is composed like a working instrument: less dashboard clutter, more directional signal."
  },
  {
    index: "02",
    title: "Shape automation around timing, not only logic.",
    text: "The work focuses on orchestration moments, escalation thresholds, and where trust is won or lost."
  },
  {
    index: "03",
    title: "Make intelligence feel native, not bolted on.",
    text: "AI should read like product behavior. Quiet, fast, contextual, and hard to imagine working without."
  }
];

const capabilities = [
  "Salesforce system choreography",
  "AI response and summary design",
  "Revenue operations automation",
  "Escalation and case intelligence"
];

const terminalFrames = [
  "Reading account health, SLA history, and contract tier...",
  "Detected rising frustration signal and duplicate-record pattern.",
  "Drafting a reply with mitigation steps and CSM escalation context."
];

type Demo = (typeof demos)[number];

function MagneticButton({
  href,
  children,
  accent = false
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(offsetX * 0.14);
    y.set(offsetY * 0.14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.98 }}
      className={`magnetic-button ${accent ? "magnetic-button--accent" : ""}`}
    >
      {children}
    </motion.a>
  );
}

function RevealHeadline() {
  const words = ["Systems", "for", "revenue", "teams", "that", "should", "feel", "inevitable."];

  return (
    <div className="max-w-[13ch]">
      {words.map((word, index) => (
        <span key={word} className="inline-block overflow-hidden pr-[0.18em]">
          <motion.span
            initial={{ y: "108%", filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
            className={`editorial inline-block text-[3.9rem] leading-[0.84] tracking-[-0.06em] text-[#fff3e8] sm:text-[5.7rem] lg:text-[8.4rem] ${
              word === "inevitable." ? "signal-text" : ""
            }`}
          >
            {word}
          </motion.span>{" "}
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
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
        window.setTimeout(() => {
          setStep((value) => (value + 1) % terminalFrames.length);
        }, 1300);
      }
    }, 28);

    return () => window.clearInterval(typer);
  }, [step]);

  return (
    <div className="surface grain-panel relative ml-auto max-w-3xl overflow-hidden">
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

export default function ExperimentalSections() {
  const shouldReduceMotion = useReducedMotion();
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], shouldReduceMotion ? [0, 0] : [0, -120]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.25], shouldReduceMotion ? [0, 0] : [0, -4]);
  const storyLift = useTransform(scrollYProgress, [0.18, 0.48], shouldReduceMotion ? [0, 0] : [70, -20]);

  const ambientX = useMotionValue(50);
  const ambientY = useMotionValue(24);
  const ambientBackground = useMotionTemplate`radial-gradient(circle at ${ambientX}% ${ambientY}%, rgba(255, 177, 79, 0.14), transparent 24%)`;

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

  const handleHeroMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setPointer({ x: x - 50, y: y - 50 });
    ambientX.set(x);
    ambientY.set(y);
  };

  return (
    <main className="page-shell">
      <section onMouseMove={handleHeroMove} className="stage relative min-h-[110svh] pt-8 sm:pt-10 lg:pt-12">
        <motion.div style={{ backgroundImage: ambientBackground }} className="pointer-events-none absolute inset-0" />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2f221a] bg-[#120f0d] px-5 pb-10 pt-6 sm:px-8 lg:px-10 lg:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="eyebrow">Automation engineered like a product</div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#demos" accent>
                Enter demo rail
              </MagneticButton>
              <MagneticButton href="#contact">Start a conversation</MagneticButton>
            </div>
          </div>

          <motion.div style={{ y: heroY, rotateZ: heroRotate }} className="relative mt-10 min-h-[78svh] pb-20 pt-6 sm:pb-24 lg:pb-28">
            {orbitNotes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.86, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.7 }}
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: pointer.x * (0.1 + index * 0.02),
                        y: pointer.y * (0.1 + index * 0.015)
                      }
                }
                className={`surface-muted absolute hidden px-4 py-3 md:block ${item.position}`}
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#9f7b58]">{item.title}</p>
                <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#fff0df]">{item.value}</p>
              </motion.div>
            ))}

            <div className="relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="pt-6 lg:pt-16">
                <RevealHeadline />
                <motion.p
                  initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.55 }}
                  className="body-copy mt-8 max-w-xl text-base sm:text-lg"
                >
                  I build AI and Salesforce operating layers that compress complexity into something tactile, elegant, and commercially useful.
                </motion.p>
              </div>

              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: pointer.x * -0.18,
                        y: pointer.y * -0.18
                      }
                }
                className="tilt-panel relative ml-auto w-full max-w-xl"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { rotate: -2, scale: 1.01 }}
                  className="surface grain-panel rotate-[-5deg] p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-chip">Signal choreography</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#8c6b4c]">Live layer</span>
                  </div>
                  <p className="editorial mt-8 max-w-sm text-4xl leading-none tracking-[-0.05em] text-[#fff4ea] sm:text-5xl">
                    Not a dashboard. A decision instrument.
                  </p>
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {[
                      ["Reply latency", "down 37%"],
                      ["Escalation clarity", "up 2.1x"],
                      ["Case context", "always attached"],
                      ["Operator drag", "reduced"]
                    ].map(([label, value]) => (
                      <div key={label} className="surface-muted p-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#926f4f]">{label}</p>
                        <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#fff2e3]">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="surface absolute -bottom-10 left-[8%] w-[82%] rotate-[7deg] p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-chip">Operator note</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#8c6b4c]">00.6 sec</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#e6cdb6]">
                    AI now drafts the response with customer history, risk framing, and escalation context already attached.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section style={{ y: storyLift }} className="stage section-overlap relative z-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface p-6 sm:p-8">
            <p className="eyebrow">Positioning</p>
            <p className="editorial mt-6 text-4xl leading-none tracking-[-0.05em] text-[#fff1e5] sm:text-5xl">
              Less software theater.
              <br />
              More operational gravity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="surface p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#b99161]">{step.index}</p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#fff2e4]">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#ceb9a8]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="demos" className="stage relative mt-24 pb-10 sm:mt-28">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Demo sequence</p>
            <h2 className="editorial mt-5 max-w-3xl text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff4e8] sm:text-6xl">
              Scroll sideways through the product story.
            </h2>
          </div>
          <p className="body-copy max-w-md">
            Each frame is treated like a scene, not a feature card. Open any demo to step inside the interaction.
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
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
              className="demo-snap surface grain-panel min-h-[78svh] w-[88vw] shrink-0 p-6 text-left sm:w-[80vw] sm:p-8 lg:w-[72vw] lg:p-10"
            >
              <div className="grid h-full gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="eyebrow">{demo.kicker}</p>
                    <h3 className="editorial mt-8 text-5xl leading-[0.9] tracking-[-0.05em] text-[#fff4e8] sm:text-6xl lg:text-7xl">
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
                  <div className="surface-muted relative min-h-[18rem] overflow-hidden p-5 sm:min-h-[24rem]">
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="label-chip">Interactive walkthrough</span>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-[#8d7053]">Tap to open</span>
                      </div>
                      <div className="mx-auto w-full max-w-xl">
                        <div className="rounded-[1.6rem] border border-[#4f3727] bg-[#100c0a] p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Scene preview</span>
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
              A machine voice that feels alive, not decorative.
            </h2>
            <p className="body-copy mt-6 max-w-md">
              This moment is designed to behave like a product scene: analysis streaming in, tone decisions becoming visible, and the final reply carrying commercial awareness.
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
                    whileHover={shouldReduceMotion ? undefined : { x: 8 }}
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
                Make the website feel like the product already exists.
              </h2>
              <p className="body-copy mt-6">
                Share the workflow that feels too messy, too manual, or too expensive. I&apos;ll turn it into a more precise system story.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="surface-muted p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#b99161]">Email</p>
                <p className="mt-3 text-lg text-[#fff0df]">hello@automationstudio.dev</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="mailto:hello@automationstudio.dev" accent>
                  Email me
                </MagneticButton>
                <MagneticButton href="https://wa.me/15551234567">WhatsApp</MagneticButton>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-[#30221a] pt-6 text-sm text-[#8f7762] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Salesforce AI Automation Engineer</p>
          <p>Custom-built for a more memorable first impression.</p>
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

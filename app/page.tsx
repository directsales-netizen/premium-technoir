"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Users,
  Globe,
  Calendar,
  ArrowRight,
  ChevronRight,
  Bot,
  Layers,
  BrainCircuit,
  Workflow,
  Sparkles,
  TrendingUp,
  Shield,
  Code2,
  MessageSquare,
  Star,
  X,
  Menu,
  ExternalLink,
  Cpu,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/sparkles";

// ─── Utility ─────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Premium TechNoir Logo Mark ───────────────────────────────────────────────

function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ee7ed" />
          <stop offset="100%" stopColor="#00c9d4" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a4a7a" />
          <stop offset="100%" stopColor="#2a7fa8" />
        </linearGradient>
      </defs>
      {/* Hexagonal shield */}
      <path
        d="M20 2 L34 10 L34 26 L20 38 L6 26 L6 10 Z"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Inner shield */}
      <path
        d="M20 8 L29 13 L29 23 L20 32 L11 23 L11 13 Z"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Wave swoosh */}
      <path
        d="M5 22 Q12 14 20 20 Q28 26 35 18"
        stroke="url(#waveGrad2)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Community", "Events", "Resources"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#080e1a]/92 backdrop-blur-xl border-b border-[#00c9d4]/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <LogoMark size={34} />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white text-[13px] tracking-wide">
              Premium <span className="text-gradient">TechNoir</span>
            </span>
            <span className="text-[9px] text-white/30 tracking-[0.2em] uppercase font-mono">
              AI Automation Society Wave
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-white/55 hover:text-white transition-colors link-underline"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#join" className="text-sm text-white/50 hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="#join"
            className="flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-[#00c9d4] to-[#2a7fa8] hover:from-[#5ee7ed] hover:to-[#00c9d4] text-[#080e1a] px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-[#00c9d4]/20"
          >
            Join the Wave
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0a1628]/95 backdrop-blur-xl border-b border-[#00c9d4]/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#join"
                className="flex items-center justify-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-[#00c9d4] to-[#2a7fa8] text-[#080e1a] px-4 py-2.5 rounded-lg mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Join the Wave <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero with Sparkles ───────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-28 overflow-hidden">
      {/* Full-screen sparkles behind everything */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#00c9d4"
          speed={1.2}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,201,212,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,201,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,212,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-[#00c9d4]/30 bg-[#00c9d4]/8 text-[#5ee7ed] text-xs font-medium px-3 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={12} />
          Powered by Premium TechNoir
          <span className="w-1 h-1 rounded-full bg-[#00c9d4]" />
          Community Open
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.07] mb-6"
        >
          <span className="text-white">Ride the Wave of</span>
          <br />
          <span className="text-gradient">AI Automation</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-lg md:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Join the premier community of AI automation practitioners. Build
          intelligent workflows, share breakthroughs, and stay ahead of the
          wave together — with Premium TechNoir.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#join"
            className="flex items-center gap-2 bg-gradient-to-r from-[#00c9d4] to-[#2a7fa8] hover:from-[#5ee7ed] hover:to-[#00c9d4] text-[#080e1a] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-[#00c9d4]/25 hover:shadow-[#00c9d4]/40 hover:-translate-y-0.5"
          >
            Join Free Today
            <ArrowRight size={16} />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-white/60 hover:text-white font-medium px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#00c9d4]/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            See how it works
            <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* Social proof avatars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex items-center justify-center gap-2 text-sm text-white/35"
        >
          <div className="flex -space-x-2">
            {["00c9d4", "2a7fa8", "5ee7ed", "1a5f7a", "0891b2"].map((c, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#080e1a] flex items-center justify-center text-[10px] font-bold"
                style={{ background: `#${c}`, color: "#080e1a" }}
              >
                {["A", "B", "C", "D", "E"][i]}
              </div>
            ))}
          </div>
          <span>
            <strong className="text-white/60">2,400+</strong> members already automating
          </span>
        </motion.div>
      </div>

      {/* Scroll animation showcase */}
      <div className="relative z-10 w-full mt-4">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-2">
              <p className="text-sm text-[#00c9d4]/50 font-mono tracking-widest uppercase mb-2">
                Community Dashboard
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Your automation hub,{" "}
                <span className="text-gradient">reimagined</span>
              </h2>
            </div>
          }
        >
          <DashboardMockup />
        </ContainerScroll>
      </div>
    </section>
  );
}

// ─── Dashboard Mockup ─────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-xl overflow-hidden font-mono text-xs flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00c9d4]/8 bg-[#080e1a]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-[#00c9d4]/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/5 rounded-md px-10 py-1 text-white/25 text-[10px]">
            aaswave.community/dashboard
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-44 border-r border-[#00c9d4]/8 bg-[#080e1a] p-3 flex flex-col gap-1 shrink-0">
          {[
            { icon: Layers, label: "Workflows", active: true },
            { icon: Bot, label: "Agents" },
            { icon: BrainCircuit, label: "Models" },
            { icon: Users, label: "Community" },
            { icon: Calendar, label: "Events" },
            { icon: Code2, label: "Playground" },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[10px] transition-colors",
                active
                  ? "bg-[#00c9d4]/15 text-[#00c9d4]"
                  : "text-white/25 hover:text-white/45"
              )}
            >
              <Icon size={12} />
              {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Active Workflows", value: "24", delta: "+3 today", color: "teal" },
              { label: "Tasks Automated", value: "1,892", delta: "this week", color: "blue" },
              { label: "Time Saved", value: "47h", delta: "this month", color: "sky" },
            ].map(({ label, value, delta, color }) => (
              <div key={label} className="glass rounded-lg p-3">
                <p className="text-white/25 text-[9px] uppercase tracking-wider mb-1">{label}</p>
                <p
                  className={cn(
                    "text-lg font-bold",
                    color === "teal" && "text-[#00c9d4]",
                    color === "blue" && "text-blue-400",
                    color === "sky" && "text-sky-400"
                  )}
                >
                  {value}
                </p>
                <p className="text-white/20 text-[9px]">{delta}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-lg p-3 flex-1">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">
                Recent Workflows
              </p>
              <span className="text-[#00c9d4] text-[9px]">View all →</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { name: "Lead Enrichment Pipeline", status: "running", runs: "142 runs" },
                { name: "Content Repurpose Agent", status: "idle", runs: "87 runs" },
                { name: "Invoice Auto-Processor", status: "running", runs: "321 runs" },
                { name: "Support Ticket Router", status: "paused", runs: "56 runs" },
              ].map(({ name, status, runs }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.02]"
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full shrink-0",
                      status === "running" && "bg-[#00c9d4]",
                      status === "idle" && "bg-white/15",
                      status === "paused" && "bg-yellow-400"
                    )}
                  />
                  <span className="text-white/50 text-[10px] flex-1 truncate">{name}</span>
                  <span className="text-white/20 text-[9px]">{runs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-44 border-l border-[#00c9d4]/8 p-3 hidden lg:flex flex-col gap-3 shrink-0">
          <div className="glass rounded-lg p-3">
            <p className="text-white/30 text-[9px] uppercase tracking-wider mb-2">Live Activity</p>
            {[
              { user: "Alex K.", action: "deployed workflow" },
              { user: "Sam R.", action: "joined community" },
              { user: "Mia L.", action: "shared template" },
              { user: "Tom B.", action: "ran 50 tasks" },
            ].map(({ user, action }) => (
              <div key={user} className="flex gap-1.5 mb-1.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#00c9d4] to-[#2a7fa8] flex items-center justify-center text-[7px] font-bold text-[#080e1a] shrink-0">
                  {user[0]}
                </div>
                <div>
                  <span className="text-white/45 text-[9px] font-medium">{user}</span>
                  <p className="text-white/20 text-[8px]">{action}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-lg p-3">
            <p className="text-[#00c9d4] text-[9px] font-semibold mb-1">Next Event</p>
            <p className="text-white/50 text-[9px] leading-snug">AI Agents Deep Dive</p>
            <p className="text-white/25 text-[8px]">Thu · 7PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { icon: Users, value: "2,400+", label: "Active Members", color: "teal" },
    { icon: Globe, value: "42", label: "Countries", color: "blue" },
    { icon: Zap, value: "180+", label: "Templates Shared", color: "teal" },
    { icon: Calendar, value: "12+", label: "Events / Month", color: "sky" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(0,201,212,0.06),transparent)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#00c9d4]/8 rounded-2xl overflow-hidden border border-[#00c9d4]/10"
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              custom={i}
              className="bg-[#0a1628] hover:bg-[#0d1e35] transition-colors p-8 text-center group"
            >
              <div
                className={cn(
                  "inline-flex p-2.5 rounded-xl mb-4 transition-transform group-hover:scale-110",
                  color === "teal" && "bg-[#00c9d4]/12 text-[#00c9d4]",
                  color === "blue" && "bg-blue-500/12 text-blue-400",
                  color === "sky" && "bg-sky-500/12 text-sky-400"
                )}
              >
                <Icon size={20} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</p>
              <p className="text-sm text-white/35">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── About / Features ─────────────────────────────────────────────────────────

function About() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Learn from Practitioners",
      description:
        "Access deep-dive workshops, case studies, and live sessions led by people actually building production AI systems — not just theorists.",
      accent: "text-[#00c9d4]",
      border: "border-[#00c9d4]/15",
      glow: "from-[#00c9d4]/10 to-transparent",
    },
    {
      icon: Workflow,
      title: "Build Faster",
      description:
        "A growing library of battle-tested automation templates, agent blueprints, and integration patterns ready to deploy in minutes.",
      accent: "text-blue-400",
      border: "border-blue-500/15",
      glow: "from-blue-500/10 to-transparent",
    },
    {
      icon: Users,
      title: "Connect & Collaborate",
      description:
        "Find co-builders, get feedback, discover opportunities, and form teams with people who share your vision for an automated future.",
      accent: "text-sky-400",
      border: "border-sky-500/15",
      glow: "from-sky-500/10 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00c9d4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#00c9d4] tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Everything you need to
            <br />
            <span className="text-gradient">automate at scale</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            AASW — powered by Premium TechNoir — is built by practitioners,
            for practitioners. We cut through the noise so you can focus on building.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, description, accent, border, glow }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              className={cn(
                "relative rounded-2xl p-7 border overflow-hidden group glass-hover",
                border
              )}
              style={{ background: "rgba(10,22,40,0.7)" }}
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br pointer-events-none",
                  glow
                )}
              />
              <div className="relative z-10">
                <div className={cn("inline-flex p-3 rounded-xl mb-5 bg-white/4 border border-white/6", accent)}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Use Cases ────────────────────────────────────────────────────────────────

function UseCases() {
  const cases = [
    { tag: "Sales", title: "Lead Intelligence Pipelines", desc: "Enrich, score, and route leads automatically using AI agents that work while you sleep.", icon: TrendingUp },
    { tag: "Operations", title: "Document Automation", desc: "Extract, transform, and route data from any document type — invoices, contracts, reports.", icon: Layers },
    { tag: "Marketing", title: "Content at Scale", desc: "Repurpose content across formats and channels with multi-step AI workflows.", icon: Sparkles },
    { tag: "Support", title: "Intelligent Routing", desc: "Classify, prioritize, and resolve support tickets using LLM-powered decision trees.", icon: MessageSquare },
    { tag: "DevOps", title: "Code Review Agents", desc: "Automated PR reviews, test generation, and documentation from your CI/CD pipeline.", icon: Code2 },
    { tag: "Security", title: "Compliance Monitoring", desc: "Continuous automated scanning and reporting to keep you ahead of compliance obligations.", icon: Shield },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00c9d4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#5ee7ed] tracking-widest uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built for every{" "}
            <span className="text-gradient">industry</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Members across every vertical are deploying automation that drives
            real, measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cases.map(({ tag, title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              className="group border border-white/6 rounded-xl p-6 hover:border-[#00c9d4]/25 transition-all duration-300 bg-[#0a1628]/80 hover:bg-[#0d1e35] cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/4 border border-white/6 text-[#00c9d4] group-hover:text-[#5ee7ed] transition-colors shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#00c9d4]/60 bg-[#00c9d4]/8 px-2 py-0.5 rounded-full mb-2">
                    {tag}
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                  <p className="text-xs text-white/35 leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote: "AASW completely changed how I approach automation. The community knowledge alone is worth more than any paid course I've taken.",
      name: "Priya S.",
      role: "Head of Ops, Series B SaaS",
      rating: 5,
      color: "from-[#00c9d4] to-[#2a7fa8]",
      line: "from-[#00c9d4] to-[#2a7fa8]",
    },
    {
      quote: "Within two weeks of joining I had deployed three production workflows that saved my team 20+ hours a week. The templates are insane.",
      name: "Marcus W.",
      role: "Founder, AI Consulting Agency",
      rating: 5,
      color: "from-[#2a7fa8] to-[#5ee7ed]",
      line: "from-[#2a7fa8] to-[#5ee7ed]",
    },
    {
      quote: "I came in skeptical, left with co-founders. The caliber of people here is unlike any other tech community I've been part of.",
      name: "Elif D.",
      role: "ML Engineer, Enterprise FinTech",
      rating: 5,
      color: "from-[#5ee7ed] to-[#00c9d4]",
      line: "from-[#5ee7ed] to-[#00c9d4]",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(0,201,212,0.05),transparent)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#00c9d4] tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hear from the{" "}
            <span className="text-gradient">wave riders</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ quote, name, role, rating, color, line }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl p-7 border border-white/6 bg-[#0a1628]/70 hover:border-[#00c9d4]/20 transition-all duration-300"
            >
              <div className={cn("absolute top-0 left-6 right-6 h-px bg-gradient-to-r", line)} />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-[#00c9d4] text-[#00c9d4]" />
                ))}
              </div>
              <p className="text-sm text-white/55 leading-relaxed mb-6 italic">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={cn("w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-bold text-[#080e1a]", color)}>
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/30">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Events ───────────────────────────────────────────────────────────────────

function Events() {
  const events = [
    { date: { day: "22", month: "MAY" }, title: "AI Agents Deep Dive", type: "Workshop", time: "7:00 PM EST", spots: "84 attending", color: "teal" },
    { date: { day: "29", month: "MAY" }, title: "Build in Public: Live Automation Sprint", type: "Live Session", time: "6:00 PM EST", spots: "112 attending", color: "blue" },
    { date: { day: "05", month: "JUN" }, title: "LLM Orchestration Patterns", type: "Talk", time: "8:00 PM EST", spots: "67 attending", color: "sky" },
  ];

  return (
    <section id="events" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-sm font-mono text-[#00c9d4] tracking-widest uppercase mb-4">
              Upcoming Events
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Learn live with the{" "}
              <span className="text-gradient">community</span>
            </h2>
          </div>
          <a href="#events" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors whitespace-nowrap">
            View all events <ExternalLink size={14} />
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {events.map(({ date, title, type, time, spots, color }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              className="group flex items-center gap-6 p-6 rounded-2xl border border-white/6 bg-[#0a1628]/70 hover:border-[#00c9d4]/20 hover:bg-[#0d1e35] transition-all duration-300 cursor-pointer"
            >
              <div
                className={cn(
                  "shrink-0 w-16 text-center rounded-xl py-2.5 border",
                  color === "teal" && "bg-[#00c9d4]/12 border-[#00c9d4]/20",
                  color === "blue" && "bg-blue-500/12 border-blue-500/20",
                  color === "sky" && "bg-sky-500/12 border-sky-500/20"
                )}
              >
                <p className={cn(
                  "text-2xl font-bold leading-none",
                  color === "teal" && "text-[#00c9d4]",
                  color === "blue" && "text-blue-300",
                  color === "sky" && "text-sky-300"
                )}>
                  {date.day}
                </p>
                <p className="text-[10px] text-white/30 font-mono mt-0.5">{date.month}</p>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
                    {type}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white truncate group-hover:text-[#5ee7ed] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-white/30 mt-0.5">{time} · {spots}</p>
              </div>

              <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/25 group-hover:text-[#00c9d4] group-hover:border-[#00c9d4]/30 transition-all">
                <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Wave SVG divider ─────────────────────────────────────────────────────────

function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden h-20 my-2">
      <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full opacity-15" preserveAspectRatio="none">
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="url(#wgTeal)"
        />
        <defs>
          <linearGradient id="wgTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c9d4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#5ee7ed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00c9d4" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ─── Pricing / Join CTA ───────────────────────────────────────────────────────

function JoinCTA() {
  const tiers = [
    {
      name: "Member",
      price: "Free",
      description: "Get started with the community",
      features: ["Community forum access", "Public template library", "Monthly live events", "Member directory"],
      cta: "Join Free",
      highlight: false,
    },
    {
      name: "Wave Pro",
      price: "$29",
      period: "/mo",
      description: "For serious automation builders",
      features: ["Everything in Member", "Private workshops & recordings", "Premium template vault", "1-on-1 office hours", "Exclusive Slack channels", "Early access to tools"],
      cta: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      description: "For companies building at scale",
      features: ["Everything in Wave Pro", "Up to 5 seats", "Team workspace", "Priority support", "Custom onboarding"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,201,212,0.08),transparent_70%)] pointer-events-none" />

      {/* Sparkles accent in pricing section */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <SparklesCore
          id="pricing-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={25}
          className="w-full h-full"
          particleColor="#00c9d4"
          speed={0.8}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#00c9d4] tracking-widest uppercase mb-4">
            Membership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Join{" "}
            <span className="text-gradient">AI Automation Society Wave</span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            Start free, upgrade when you&apos;re ready. No lock-in, no fluff.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {tiers.map(({ name, price, period, description, features, cta, highlight }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                highlight
                  ? "border-gradient shadow-2xl shadow-[#00c9d4]/15"
                  : "border border-white/6 bg-[#0a1628]/80"
              )}
              style={highlight ? { background: "rgba(10,22,40,0.95)" } : undefined}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00c9d4] to-[#2a7fa8] text-[#080e1a] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold text-white/45 mb-1">{name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{price}</span>
                  {period && <span className="text-white/35 text-sm">{period}</span>}
                </div>
                <p className="text-sm text-white/35">{description}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#00c9d4]/15 flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke="#00c9d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200",
                  highlight
                    ? "bg-gradient-to-r from-[#00c9d4] to-[#2a7fa8] hover:from-[#5ee7ed] hover:to-[#00c9d4] text-[#080e1a] shadow-lg shadow-[#00c9d4]/25 hover:-translate-y-0.5"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-[#00c9d4]/25 hover:-translate-y-0.5"
                )}
              >
                {cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const cols = [
    { title: "Community", links: ["About Us", "Members", "Events", "Newsletter"] },
    { title: "Resources", links: ["Template Library", "Tutorials", "Blog", "Podcast"] },
    { title: "Company", links: ["Careers", "Partners", "Press", "Contact"] },
  ];

  return (
    <footer className="border-t border-[#00c9d4]/8 pt-16 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[radial-gradient(ellipse_at_center,rgba(0,201,212,0.06),transparent_70%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <LogoMark size={32} />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-[13px]">
                  Premium <span className="text-gradient">TechNoir</span>
                </span>
                <span className="text-[9px] text-white/25 tracking-[0.15em] uppercase font-mono">
                  AASW
                </span>
              </div>
            </a>
            <p className="text-sm text-white/30 leading-relaxed max-w-[200px]">
              The premier community for AI automation practitioners worldwide.
            </p>
          </div>

          {cols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-5">{title}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/30 hover:text-[#00c9d4] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Premium TechNoir · AI Automation Society Wave. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/20 hover:text-white/45 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="technoir-bg">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WaveDivider />
      <UseCases />
      <Testimonials />
      <WaveDivider />
      <Events />
      <JoinCTA />
      <Footer />
    </main>
  );
}

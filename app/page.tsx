"use client"

import { useState } from "react"
import {
  Download,
  Copy,
  Check,
  Mail,
  GraduationCap,
  Code2,
  Sparkles,
  Layers,
  Database,
  Cpu,
  Wrench,
  Briefcase,
  Award,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  BookOpenCheck
} from "lucide-react"

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yogamaysuhendra26@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const experiences = [
    {
      role: "Sole Full-Stack Developer (Freelance)",
      organization: "PT Putra Tangerang Sejati",
      period: "Mei 2026 – Jul 2026 (Selesai)",
      description: "Membangun sistem pelacakan dokumen izin enterprise end-to-end dengan React.js, Node.js REST API, dan MySQL. Mengotomatiskan verifikasi berkas dari manual menjadi digital, memangkas waktu pemantauan status dari 4 jam menjadi 2 jam per batch (50% efisiensi operasional) bagi staf administrasi."
    },
    {
      role: "Project Leader & Logistics Coordinator (PKM)",
      organization: "MTs An-Nashr Parung & Univ. Pamulang",
      period: "Okt 2025 – Des 2025 (Selesai)",
      description: "Memimpin alokasi anggaran, pengembangan website profil sekolah berbasis PHP/MySQL, serta menyelenggarakan edukasi literasi komputasi yang meningkatkan pemahaman teknis 50+ siswa."
    },
    {
      role: "Field Coordinator (Divisi Korlap)",
      organization: "Program Campus Goes to School",
      period: "2025 (Selesai)",
      description: "Mengelola alur operasional dan manajemen tim lapangan dalam pelaksanaan sosialisasi perguruan tinggi di sekolah-sekolah mitra."
    }
  ]

  const projects = [
    {
      title: "Document Permit Tracking System",
      category: "Full-Stack Web App",
      client: "PT Putra Tangerang Sejati",
      description: "Aplikasi pelacakan status izin real-time berbasis Web dengan autentikasi Role-Based Access Control (RBAC), unduh dokumen digital aman, dan audit trail.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/yogamaysuhendra/document-permit-tracking",
      liveUrl: "https://personal-portfolio-website-neon-mu.vercel.app/"
    },
    {
      title: "CardioScreen AI - Risk Assessment",
      category: "Machine Learning Web App",
      client: "Skripsi / Research Project",
      description: "Sistem evaluasi risiko penyakit kardiovaskular menggunakan Random Forest, teknik penyeimbangan data SMOTE, dan 10-Fold Cross Validation berdasarkan dataset anonim e-Puskesmas.",
      tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "SMOTE"],
      githubUrl: "https://github.com/yogamaysuhendra/cardioscreen-ai",
      liveUrl: "https://cardioscreen-ai.streamlit.app"
    },
    {
      title: "Real-Time Sign Language Translator AI",
      category: "Computer Vision & Deep Learning",
      client: "AI Research Project",
      description: "Penerjemah bahasa isyarat real-time dengan deteksi 21 titik koordinat gestur tangan MediaPipe dan estimasi model TensorFlow yang mengonversi gerakan tangan menjadi audio.",
      tech: ["Python", "MediaPipe", "OpenCV", "TensorFlow", "Keras"],
      githubUrl: "https://github.com/yogamaysuhendra/sign-language-translator",
      liveUrl: "https://huggingface.co/spaces/yogamaysuhendra/sign-language-ai"
    },
    {
      title: "Open Trip Travel Platform",
      category: "Web Application",
      client: "Travel & Booking Web",
      description: "Platform pemesanan paket wisata terintegrasi dengan filter pencarian responsif, skema relasi database terstruktur, dan antarmuka ramah pengguna.",
      tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/yogamaysuhendra/open-trip-travel",
      liveUrl: "https://open-trip-travel.vercel.app"
    }
  ]

  const techCategories = [
    {
      name: "Frontend Development",
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "PHP"]
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone className="w-4 h-4 text-emerald-400" />,
      skills: ["Android Studio", "Java", "Kotlin", "Jetpack Compose", "XML Layouts", "Device Sensors API"]
    },
    {
      name: "Backend & Architecture",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: ["Node.js", "Express.js", "RESTful API", "MySQL", "MS SQL Server", "ERD & Normalisasi"]
    },
    {
      name: "AI & Data Engineering",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      skills: ["Python", "MediaPipe", "OpenCV", "TensorFlow / Keras", "Scikit-Learn", "Streamlit"]
    },
    {
      name: "DevOps & Engineering Tools",
      icon: <Wrench className="w-4 h-4 text-emerald-400" />,
      skills: ["Docker & Dockerfile", "Nginx", "Linux (Ubuntu / WSL)", "Git & GitHub", "Postman", "VS Code"]
    }
  ]

  const exposureAndTraining = [
    {
      title: "Full-Stack Web & REST API Architecture",
      context: "Industry Project Exposure — PT Putra Tangerang Sejati",
      detail: "Implementasi langsung arsitektur client-server React & Express, autentikasi aman, dan manajemen state."
    },
    {
      title: "Machine Learning & Computer Vision",
      context: "Research & Capstone Project — Universitas Pamulang",
      detail: "Eksplorasi model Machine Learning klasifikasi Random Forest, SMOTE, dan deteksi koordinat MediaPipe."
    },
    {
      title: "Database Engineering & Relational Design",
      context: "Academic Coursework & Implementation",
      detail: "Perancangan skema ERD, normalisasi data, stored procedure, dan kueri teroptimasi MySQL & MS SQL Server."
    }
  ]

  const achievements = [
    "IPK 3.37 / 4.00 — Program Studi S1 Teknik Informatika Universitas Pamulang (120 SKS)",
    "Sole Developer Proyek Sistem Tracking Perizinan Enterprise PT Putra Tangerang Sejati",
    "Ketua Pelaksana & Koordinator Logistik Program PKM Literasi Digital 2025",
    "Pengembang Aplikasi AI Penerjemah Bahasa Isyarat & Prediksi Kardiovaskular"
  ]

  return (
    <main className="min-h-screen bg-[#0c1118] text-slate-100 p-4 md:p-8 lg:p-12 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Stack Roles
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <img
                  src="/profile.jpg"
                  alt="Yoga May Suhendra"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-emerald-500/30 shadow-xl bg-slate-800"
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    Yoga May Suhendra
                  </h1>
                  <p className="text-emerald-400 font-medium text-sm md:text-base mt-1">
                    Full-Stack Developer
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-lg leading-relaxed">
                    Mahasiswa Teknik Informatika Universitas Pamulang dengan pengalaman merancang sistem web enterprise end-to-end, REST API, arsitektur database relasional, serta integrasi solusi Computer Vision & Machine Learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-800/80">
              <a
                href="/CV_Yoga_May_Suhendra.pdf"
                download="CV_Yoga_May_Suhendra.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-slate-950 font-semibold text-xs md:text-sm rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-200 font-medium text-xs md:text-sm rounded-xl transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Email Tersalin!" : "Salin Email"}
              </button>
            </div>
          </div>

          {/* EDUCATION & HIGHLIGHT STATS */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="glass-card p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  Education & Performance
                </div>
                <h2 className="text-lg font-bold text-white">Universitas Pamulang</h2>
                <p className="text-slate-400 text-xs mt-0.5">S1 Teknik Informatika (Semester 7)</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  IPK: 3.37 / 4.00 (120 SKS)
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800/80 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-400">3.37</div>
                  <div className="text-[10px] text-slate-400">IPK Resmi</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-400">4+</div>
                  <div className="text-[10px] text-slate-400">Proyek Utuh</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-400">Full-Stack</div>
                  <div className="text-[10px] text-slate-400">Teknis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WORK & EXPERIENCE SECTION (STAR FORMAT) */}
        <div className="glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            Experience & Leadership
          </div>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <h3 className="font-bold text-white text-base">{exp.role}</h3>
                  <span className="text-xs text-emerald-400 font-medium">{exp.period}</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{exp.organization}</div>
                <p className="text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK BENTO */}
        <div className="glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Layers className="w-4 h-4 text-emerald-400" />
            Technical Skills & Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                <div className="flex items-center gap-2 font-semibold text-sm text-slate-200 mb-3">
                  {cat.icon}
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 text-xs font-medium border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECTS SECTION */}
        <div className="glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Featured Projects
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group p-5 md:p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {proj.category}
                    </span>
                    {proj.client && (
                      <span className="text-[11px] text-slate-400 italic">
                        {proj.client}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {proj.liveUrl !== "#" && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRAINING & INDUSTRY EXPOSURE SECTION */}
        <div className="glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <BookOpenCheck className="w-4 h-4 text-emerald-400" />
            Relevant Training & Industry Exposure
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exposureAndTraining.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                <div className="text-xs text-emerald-400 font-medium mt-1">{item.context}</div>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS & CREDENTIALS */}
        <div className="glass-card p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-emerald-400" />
            Achievements & Verified Credentials
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="glass-card p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Yoga May Suhendra. Built with Next.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yogamaysuhendra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yogamaysuhendra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:yogamaysuhendra26@gmail.com"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
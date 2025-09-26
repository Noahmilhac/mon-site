export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-extrabold tracking-tight">4easy</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-gray-600">Comment ça marche</a>
            <a href="#ai" className="hover:text-gray-600">IA</a>
            <a href="#cases" className="hover:text-gray-600">Cas clients</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-lg bg-[#2563EB] text-white font-semibold shadow-sm hover:opacity-95">
            Demander une démo
          </a>
        </div>
      </header>

      {/* HERO + SOCIAL PROOF */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EAFF]" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Des retours clients clairs,<br className="hidden lg:block" /> des équipes plus fortes.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Pour les restaurateurs : récupérez <span className="font-semibold">100&nbsp;% d’avis vérifiés</span> après chaque service
              pour piloter votre restaurant du bout des doigts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold shadow hover:opacity-95">
                Demander une démo
              </a>
              <span className="text-sm text-gray-500">Mise en place en 10 minutes — sans complexité.</span>
            </div>

            {/* Chiffres clés (placeholders) */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <Kpi label="Avis collectés" value="250k+" />
              <Kpi label="Note moyenne" value="4,7/5" />
              <Kpi label="Resto actifs" value="1 200+" />
            </div>
          </div>

          {/* Visuel dashboard placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl border bg-white shadow-sm flex items-center justify-center">
              <span className="text-gray-500">Aperçu tableau de bord</span>
            </div>
            <div className="pointer-events-none absolute -top-10 -right-8 h-52 w-52 rounded-full bg-[#2563EB]/10 blur-2xl" />
          </div>
        </div>

        {/* Logos (placeholders) */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap items-center gap-8 opacity-60">
            <LogoBar />
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE (4 étapes comme AV) */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Comment ça marche</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Step n="01" title="Collecter">
            QR code / tablette en fin de repas. Avis à chaud, taux de réponse élevé.
          </Step>
          <Step n="02" title="Modérer">
            Processus normé et transparent. Filtres anti-spam, doublons & faux avis.
          </Step>
          <Step n="03" title="Activer">
            Affichez les avis sur votre site, menus, réseaux & Google Business.
          </Step>
          <Step n="04" title="Analyser">
            Tableaux clairs par service / serveur. Actions concrètes chaque jour.
          </Step>
        </div>
      </section>

      {/* BLOC IA (comme la section IA d’Avis Vérifiés) */}
      <section id="ai" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">L’IA au cœur de 4easy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card icon="✍️" title="Rédaction assistée">
              Suggestions de thèmes pour aider les clients à s’exprimer vite et bien.
            </Card>
            <Card icon="⚡" title="Modération instantanée">
              Traitement 6× plus rapide des avis, détection d’abus & langage inapproprié.
            </Card>
            <Card icon="🧠" title="Analyse intelligente">
              Synthèse des verbatims, détection des irritants, priorités d’action.
            </Card>
          </div>
        </div>
      </section>

      {/* CAS CLIENTS / PREUVES */}
      <section id="cases" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Ils améliorent leur expérience client</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Case
            logo="🍽️"
            title="Brasserie du Centre"
            bullets={["+38 % d’avis Google en 3 mois", "Note moyenne 4,6/5", "Briefs d’équipe clairs chaque matin"]}
          />
          <Case
            logo="🥗"
            title="Groupe Green Food (5 établissements)"
            bullets={["Standardisation des pratiques", "NPS +12 points", "Rotation serveurs optimisée"]}
          />
          <Case
            logo="🍕"
            title="Pizzeria Napoli"
            bullets={["Réponses clients 30s en moyenne", "Moins de litiges", "Upsell desserts +11 %"]}
          />
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="contact" className="bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Demander une démo</h2>
          <p className="text-white/70 mt-2">Un expert 4easy vous recontacte sous 24h.</p>
          <DemoForm />
        </div>
        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
            <div className="font-semibold text-white">4easy</div>
            <div>© {new Date().getFullYear()} 4easy — Tous droits réservés.</div>
            <a className="underline" href="mailto:noahmilhac@hotmail.com">noahmilhac@hotmail.com</a>
          </div>
        </footer>
      </section>
    </div>
  );
}

/* ——— composants ——— */

function Kpi({ value, label }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-2xl font-extrabold tracking-tight">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function LogoBar() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <span className="h-8 w-24 rounded bg-gray-200" />
      <span className="h-8 w-24 rounded bg-gray-200" />
      <span className="h-8 w-24 rounded bg-gray-200" />
      <span className="h-8 w-24 rounded bg-gray-200" />
      <span className="h-8 w-24 rounded bg-gray-200" />
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-xs font-mono text-gray-500">Étape {n}</div>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}

function Case({ logo, title, bullets = [] }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="text-2xl">{logo}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-1 text-gray-700">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
    </div>
  );
}

function DemoForm() {
  // Simple "mailto" pour l’instant (pas de backend nécessaire)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const subject = encodeURIComponent("Demande de démo 4easy");
        const body = encodeURIComponent(
          `Nom: ${d.get("name")}\nÉtablissement: ${d.get("company")}\nEmail: ${d.get("email")}\nTéléphone: ${d.get("phone")}\nMessage: ${d.get("message") || ""}`
        );
        window.location.href = `mailto:noahmilhac@hotmail.com?subject=${subject}&body=${body}`;
      }}
      className="max-w-2xl mx-auto grid gap-4 mt-8"
    >
      <input name="name" placeholder="Votre nom" className="border border-white/10 bg-white text-gray-900 rounded-xl px-4 py-3" required />
      <input name="company" placeholder="Établissement" className="border border-white/10 bg-white text-gray-900 rounded-xl px-4 py-3" required />
      <input type="email" name="email" placeholder="Email" className="border border-white/10 bg-white text-gray-900 rounded-xl px-4 py-3" required />
      <input name="phone" placeholder="Téléphone (optionnel)" className="border border-white/10 bg-white text-gray-900 rounded-xl px-4 py-3" />
      <textarea name="message" placeholder="Votre message (optionnel)" className="border border-white/10 bg-white text-gray-900 rounded-xl px-4 py-3 min-h-[120px]" />
      <button className="mt-2 bg-[#2563EB] text-white rounded-xl px-5 py-3 font-semibold hover:opacity-95">
        Demander une démo
      </button>
    </form>
  );
}

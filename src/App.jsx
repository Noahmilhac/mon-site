function Container({ className = "", children }) {
  return <div className={`container max-w-7xl ${className}`}>{children}</div>;
}

function Button({ href = "#", variant = "primary", children, className = "" }) {
  const base = "inline-flex items-center justify-center rounded-xl font-semibold px-5 py-3";
  const styles = variant === "primary"
    ? "bg-primary text-white hover:opacity-95 shadow-sm"
    : "border border-gray-300 text-ink hover:bg-gray-50";
  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}

function SectionTitle({ eyebrow, title, desc, center=true }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {eyebrow && <div className="text-xs tracking-widest uppercase text-primary font-bold">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">{title}</h2>
      {desc && <p className="text-lg text-muted mt-3 max-w-3xl mx-auto">{desc}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <Container className="flex items-center justify-between px-4 py-4">
          <a href="/" className="text-2xl font-extrabold tracking-tight">4easy</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-ink/80">Comment ça marche</a>
            <a href="#ai" className="hover:text-ink/80">IA</a>
            <a href="#cases" className="hover:text-ink/80">Cas clients</a>
            <a href="#contact" className="hover:text-ink/80">Contact</a>
          </nav>
          <Button href="#contact" className="hidden md:inline-flex">Demander une démo</Button>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EAFF]" />
        <Container className="grid lg:grid-cols-2 gap-12 items-center px-4 py-16 lg:py-24">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
              Des retours clients clairs,<br className="hidden lg:block"/> des équipes plus fortes.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Pour les restaurateurs : récupérez <span className="font-semibold">100&nbsp;% d’avis vérifiés</span> après chaque service
              et pilotez votre restaurant du bout des doigts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact">Demander une démo</Button>
              <Button href="#how" variant="ghost" className="!border-gray-300">Voir comment</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <Kpi value="250k+" label="Avis collectés" />
              <Kpi value="4,7/5" label="Note moyenne" />
              <Kpi value="1 200+" label="Resto actifs" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border bg-white shadow-soft flex items-center justify-center">
              <span className="text-gray-500">Aperçu du tableau de bord</span>
            </div>
            <div className="pointer-events-none absolute -top-10 -right-8 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </Container>
      </section>

      {/* LOGOS */}
      <section>
        <Container className="px-4 py-8">
          <div className="text-center text-sm text-muted mb-4">Ils optimisent leur expérience client avec 4easy</div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <LogoPlaceholder/><LogoPlaceholder/><LogoPlaceholder/><LogoPlaceholder/><LogoPlaceholder/>
          </div>
        </Container>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="how" className="bg-surface">
        <Container className="px-4 py-20">
          <SectionTitle eyebrow="Process" title="Comment ça marche"
            desc="Un parcours simple et normé, inspiré des meilleures pratiques du secteur (à la Avis Vérifiés)." />
          <div className="grid md:grid-cols-4 gap-6">
            <Step n="01" title="Collecter">QR code / tablette en fin de repas. Avis à chaud, taux de réponse élevé.</Step>
            <Step n="02" title="Modérer">Détection d’abus & doublons. Processus transparent et normé.</Step>
            <Step n="03" title="Activer">Affichez les avis sur site, menus, réseaux & fiche Google.</Step>
            <Step n="04" title="Analyser">Tableaux clairs par service / serveur. Actions concrètes.</Step>
          </div>
        </Container>
      </section>

      {/* IA */}
      <section id="ai">
        <Container className="px-4 py-20">
          <SectionTitle eyebrow="IA" title="L’IA au cœur de 4easy"
            desc="Moins de temps à trier, plus de temps à agir — rédaction assistée, modération instantanée, synthèses intelligentes." />
          <div className="grid md:grid-cols-3 gap-6">
            <Card icon="✍️" title="Rédaction assistée">Aide les clients à s’exprimer vite et bien, sans biais.</Card>
            <Card icon="⚡" title="Modération instantanée">6× plus rapide, avec filtres anti-spam et détection d’insultes.</Card>
            <Card icon="🧠" title="Analyse intelligente">Synthèse des verbatims, irritants clés, priorités d’action.</Card>
          </div>
        </Container>
      </section>

      {/* CAS CLIENTS */}
      <section id="cases" className="bg-surface">
        <Container className="px-4 py-20">
          <SectionTitle title="Ils améliorent leur expérience client" desc="" />
          <div className="grid md:grid-cols-3 gap-6">
            <Case logo="🍽️" title="Brasserie du Centre" bullets={["+38 % d’avis Google en 3 mois","Note moyenne 4,6/5","Briefs d’équipe clairs chaque matin"]}/>
            <Case logo="🥗" title="Groupe Green Food (5 sites)" bullets={["Standardisation des pratiques","NPS +12 points","Rotation serveurs optimisée"]}/>
            <Case logo="🍕" title="Pizzeria Napoli" bullets={["Réponses clients en 30s","Moins de litiges","Upsell desserts +11 %"]}/>
          </div>
        </Container>
      </section>

      {/* CTA + FORM */}
      <section id="contact" className="bg-ink text-white">
        <Container className="px-4 py-20">
          <SectionTitle center={true} title="Demander une démo" desc="Un expert 4easy vous recontacte sous 24h." />
          <DemoForm />
        </Container>
        <footer className="border-t border-white/10">
          <Container className="px-4 py-6 flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
            <div className="font-semibold text-white">4easy</div>
            <div>© {new Date().getFullYear()} 4easy — Tous droits réservés.</div>
            <a className="underline" href="mailto:noahmilhac@hotmail.com">noahmilhac@hotmail.com</a>
          </Container>
        </footer>
      </section>
    </div>
  );
}

/* ——— composants ——— */

function Kpi({ value, label }) {
  return (
    <div className="rounded-xl2 border bg-white p-4 text-center">
      <div className="text-2xl font-extrabold tracking-tight">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
function LogoPlaceholder(){ return <span className="h-8 w-28 rounded bg-gray-200 block" />; }

function Step({ n, title, children }) {
  return (
    <div className="rounded-xl2 border bg-white p-6 hover:shadow-soft transition-shadow">
      <div className="text-xs font-mono text-muted">Étape {n}</div>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-xl2 border bg-white p-6 hover:shadow-soft transition-shadow">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}

function Case({ logo, title, bullets = [] }) {
  return (
    <div className="rounded-xl2 border bg-white p-6 hover:shadow-soft transition-shadow">
      <div className="text-2xl">{logo}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-1 text-gray-700">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
    </div>
  );
}

function DemoForm() {
  // Simple mailto pour le moment. On basculera sur Formspree après validation du design.
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
      className="max-w-2xl mx-auto grid gap-4"
    >
      <input name="name" placeholder="Votre nom" className="border border-white/10 bg-white text-ink rounded-xl px-4 py-3" required />
      <input name="company" placeholder="Établissement" className="border border-white/10 bg-white text-ink rounded-xl px-4 py-3" required />
      <input type="email" name="email" placeholder="Email" className="border border-white/10 bg-white text-ink rounded-xl px-4 py-3" required />
      <input name="phone" placeholder="Téléphone (optionnel)" className="border border-white/10 bg-white text-ink rounded-xl px-4 py-3" />
      <textarea name="message" placeholder="Votre message (optionnel)" className="border border-white/10 bg-white text-ink rounded-xl px-4 py-3 min-h-[120px]" />
      <button className="mt-2 bg-primary text-white rounded-xl px-5 py-3 font-semibold hover:opacity-95">
        Demander une démo
      </button>
    </form>
  );
}

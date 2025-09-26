export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold tracking-tight">4easy</a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="hover:opacity-70">Fonctionnalités</a>
            <a href="#demo" className="hover:opacity-70">Démo</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-lg bg-[#2563EB] text-white font-semibold">
            Demander une démo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Des retours clients clairs,<br className="hidden md:block" /> des équipes plus fortes.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Pour les restaurateurs : récupérez <span className="font-semibold">100 % d’avis vérifiés</span> après chaque service
              pour piloter votre restaurant du bout des doigts.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold">
                Demander une démo
              </a>
              <a href="#demo" className="px-5 py-3 rounded-xl border border-gray-300 font-semibold">
                Voir la démo
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">Mise en place en 10 minutes. Sans logiciel compliqué.</p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-white border rounded-2xl shadow-sm flex items-center justify-center">
              <span className="text-gray-500">Aperçu du tableau de bord (bientôt ta vidéo)</span>
            </div>
            <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-[#4F46E5]/10 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que 4easy change pour vous</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Feature title="Avis 100 % authentiques">
              Collectés à chaud via QR code ou tablette, juste après le repas.
            </Feature>
            <Feature title="Analyse serveur par serveur">
              Suivez objectivement la performance de chaque membre de l’équipe.
            </Feature>
            <Feature title="Résultats en pourcentages">
              Des chiffres clairs après chaque service, exploitables immédiatement.
            </Feature>
            <Feature title="Email récap automatique">
              Recevez un compte rendu après chaque service, même à distance.
            </Feature>
            <Feature title="Mise en place express">
              Installez 4easy en 10 minutes. Zéro complexité technique.
            </Feature>
            <Feature title="Plus d’avis publics">
              Activez des relances pour booster vos avis Google de façon saine.
            </Feature>
          </div>
        </div>
      </section>

      {/* Démo */}
      <section id="demo" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Démo en 60 secondes</h2>
          <p className="text-gray-600 mb-8">Voyez le parcours client et le tableau de bord en action.</p>
          {/* Remplace l’iframe par ta vraie vidéo YouTube/Loom quand tu l’auras */}
          <div className="max-w-3xl mx-auto aspect-video bg-black/5 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Intègre ici ta vidéo de démo</span>
          </div>
        </div>
      </section>

      {/* Contact / Demande de démo */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Demander une démo</h2>
          <p className="text-gray-600 mb-8">Un expert 4easy vous recontacte sous 24h.</p>
        </div>
        <DemoForm />
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0F19] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold">4easy</div>
            <p className="text-white/70 mt-2 text-sm">L’app qui révolutionne l’expérience client en restauration.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Navigation</div>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#features" className="hover:underline">Fonctionnalités</a></li>
              <li><a href="#demo" className="hover:underline">Démo</a></li>
              <li><a href="#contact" className="hover:underline">Demander une démo</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <p className="text-white/80 text-sm">Email : <a className="underline" href="mailto:noahmilhac@hotmail.com">noahmilhac@hotmail.com</a></p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-white/60">
            © {new Date().getFullYear()} 4easy — Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, children }) {
  return (
    <div className="p-6 border rounded-2xl hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

function DemoForm() {
  // Version simple : envoi par email (mailto)
  // Quand tu voudras, on basculera sur Formspree pour un vrai formulaire.
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent("Demande de démo 4easy");
        const body = encodeURIComponent(
          `Nom: ${data.get("name")}\nÉtablissement: ${data.get("company")}\nEmail: ${data.get("email")}\nTéléphone: ${data.get("phone")}\nMessage: ${data.get("message") || ""}`
        );
        window.location.href = `mailto:noahmilhac@hotmail.com?subject=${subject}&body=${body}`;
      }}
      className="max-w-2xl mx-auto grid gap-4"
    >
      <input name="name" placeholder="Votre nom" className="border rounded-xl px-4 py-3" required />
      <input name="company" placeholder="Nom de l’établissement" className="border rounded-xl px-4 py-3" required />
      <input type="email" name="email" placeholder="Votre email" className="border rounded-xl px-4 py-3" required />
      <input name="phone" placeholder="Téléphone (optionnel)" className="border rounded-xl px-4 py-3" />
      <textarea name="message" placeholder="Votre message (optionnel)" className="border rounded-xl px-4 py-3 min-h-[120px]" />
      <button className="mt-2 bg-[#2563EB] text-white rounded-xl px-5 py-3 font-semibold">
        Demander une démo
      </button>
      <p className="text-center text-sm text-gray-500">En cliquant, votre logiciel d’email s’ouvrira avec votre demande préremplie.</p>
    </form>
  );
}

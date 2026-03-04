import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-wellness.jpg";
import treatmentImage from "@/assets/treatment-room.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const symptoms = [
  "PMS-klachten die je maand na maand beheersen",
  "Onverklaarbare vermoeidheid en energieverlies",
  "Overgangsklachten zoals opvliegers en slaapproblemen",
  "Stress die zich vastzet in je lichaam",
  "Hormonale disbalans zonder duidelijke oorzaak",
  "Prikkelbaarheid en stemmingswisselingen",
];

const testimonials = [
  {
    name: "Marieke, 42",
    text: "Na jaren tobben met PMS-klachten voelde ik me eindelijk weer mezelf. Jeannette luistert écht en weet precies waar ze moet zijn. Na een paar sessies sliep ik beter en verdwenen mijn stemmingswisselingen.",
  },
  {
    name: "Sandra, 54",
    text: "De overgang sloeg bij mij hard toe. Opvliegers, slapeloosheid, onrust. Bij Balance-Flakkee vond ik rust. De behandelingen gaven me het gevoel dat mijn lichaam weer meewerkt in plaats van tegen me.",
  },
  {
    name: "Lisa, 35",
    text: "Ik kwam binnen met chronische vermoeidheid en het idee dat niemand me begreep. Jeannette nam de tijd, legde alles uit en na de eerste sessie voelde ik al verschil. Een aanrader voor elke vrouw.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Serene wellness sfeer met salie en kaarsen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-secondary text-sm tracking-[0.2em] uppercase mb-4 font-body"
            >
              Voetreflextherapie &amp; Hormoonspecialisatie — Middelharnis
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight text-sand mb-6"
            >
              Breng je hormonen weer in het ritme van je leven.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-sand/80 font-body leading-relaxed max-w-xl mb-8"
            >
              Jeannette Santifort helpt vrouwen op Goeree-Overflakkee hun natuurlijke balans te hervinden — met deskundige voetreflextherapie gericht op de hormoonhuishouding.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={3}
              href="#herken-je-dit"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Ontdek meer
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section id="herken-je-dit" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Herken je dit?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Veel vrouwen lopen jarenlang rond met klachten die niet serieus genomen worden. Jij verdient beter.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {symptoms.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-background rounded-lg p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Heart className="w-5 h-5 text-terra mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground font-body">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* De Oplossing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={treatmentImage}
                alt="Rustige behandelkamer van Balance-Flakkee"
                className="rounded-xl shadow-lg w-full object-cover max-h-[450px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm tracking-[0.15em] uppercase text-primary font-body font-semibold">
                  De aanpak
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                Een resetknop voor je zenuwstelsel
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Voetreflexologie werkt via reflexzones aan de voeten die in verbinding staan met je organen, klieren en zenuwstelsel. Door gerichte druk op specifieke punten wordt je lichaam gestimuleerd om zichzelf te herstellen.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Bij Balance-Flakkee richten we ons specifiek op de hormoonhuishouding. Dit betekent dat we werken aan de zones die verbonden zijn met je hypofyse, schildklier, bijnieren en eierstokken — de sleutelspelers in je hormonale balans.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Het resultaat? Minder klachten, meer energie, en een lichaam dat weer in harmonie werkt. Geen medicijnen, geen bijwerkingen — puur de kracht van je eigen herstelvermogen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-terra mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Wat anderen zeggen
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-xl p-7 shadow-sm relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Quote className="w-8 h-8 text-terra/20 absolute top-5 right-5" />
                <p className="text-sm text-foreground font-body leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <p className="text-xs font-semibold text-primary font-body tracking-wide">
                  — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
              Klaar om je balans te hervinden?
            </h2>
            <p className="text-primary-foreground/80 font-body max-w-lg mx-auto mb-8">
              Neem contact op en ontdek wat voetreflextherapie voor jou kan betekenen.
            </p>
            <a
              href="mailto:info@balance-flakkee.nl"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Neem contact op
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

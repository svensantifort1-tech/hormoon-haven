import { motion } from "framer-motion";
import { Heart, Shield, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import portrait from "@/assets/jeannette-portrait.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const OverMij = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-body font-semibold mb-4">
                Over Mij
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
                Jeannette Santifort
              </h1>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Als gediplomeerd voetreflextherapeut werk ik al jaren vanuit mijn praktijk in Middelharnis. Wat begon als een brede interesse in reflexologie, groeide uit tot een diepe specialisatie in de vrouwelijke hormoonhuishouding — het gebied waar ik het meeste verschil kan maken.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Die transitie ontstond niet vanuit theorie, maar vanuit de praktijk. Steeds meer vrouwen kwamen bij me met klachten die te maken hadden met hun cyclus, de overgang, of onverklaarbare vermoeidheid. Ik merkte dat de reguliere zorg hen vaak niet genoeg kon bieden. Dat dreef me om me verder te verdiepen — in de hormoonhuishouding, het zenuwstelsel, en de verbinding tussen lichaam en geest.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src={portrait}
                alt="Jeannette Santifort, voetreflextherapeut"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-6 h-6 text-terra mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
              Mijn missie
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Op Goeree-Overflakkee is het aanbod aan gespecialiseerde holistische zorg beperkt. Veel vrouwen voelen zich niet gehoord of lopen van arts naar arts zonder antwoorden. Ik geloof dat elke vrouw een plek verdient waar ze serieus genomen wordt — waar niet alleen naar symptomen gekeken wordt, maar naar het hele plaatje.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Balance-Flakkee is die plek. Een veilige haven in een drukke wereld, waar je even tot rust kunt komen en waar we samen werken aan jouw herstel. Geen haast, geen oordeel — alleen aandacht voor jou en je lichaam.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Mijn drijfveer is simpel: ik wil dat vrouwen zich weer goed voelen in hun eigen lichaam. Of je nu midden in de overgang zit, kampt met PMS, of gewoon het gevoel hebt dat er iets niet klopt — bij mij ben je welkom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methode */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={treatmentRoom}
                alt="Behandelkamer Balance-Flakkee"
                className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                Mijn werkwijze
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Medische basiskennis</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Mijn werk is geworteld in gedegen kennis van anatomie, fysiologie en de werking van het hormoonstelsel. Ik weet wat er in je lichaam gebeurt en kan dat vertalen naar een gerichte behandeling.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terra/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-terra" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Energetische werking</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Naast het fysieke aspect werk ik ook op energetisch niveau. Voetreflexologie stimuleert de energiebanen in je lichaam, waardoor blokkades worden opgeheven en je lichaam in staat wordt gesteld zichzelf te herstellen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Holistische benadering</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      De combinatie van medische kennis en energetisch werk maakt mijn aanpak uniek. Ik kijk niet alleen naar je klachten, maar naar jou als geheel — lichaam, geest en leefstijl.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverMij;

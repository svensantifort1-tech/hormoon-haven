import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-sage-light border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">Balance-Flakkee</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Praktijk voor voetreflextherapie &amp; hormoonspecialisatie in Middelharnis.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Navigatie</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/over-mij" className="text-sm text-muted-foreground hover:text-primary transition-colors">Over Mij</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Contact</h4>
          <p className="text-sm text-muted-foreground">Middelharnis, Goeree-Overflakkee</p>
          <p className="text-sm text-muted-foreground mt-1">info@balance-flakkee.nl</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Balance-Flakkee. Alle rechten voorbehouden.
      </div>
    </div>
  </footer>
);

export default Footer;

import { Helmet } from "react-helmet";
import { BlacklistEvents } from "../components/blacklist/events";
import { Hero } from "../components/blacklist/hero";
import { BlacklistVenue } from "../components/blacklist/venues";

const Blacklist = () => {
  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blacklist</title>
        <link rel="canonical" href="https://evenue.ng/blacklist" />
      </Helmet>
      <Hero />
      <section>
        <BlacklistVenue />
      </section>
      <section>
        <BlacklistEvents />
      </section>
    </article>
  );
};
export default Blacklist;

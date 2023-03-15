import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className="font-serif text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
      {/* <PrismicText field={slice.primary.author_link.data.name} /> */}
    </Bounded>
  );
};

export default Quote;

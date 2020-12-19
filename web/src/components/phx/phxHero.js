import React from "react";
import PortableText from "../portableText";
import CTALink from "../CTALink";
import { makeStyles } from "@material-ui/core/styles";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

const useStyles = makeStyles(theme => ({
  hero: props => ({
    width: "100%",
    backgroundImage: `url(${imageUrlFor(buildImageObj(props.illustration.image))
      .width(window.innerWidth)
      .height(window.innerHeight)
      .auto("format")
      .url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    paddingTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  })
}));

const styles = {
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    paddingTop: 75,
    paddingBottom: 100,
    maxWidth: 800
  }
};

function PhxHero(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.hero}>
      <div style={styles.contentContainer}>
        <p className="uppercase tracking-loose w-full">{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div>
    </div>
  );
}

export default PhxHero;

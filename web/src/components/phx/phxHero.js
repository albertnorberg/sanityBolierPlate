import React from "react";
import PortableText from "../portableText";
// import clientConfig from "../../../client-config";
import CTALink from "../CTALink";
// import { getFluidGatsbyImage } from "gatsby-source-sanity";
import {
  makeStyles
  // withTheme
} from "@material-ui/core/styles";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
// import withWidth from "@material-ui/core/withWidth";

// const maybeImage = illustration => {
//   let img = null;
//   if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
//     const fluidProps = getFluidGatsbyImage(
//       illustration.image.asset._id,
//       { maxWidth: 960 },
//       clientConfig.sanity
//     );

//     img = (
//       <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
//     );
//   }
//   return img;
// };

const useStyles = makeStyles(theme => ({
  hero: props => ({
    width: "100%",
    backgroundImage: `url(${imageUrlFor(buildImageObj(props.illustration.image))
      .width(window.innerWidth)
      .height(window.innerHeight)
      .auto("format")
      .url()})`,
    // height: props?.heroStyles?.height || "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    paddingTop: 100,
    // color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // textAlign: "center",
  })
}));

const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    paddingTop: 75,
    paddingBottom: 100,
    maxWidth: 450
  }
};

function PhxHero(props) {
  // const img = maybeImage(props.illustration);
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
            buttonActionClass="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            // buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div>

      {/* <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full">{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div> */}
    </div>
  );
}

export default PhxHero;

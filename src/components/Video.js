import React from "react";
import { Embed } from "semantic-ui-react";
import { extractor } from "../util/IDExtractor";

const EmbedYoutubeVideo = (props) => (
  <Embed
    id={extractor(props.url)}
    placeholder="https://react.semantic-ui.com/images/image-16by9.png"
    source="youtube"
  />
);

export default EmbedYoutubeVideo;

import React from "react";

/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";

import Slide from "react-reveal/Slide";
import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  themes,
} from "@merc/react-timeline";

import { Text } from "../core-ui";
import { DBO } from "../images";
import { FONTS_SIZE } from "../constants/styles";

export default function ProjectTimeLine() {
  return (
    <Timeline
      theme={{
        ...themes.default,
        imageAtom: {
          objectFit: "contain",
          overflow: "hidden",
          width: "100%",
          maxHeight: "200px",
        },
        card: {
          borderRadius: "4px",
          backgroundColor: "#fff",
          color: "#333",
          padding: "10px",
          boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
          width: "auto",
          maxWidth: "560px",
          a: {
            color: "#EC24B5",
          },
        },
        imageText: {
          marginBottom: "10px",
          fontSize: FONTS_SIZE.xLarge + "px",
          fontWeight: 500,
        },
      }}
    >
      <Events>
        <Slide right>
          <TextEvent date="2019" text="**Markdown** is *supported*" />
        </Slide>

        <ImageEvent date="2019-2020" text="DBO Toko App" src={DBO}>
          <div css={styles.projectCompanyContainer}>
            <Text style={styles.projectCompanyText}>Kode Fox</Text>
          </div>
          <div>
            <Text style={styles.projectDescText}>
              This Project is create somet hting like one is ownesme projeckt
              lnotjoml like other
            </Text>
          </div>
        </ImageEvent>
      </Events>
    </Timeline>
  );
}

const styles = {
  projectCompanyContainer: css({
    borderTop: "1px solid",
    paddingTop: 8,
    marginTop: 22,
  }),
  projectCompanyText: css({
    fontsize: FONTS_SIZE.large,
    marginBottom: 12,
  }),
  projectDescText: css({ fontsize: FONTS_SIZE.medium }),
};

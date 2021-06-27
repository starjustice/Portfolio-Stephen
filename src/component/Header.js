import React from "react";

/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import Bounce from "react-reveal/Bounce";

import { COLORS, FONTS_SIZE } from "../constants/styles";
import { Text } from "../core-ui";
import { MyImage } from "../images";
import { DESCRIPTION } from "../data/aboutMe";

export default function Header() {
  return (
    <Bounce left>
      <div css={styles.headerContainer}>
        <div css={styles.leftColumn}>
          <div css={{}}>
            <Text style={styles.introductionText}>
              <Bounce left cascade>
                HI !
              </Bounce>
            </Text>
            <Text style={styles.introductionText}>
              <Bounce left cascade>
                {DESCRIPTION.introductionName}
              </Bounce>
            </Text>
          </div>
          <Text style={{ ...styles.nameText, marginTop: "20px" }}>
            <Bounce left cascade>
              STEPHEN
            </Bounce>
          </Text>
          <Text style={{ ...styles.nameText, marginTop: "5px" }}>
            <Bounce left cascade>
              MULYADI
            </Bounce>
          </Text>
        </div>
        <div css={styles.middleColumn}>
          <img alt="" src={MyImage} css={styles.avatar} />
        </div>
        <div css={styles.rightColumn}>
          <Text style={styles.nameText}>
            <Bounce right cascade>
              {DESCRIPTION.introductionName}
            </Bounce>
          </Text>
        </div>
      </div>
    </Bounce>
  );
}

const styles = {
  headerContainer: css({
    display: "flex",
    width: "100%",
    height: "70vh",
    backgroundColor: COLORS.darkIndigo,
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  }),
  leftColumn: css({
    paddingLeft: 42,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  }),
  introductionText: css({
    fontSize: FONTS_SIZE.xxLarge,
    fontWeight: "bold",
    color: COLORS.white,
  }),
  nameText: css({
    fontSize: FONTS_SIZE.jumbo,
    fontWeight: "bold",
    color: COLORS.teal,
  }),
  middleColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  rightColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: 42,
  }),
  avatar: css({
    width: 250,
    height: 300,
    borderRadius: 250,
    [`@media (max-width: 608px)`]: {
      width: 150,
      height: 150,
      borderRadius: 150,
    },
  }),
};

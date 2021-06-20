import React from "react";

/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import { COLORS } from "../constants/styles";
import { Text } from "../core-ui";
import { MyImage } from "../assets/images";

export default function Header() {
  return (
    <div css={styles.headerContainer}>
      <div css={styles.leftColumn}>
        <Text>siapa saja</Text>
      </div>
      <img alt="" src={MyImage} css={styles.avatar} />
      <div></div>
    </div>
  );
}

const styles = {
  headerContainer: css({
    display: "flex",
    width: "100%",
    height: "60vh",
    backgroundColor: COLORS.teal,
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  }),
  leftColumn: css({
    paddingLeft: 42,
    paddingRight: 42,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  }),
  rightColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  avatar: css({
    width: 250,
    height: 250,
    borderRadius: 250,
    [`@media (max-width: 608px)`]: {
      width: 150,
      height: 150,
      borderRadius: 150,
    },
  }),
};

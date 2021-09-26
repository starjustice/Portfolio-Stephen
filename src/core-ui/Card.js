import React from "react";
/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import { COLORS } from "../constants/styles";

export default function Card(props) {
  let { style, children } = props;

  <div css={[styles.shadowStyle, styles.cardContainer, style]}>{children}</div>;
}

function Header({ children, style }) {
  return (
    <div>
      <div css={[styles.header, style]}>{children}</div>
      <div css={styles.divider} />
    </div>
  );
}

function Content({ children, style }) {
  return <div css={[styles.content, style]}>{children}</div>;
}

Card.Header = Header;
Card.Content = Content;

const styles = {
  shadowStyle: css({
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      height: 4,
      width: 0,
    },
  }),
  cardContainer: css({
    backgroundColor: COLORS.white,
    padding: 24,
  }),
  header: css({
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 16,
  }),
  divider: css({
    height: 0.5,
    opacity: 0.7,
    backgroundColor: COLORS.black,
    alignSelf: "stretch",
  }),
  content: css({ paddingTop: 16 }),
};

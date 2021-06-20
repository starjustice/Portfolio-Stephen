/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import { FONTS_SIZE } from "../constants/styles";

export default function Text(props) {
  const { style } = props;

  return (
    <div css={[styles.defaultText, style]} {...props}>
      {props.children}
    </div>
  );
}

const styles = {
  defaultText: css({
    fontSize: FONTS_SIZE.small,
    display: "flex",
    flexDirection: "row",
  }),
};

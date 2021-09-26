import React from "react";
/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";

import { Card, Text } from "../core-ui";
import { skill } from "../data/skill";

export default function SkillCard() {
  return (
    <div>
      {skill.map((data) => {
        return (
          <Card>
            <Card.Header>
              <Text>{data.tech}</Text>
            </Card.Header>
            <Card.Content>
              {data.list.map((listData) => {
                return <Text>{listData}</Text>;
              })}
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
}

const styles = {
  techText: css({
    textTransform: "uppercase",
  }),
  projectCompanyText: css({
    fontsize: FONTS_SIZE.large,
    marginBottom: 12,
  }),
  projectDescText: css({
    fontsize: FONTS_SIZE.medium,
    textAlign: "justify",
    marginTop: 10,
  }),
  labelContainerText: css({ fontsize: FONTS_SIZE.small }),
  labelContainerTechnology: css({
    background: COLORS.indigo,
    marginRight: 8,
    padding: 8,
    borderRadius: 18,
    fontsize: FONTS_SIZE.small,
  }),
};

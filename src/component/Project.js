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

import { Text, Row } from "../core-ui";
import { DBO } from "../images";
import { COLORS, FONTS_SIZE } from "../constants/styles";
import { data } from "../data/work";

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
        textAtom: {
          marginBottom: "10px",
          fontSize: FONTS_SIZE.xLarge + "px",
          fontWeight: 500,
        },
      }}
    >
      <Events>
        {data.map(
          ({ title, desc, image, technology, color, company, year }) => {
            return (
              <>
                {image ? (
                  <ImageEvent date={year} text={title} src={image}>
                    <div css={styles.projectCompanyContainer}>
                      <Text style={styles.projectCompanyText}>{company}</Text>
                    </div>
                    {technology.length > 0 ? (
                      <Row>
                        {technology.map((name) => {
                          return (
                            <div
                              css={[
                                styles.labelContainerTechnology,
                                { backgroundColor: color },
                              ]}
                            >
                              <Text
                                style={{
                                  color:
                                    color === COLORS.darkPurple
                                      ? COLORS.white
                                      : COLORS.black,
                                }}
                              >
                                {name}
                              </Text>
                            </div>
                          );
                        })}
                      </Row>
                    ) : null}

                    <div>
                      <Text style={styles.projectDescText}>{desc}</Text>
                    </div>
                  </ImageEvent>
                ) : (
                  <TextEvent date={year} text={title}>
                    <div css={styles.projectCompanyContainer}>
                      <Text style={styles.projectCompanyText}>{company}</Text>
                    </div>
                    <div>
                      {technology.length > 0 ? (
                        <Row>
                          {technology.map((name) => {
                            return (
                              <div
                                css={[
                                  styles.labelContainerTechnology,
                                  { backgroundColor: color },
                                ]}
                              >
                                <Text>{name}</Text>
                              </div>
                            );
                          })}
                        </Row>
                      ) : null}
                      <Text style={styles.projectDescText}>{desc}</Text>
                    </div>
                  </TextEvent>
                )}
              </>
            );
          }
        )}
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

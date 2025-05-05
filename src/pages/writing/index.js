import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  services,
  solution,
  leadership,
  datawriting,
  writingsample,
  datastructure
} from "../../content_option";

export const Writing = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical Writing | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Technical Writing</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{datawriting.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{datawriting.aboutme}</p>
              <p>{datawriting.aboutme1}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{writingsample.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <a href={writingsample.aboutme} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme}</p>
              </a>
              <a href={writingsample.aboutme1} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme1}</p>
              </a>
              <a href={writingsample.aboutme2} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme2}</p>
              </a>
              <a href={writingsample.aboutme3} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme3}</p>
              </a>
              <a href={writingsample.aboutme4} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme4}</p>
              </a>
              <a href={writingsample.aboutme5} target="_blank" rel="noopener noreferrer">
                <p>{writingsample.aboutme5}</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{datastructure.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{datastructure.aboutme}</p>
              <p>{datastructure.aboutme1}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

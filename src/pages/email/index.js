import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataemail,
  meta,
  campaignsample,
  emailsample,
  metrics,
  skills,
  services,
  solution,
  leadership
} from "../../content_option";

export const Email = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Email Marketing, CRM & Automation | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Email Marketing, CRM & Automation</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataemail.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataemail.aboutme}</p>
              <p>{dataemail.aboutme1}</p>
              <p>{dataemail.aboutme2}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Campaign Samples</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="mb-5 po_items_ho">
              {campaignsample.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Email Sequence Samples</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="mb-5 po_items_ho">
              {emailsample.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{metrics.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h3>{metrics.aboutme}</h3>
              <p>{metrics.aboutme1}</p>
              <p>{metrics.aboutme2}</p>
              <h3>{metrics.aboutme3}</h3>
              <p>{metrics.aboutme4}</p>
              <p>{metrics.aboutme5}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

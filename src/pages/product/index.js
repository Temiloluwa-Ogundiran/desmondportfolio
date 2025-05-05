import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  dataproduct,
  dataskill,
  skills,
  services,
  solution,
  leadership
} from "../../content_option";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Product Management | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Product Management</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataproduct.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataproduct.aboutme}</p>
              <p>{dataproduct.aboutme1}</p>
              <p>{dataproduct.aboutme2}</p>
              <p>{dataproduct.aboutme3}</p>
              <h3>{dataproduct.aboutme4}</h3>
              <p>{dataproduct.aboutme5}</p>
              <p>{dataproduct.aboutme6}</p>
              <p>{dataproduct.aboutme7}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Real-World Product Solutions</h3>
          </Col>
          <Col lg="7">
            {solution.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  <p className="service_desc">{data.cdescription}</p>
                  <p className="service_desc">{data.ccdescription}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataskill.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h3 className="service__title">{dataskill.aboutme}</h3>
              <p>{dataskill.aboutme1}</p>
              <p>{dataskill.aboutme2}</p>
              <p>{dataskill.aboutme3}</p>
              <h3 className="service__title" >{dataskill.aboutme4}</h3>
              <p>{dataskill.aboutme5}</p>
              <p>{dataskill.aboutme6}</p>
              <p>{dataskill.aboutme8}</p>
              <h3 className="service__title">{dataskill.aboutme9}</h3>
              <p>{dataskill.aboutme10}</p>
              <p>{dataskill.aboutme11}</p>
              <p>{dataskill.aboutme12}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Leadership and Strategic Pieces</h3>
          </Col>
          <Col lg="7">
            {leadership.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Product Pieces</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                <a href="https://medium.com/@desmonddickson767/the-fixers-how-product-managers-keep-ai-firms-from-crashing-and-burning-5caadeb44aa1" target="_blank" rel="noopener noreferrer">the-fixers-how-product-managers-keep-ai-firms-from-crashing-and-burning</a>
              </p>
              <p>
                <a href="https://medium.com/@desmonddickson767/the-silent-weapon-how-product-management-and-technical-writing-go-hand-in-hand-185503fbc169" target="_blank" rel="noopener noreferrer">the-silent-weapon-how-product-management-and-technical-writing-go-hand-in-hand</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

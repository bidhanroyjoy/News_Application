import React from "react";
import { Select, Typography, Row, Col, Avatar, Card, Title } from "antd";
import { links } from "../utils/Data";

const Home = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        {links.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.photo}
                  alt={news}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                   <Text>
                    {moment(news.datepublished).startOf("ss").fromNow()}
                  </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;

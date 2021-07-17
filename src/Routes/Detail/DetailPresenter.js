import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.6;
  position: absolute;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 3px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`; // span은 margin 값을 갖지 않는다.

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0px 15px; // 위아래는 0이고 좌우는 15px margin
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.3;
  width: 50%;
  margin-top: 20px;
`;

const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  height: 100%;
  width: 30%;
  z-index: 1;
  background-position: center center;
  background-size: cover;
`;
const Video = styled.div``;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Namflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {" "}
          {result.original_title ? result.original_title : result.original_name}
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w300/${result.poster_path}`
              : require(`../../assets/noPosterSmall.png`).default
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date ? result.release_date.substring(0, 4) : ""}
              {
                result.first_air_date
                  ? result.first_air_date.substring(0, 4)
                  : "" /*연도가 없을경우 나타나는 에러처리 */
              }
            </Item>
            <Divider>•</Divider>
            <Item>{result.runtime || result.episode_run_time} min</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres.map((item, index) =>
                index === result.genres.length - 1
                  ? item.name
                  : `${item.name} / `
              )}
            </Item>
            <Divider>•</Divider>
            <a href={result.homepage} target="_blank">
              <Item>HomePage</Item>
            </a>
            <Divider>•</Divider>
            <Logo
              logo={result.production_companies.map((item) => (
                <span>{`https://image.tmdb.org/t/p/w300/${item.logo_path}`}</span>
              ))}
            />
            <Divider>•</Divider>
            <Item>
              {result.production_companies.map((item, index) => {
                if (index === 0) {
                  return <span>{item.origin_country}</span>;
                }
              })}
            </Item>
            <Divider>•</Divider>
          </ItemContainer>
          <ReactPlayer
            width="500px"
            height="300px"
            url={`https://www.youtube.com/watch?v=${
              result.videos && result.videos.results.map((item) => item.key)
            }`}
          />
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

export default DetailPresenter;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  position: absolute;
  filter: blur(2px);
  opacity: 0.6;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  top: 0;
  left: 0;
  position : absolute
  background-size: cover;
  background-position : center center;
  border-radius: 4px;
  background-image: url(${(props) => props.bgImage});
`;

const Text = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Item = styled.div``;

const Divider = styled.div`
  margin: 0 10px;
  opacity: 0.7;
`;

const Overview = styled.p`
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.7;
  width: 50%;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
              : require(`../../assets/noPosterSmall.png`).default
          }
        />
        <Data>
          <Text>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Text>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

export default DetailPresenter;

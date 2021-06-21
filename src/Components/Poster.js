import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  background-position: center center;
`;

const Rating = styled.span`
  font-size: 10px;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, title, year, rating, imgUrl, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imgUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.number,
  imgUrl: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;

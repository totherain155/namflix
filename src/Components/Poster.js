import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Year = styled.span``;

const Title = styled.span``;

const Rating = styled.span``;

const Poster = ({ id, title, year, rating, imgUrl, isMovie = false }) => (
  <Link to={isMovie ? `/movie/:${id}` : `/show/:${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imgUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating} / 10
        </Rating>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </ImageContainer>
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

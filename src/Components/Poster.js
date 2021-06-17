import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Year = styled.span``;

const Title = styled.span``;

const Rating = styled.span``;

const Poster = ({ id, year, rating, title, imgUrl, isMovie = false }) => (
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
);

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
};

export default Poster;

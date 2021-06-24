import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 23px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  loading,
  tvResults,
  searchTerm,
  updateTerm,
  handleSubmit,
  error,
}) => (
  <Container>
    <Helmet>
      <title>Search | Namflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imgUrl={movie.poster_path}
                year={movie.release_date}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Shows">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imgUrl={show.poster_path}
                year={show.first_air_date}
                rating={show.vote_average}
                // {isMovie}의 default 값은 false기 때문에 적지 않아도 된다.
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {movieResults &&
          tvResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && (
            <Message color="#bdc3c7" text="Nothing found" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func,
};

export default SearchPresenter;

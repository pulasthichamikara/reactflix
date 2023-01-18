import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import PageHeader from '../../components/pageHeader/PageHeader';
import Thumbnail from '../../components/tumbnail/Thumbnail';
import './catelog.scss';

export default function Catelog() {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPge, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (category in movieType) {
      const getMovies = async () => {
        try {
          const params = { page: currentPge };
          const response = await tmdbApi.getMovieList(category, params);
          setMovies([...movies, ...response.results]);
          setTotalPages(response.total_pages);

          console.log(movies);
        } catch (err) {
          console.log(err);
        }
      };
      getMovies();
    } else {
      navigate('/');
    }
  }, [currentPge]);

  const loadMore = () => {
    setCurrentPage(currentPge + 1);
  };

  return (
    <div>
      <PageHeader title={category} className="mb-2" />
      <div className="container">
        <div className="movie-grid">
          {movies.length > 0 &&
            movies.map((item) => (
              <div key={item.id}>
                <Thumbnail
                  url={'/'}
                  image={item.poster_path}
                  title={item.title}
                />
              </div>
            ))}
        </div>
        <div className="grid-footer">
          <button className="btn-box button" onClick={loadMore}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

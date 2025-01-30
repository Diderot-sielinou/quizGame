import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="row">
          <h1>welcome in quiz game</h1>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            officiis consequuntur impedit sequi natus delectus incidunt quam vel
            temporibus magnam?
          </p>
        </div>
        <div className="row">
          {isLoading ? (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton"
            >
              start game
            </button>
          ) : (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton disabled"
            >
              start game
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

WelcomCart.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

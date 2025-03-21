const App = () => {
  return (
    <div className="container">
      <div className="welcome-text">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "register.html")}
        >
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = "signin.html")}
        >
          Already Registered? Login
        </button>
      </div>

      <div className="bottom-indicator"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

const App = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", formData);

    // Redirect to settings.html after successful login
    window.location.href = "settings.html";
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>
          Sign in to your
          <br />
          PopX account
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-login" type="submit">
            Login
          </button>
        </form>
      </div>

      <div className="bottom-indicator"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

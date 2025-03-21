const App = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, isAgency: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("All required fields must be filled!");
      return;
    }

    // Save data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Redirect to settings page
    window.location.href = "settings.html";
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label required">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Phone number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Are you an Agency?</label>
            <div className="radio-group">
              <div
                className="radio-option"
                onClick={() => handleRadioChange("yes")}
              >
                <div
                  className={`custom-radio ${
                    formData.isAgency === "yes" ? "selected" : ""
                  }`}
                ></div>
                <span className="radio-label">Yes</span>
              </div>

              <div
                className="radio-option"
                onClick={() => handleRadioChange("no")}
              >
                <div
                  className={`custom-radio ${
                    formData.isAgency === "no" ? "selected" : ""
                  }`}
                ></div>
                <span className="radio-label">No</span>
              </div>
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

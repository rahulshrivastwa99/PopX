const App = () => {
  // Get saved user data from localStorage
  const savedData = JSON.parse(localStorage.getItem("userData")) || {};

  return (
    <div className="container">
      <div className="header">
        <h1>Account Settings</h1>
      </div>

      <div className="profile-section">
        <div className="profile-photo-container">
          <img
            src="your-profile-pic.jpg"
            alt="Profile"
            className="profile-photo"
          />
          <div className="camera-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-name">{savedData.fullName || "N/A"}</div>
          <div className="profile-email">{savedData.email || "N/A"}</div>
        </div>
      </div>

      <div className="profile-details">
        <p>
          <strong>Phone:</strong> {savedData.phone || "N/A"}
        </p>
        <p>
          <strong>Company:</strong> {savedData.company || "N/A"}
        </p>
        <p>
          <strong>Agency:</strong> {savedData.isAgency === "yes" ? "Yes" : "No"}
        </p>
      </div>

      <div className="empty-section"></div>
      <div className="empty-section"></div>

      <div
        className="button-container"
        style={{ padding: "16px", textAlign: "center" }}
      >
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => (window.location.href = "register.html")}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

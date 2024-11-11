function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1>Welcome to the Homepage</h1>
      <img
        src="https://lh5.googleusercontent.com/proxy/AoyS9UZEzh-M7RfxzZ_UZeJ2Xaq3uYHhYoj6iQFceoluoFRM-PZX589QAzmsGg_TFky78FxkrGktf87XQOwFoUhE2K2BdnaYKk4DtfhQdOdEcGMaf1slkg8"
        alt="Main page photo"
        style={{ marginTop: "20px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default Home;

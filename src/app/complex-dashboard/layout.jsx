const Layout = ({ children, notifications, revenue, users }) => {
  console.log(notifications);
  return (
    <div>
      <h1>complex dashboard</h1>
      {children}
      <div style={{ display: "flex"}}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", flex: 1}}>{users}</div>
          <div style={{ display: "flex", flex: 1}}>{revenue}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 3 }}>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

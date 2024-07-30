const Card = ({ children }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
    flexDirection: 'column'
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;

function UserCard({ name, email, avatar }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "8px" }}>
            <img src={avatar} alt={name} style={{ width: "50px", borderRadius: "50%" }} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}
export default UserCard;
export default function SearchResultsItem({ name, email }) {
    return(
        <div style={{ 
            backgroundColor: "#E8E7E7", 
            marginTop: 5, 
            marginBottom: "5px", 
            padding: 10
        }}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}
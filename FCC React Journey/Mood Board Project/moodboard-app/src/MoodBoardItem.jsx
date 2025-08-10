export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img src={image} className="mood-board-image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

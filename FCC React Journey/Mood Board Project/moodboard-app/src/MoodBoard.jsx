import { MoodBoardItem } from "./MoodBoardItem";

export function MoodBoard() {
    return(
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem
                    color="#1A2C2C"
                    image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                    description="Caribbean"
                />
                <MoodBoardItem color="#303843" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Gawadar Beach" />
                <MoodBoardItem color="#5486cb" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Cape Town" />
                <MoodBoardItem color="#BF3D7E" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" description="Suez Canal" />
                <MoodBoardItem color="#E74C3C" image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" description="Santorini" />
                <MoodBoardItem color="#95A5A6" image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg" description="Istanbul" />
            </div>
        </div>
    );
}

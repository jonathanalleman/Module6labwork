import { useState } from "react";


function Emoji() {
const [Emoji, setEmoji] = useState('\u{1F600}');

const handlePunchInFace = () => {
    let newEmoji = Emoji === '\u{1F600}'? '\u{1F620}' : '\u{1F600}'
    setEmoji(newEmoji)
}


return (
<div className="MoodChanger componentBox">
Current Emoji: {Emoji}
{/* <button
    onClick={()=> setEmoji('\u{1F600}')}>Money!
</button> */}
<button
onClick= {handlePunchInFace}>Switch</button>

</div>
)
}

export default Emoji;
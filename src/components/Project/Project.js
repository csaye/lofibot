import * as Tone from 'tone';

const synth = new Tone.Synth();
synth.toDestination();

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function Project() {

  return (
    <>
      <NoteButtons />
    </>
  );
}

function NoteButtons() {

  function playSound(e) {
    synth.triggerAttackRelease(e.target.getAttribute('note'), 0.25);
  }

  return (
    <>
    {
      notes.map(n => {
        return <button key={`${n}4`} note={`${n}4`} onClick={playSound}>{n}</button>
      })
    }
    </>
  );
}

export default Project;

import Player from './components/Player.jsx';
import TimerChallenge from "./components/timer-challenge/timer-challenge.jsx";

function App() {
  const challenges = [
    {title: 'Easy', targetTime: 1},
    {title: 'Not Easy', targetTime: 5},
    {title: 'Getting Tough', targetTime: 10},
    {title: 'Pros Only', targetTime: 15},
  ];

  return (
    <>
      <Player/>
      <div id="challenges">
        {challenges.map(challenge => <TimerChallenge
          key={challenge.title}
          title={challenge.title}
          targetTime={challenge.targetTime}
        />)}
      </div>
    </>
  );
}

export default App;

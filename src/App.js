import ForwordrefExample from "./components/ForwordrefExample";
import UsememoExample from "./components/UsememoExample";
import UsehookExample from "./components/UsehookExample";
import Action from "./components/Action";
import FormState from "./components/FormState";
import FormStatus from "./components/FormStatus";
import Optimistic from "./components/Optimistic";

function App() {
  return (
    <div className='App'>
      <UsememoExample />
      <ForwordrefExample />
      <UsehookExample />
      <Action />
      <FormState />
      <FormStatus />
      <Optimistic />
    </div>
  );
}

export default App;

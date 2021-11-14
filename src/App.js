import { ChatEngine } from 'react-chat-engine';

import ChatFeed  from './components/ChatFeed';

import './App.css';

function App() {
  return (
    <ChatEngine 
    
      height="100vh"
      projectID="e6686382-6547-4837-9206-c5bdca8291dc"
      userName="tokslaw"
      userSecret="Tokslaw001"  
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps }/> } 

    />
      
  );
}

export default App;

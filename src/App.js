import React from 'react';
import './App.css';
import{Route, Switch, Link} from 'react-router-dom';
import STORE from './STORE';
import Folder from './Folder/Folder';
import Notes from './Notes/Notes';
import NoteCard from './Notes/NoteCard';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        store: STORE
    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' >Noteful</Link>
        </header>

          <main>

          <Switch>
          <Route exact path='/' render={() => 
            <Folder store={this.state.store} />
         }/>
          <Route path="/notes/:id" render={(history) => (
            <>
            <Folder {...this.state}/>
            <Notes {...this.state} 
                   {...history}/>
            </>
          )} /> }/>
          <Route path="/notecard/:id" render={(history) => (
            <NoteCard {...history} 
                      {...this.state}/>
          )}/>
          
          </Switch>
          </main>
      </div>
  );
  }
}

export default App;

// <Route path='/folder' component={Folder} />
//             <Route path='/Notes' component={Notes} />
//             <Route component={NotFound} />



// <Switch>
// <Route exact path='/' render={() => <Main folders={this.state.store.folders}/>}/>
// <Route path='/notes'>
//     <Notes/>
// </Route>
// </Switch>
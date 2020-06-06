import React from 'react';
import './App.css';
import{Route, Switch, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Folder from './Folder/Folder';
import Notes from './Notes/Notes';
import NoteCard from './Notes/NoteCard';
import NotefulContext from './NotefulContext';


class App extends React.Component {
  
    state={
        notes: [],
        folders: []
    }

  componentWillMount(){
    const folderurl='http://localhost:9090/folders';

    fetch(folderurl)
    .then(reponse => reponse.json())
    .then(responseJson => this.setState({
      folders: responseJson
    }))
    .catch(err => 'something went wrong');

    const notesurl='http://localhost:9090/notes';
    fetch(notesurl)
    .then(response => response.json())
    .then(responseJson => this.setState({
      notes: responseJson
    }))
    .catch(err => 'something went wrong');
  }

  render(){

    const {history} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' >Noteful</Link>
        </header>

          <main>
          <NotefulContext.Provider value={{
            notes: this.state.notes,
            folders: this.state.folders,
            history,
          }}>

          <Switch>
          <Route exact path='/' component={Folder}/>
          <Route path="/notes/:id" render={ r => (
            <>
            <Folder />
            <Notes noteId={r.match.params.id}/>
            </>
          )} /> 
          <Route path="/notecard/:id" render={ r => (
        <NoteCard noteId={r.match.params.id} />  
          )}/>
          </Switch>
          </NotefulContext.Provider>
          
          </main>
      </div>
  );
  }
}

export default withRouter(App);

// <Route path='/folder' component={Folder} />
//             <Route path='/Notes' component={Notes} />
//             <Route component={NotFound} />



// <Switch>
// <Route exact path='/' render={() => <Main folders={this.state.store.folders}/>}/>
// <Route path='/notes'>
//     <Notes/>
// </Route>
// </Switch>
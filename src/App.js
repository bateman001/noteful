import React from 'react';
import './App.css';
import{Route, Switch, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Folder from './Folder/RenderFolder';
import Notes from './Notes/RenderNotes';
import NoteCard from './Notes/NoteCard';
import NotefulContext from './NotefulContext';
import NoteFullError from './NoteFullError';


class App extends React.Component {
  
    state={
        notes: [],
        folders: [],
        folderFormHidden: false,
        noteFormHidden: false,
        newFolder: {},
        newNote: {
        name: '',
        modified: '',
        content: ''},
    }

  componentDidMount(){
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

  removeNote(noteId){

    const notes = this.state.notes.filter(note => note.id !== noteId)

    this.setState({
      notes: notes
    });
  }

  showForm(type){

  if(type === 'folder'){
    this.setState({
      folderFormHidden: !this.state.folderFormHidden
    })
  }else if(type === 'note'){
    this.setState({
      noteFormHidden: !this.state.noteFormHidden
    })
  }
  }

  updateFolder(name){

    this.setState({
      newFolder: {
        name: name
      }
    })
  }

  updateNote(data, id){
    if(id === "name"){
      this.setState({
        newNote: {...this.state.newNote, name: data}
      })
    }else if(id === "modified"){
      this.setState({
        newNote: {...this.state.newNote, modified: data}
      })
    }else if(id === "content"){
      this.setState({
        newNote: {...this.state.newNote, content: data}
      })
    }
    }

  addFolder(folder){
    this.setState({
      newFolder: {
        name: ''
      },
      folders: [...this.state.folders, folder],
      folderFormHidden: !this.state.folderFormHidden
    })
  }

  addNote(note){
    this.setState({
      newNote: {},
      notes: [...this.state.notes, note],
      noteFormHidden: !this.state.noteFormHidden
    })
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
            newFolder: this.state.newFolder,
            newNote: this.state.newNote,
            history,
            removeNote: id => this.removeNote(id),
            folderFormHidden: this.state.folderFormHidden,
            noteFormHidden: this.state.noteFormHidden,
            addFolder: folder => this.addFolder(folder),
            showForm: type => this.showForm(type),
            updateFolder: name => this.updateFolder(name),
            updateNote: (data, id) => this.updateNote(data, id),
            addNote: note => this.addNote(note)
          }}>
        <NoteFullError>
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
        </NoteFullError>
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
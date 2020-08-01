import React from 'react';
import './App.css';
import config from './config';
import{Route, Switch, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import RenderFolder from './Folder/RenderFolder';
import RenderNotes from './Notes/RenderNotes';
import NoteCard from './Notes/NoteCard';
import NotefulContext from './NotefulContext';
import AllNotes from './Notes/AllNotes';


class App extends React.Component {
  
    state={
        notes: [],
        folders: [],
        folderFormHidden: false,
        noteFormHidden: false,
        newFolder: {},
        newNote: {
          name: '',
          content: '',
          folder_id: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1"},
        foldererr: false,
        noteErr: false,
        folderClicked: null,
    }

  componentDidMount(){
    const folderurl= config.API_ENPOINT + '/folders';

    fetch(folderurl)
    .then(reponse => reponse.json())
    .then(responseJson => this.setState({
      folders: responseJson
    }))
    .catch(err => 'something went wrong');

    const notesurl= config.API_ENPOINT + '/notes';

    fetch(notesurl)
    .then(response => response.json())
    .then(responseJson => this.setState({
      notes: responseJson
    }))
    .catch(err => 'something went wrong');
  }

//FORM FUNCTIONS
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

  //FOLDER FUNCTIONS
  updateFolder(name){
    this.setState({
      newFolder: {
        name: name
      }
    })
  }

  folderToggleErr(){
    this.setState({
      foldererr: !this.state.foldererr
    })
  }

  addFolder(folder){
    this.setState({
      newFolder: {
        name: ''
      },
      folders: [...this.state.folders, folder],
      folderFormHidden: !this.state.folderFormHidden,
    });
    this.folderToggleErr();
  }

  changeClicked(folder_id){
    this.setState({
      folderClicked: folder_id
    })
  }

 //NOTE FUNCTIONS
  updateNote(data, id){
    if(id === "name"){
      this.setState({
        newNote: {...this.state.newNote, name: data}
      })
    }else if(id === "content"){
      this.setState({
        newNote: {...this.state.newNote, content: data}
      })
    }else if(id === "folder_id"){
      this.setState({
        newNote: {...this.state.newNote, folder_id: data}
      })
    }
  }

  addNote(note){
    this.setState({
      newNote: {},
      notes: [...this.state.notes, note],
      noteFormHidden: !this.state.noteFormHidden
    });

    this.noteToggleErr();
  }

  removeNote(noteId){

    const notes = this.state.notes.filter(note => note.id !== noteId)

    this.setState({
      notes: notes,
    });
  
  }

  noteToggleErr(){
    this.setState({
      noteErr: !this.state.noteErr
    })
  }

  
  render(){
    const {history} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' onClick={() => this.changeClicked(null)}>Noteful</Link>
        </header>

          <main>
          <NotefulContext.Provider value={{
            ...this.state,
            history,
            removeNote: id => this.removeNote(id),
            addFolder: folder => this.addFolder(folder),
            showForm: type => this.showForm(type),
            updateFolder: name => this.updateFolder(name),
            updateNote: (data, id) => this.updateNote(data, id),
            addNote: note => this.addNote(note),
            folderToggleErr: () => this.folderToggleErr(),
            noteToggleErr: () => this.noteToggleErr(),
            changeClicked: id => this.changeClicked(id),
            handleChange: event => this.handleChange(event)
          }}>

        <Switch>
          <Route exact path='/' render={() => (
            <>
            <RenderFolder />
            <AllNotes />
            </>
            )}/>
          <Route path="/folder/:id" render={ r => (
            <>
            <RenderFolder />
            <RenderNotes folder_id={r.match.params.id}/>
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

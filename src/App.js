import React from 'react';
import './App.css';
import{Route, Switch, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import RenderFolder from './Folder/RenderFolder';
import RenderNotes from './Notes/RenderNotes';
import NoteCard from './Notes/NoteCard';
import NotefulContext from './NotefulContext';


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
        foldererr: false,
        noteErr: false,
        folderClicked: null
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

  changeClicked(parent){

    if(this.state.folderClicked === null){
      document.getElementById(`${parent.id}`).classList.add('class', 'clicked');

      this.setState({
        folderClicked: parent.id
      });

    }else if(this.state.foliderClicked !== parent.id){
      document.getElementById(this.state.folderClicked).classList.remove('clicked');
      document.getElementById(`${parent.id}`).classList.add('clicked');

      this.setState({
        folderClicked: parent.id
      })
   }

  }

 //NOTE FUNCTIONS
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
      notes: notes
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
          <Link to='/' >Noteful</Link>
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
            changeClicked: id => this.changeClicked(id)
          }}>
        <Switch>
          <Route exact path='/' component={RenderFolder}/>
          <Route path="/folder/:id" render={ r => (
            <>
            <RenderFolder clicked={this.state.clicked}/>
            <RenderNotes noteId={r.match.params.id}/>
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

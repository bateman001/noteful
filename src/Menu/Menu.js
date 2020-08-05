import React from 'react'
import NotefulContext from '../NotefulContext'
import { Link } from 'react-router-dom'
// import AddNote from '../Notes/AddNote';
// import AddFolder from '../Folder/AddFolder'

class Menu extends React.Component {

    static contextType = NotefulContext

    render(){
        return (
        <ul className='menu'>
          <Link to='/' onClick={() => {
            this.context.showMenu()
            this.context.changeClicked(null)
            }
            }> <li>Home</li></Link>
                <li onClick={() => {
                    this.context.showMenu()
                    this.context.showForm('folder')
                }
                }>Add Folder</li>
                <li onClick={() => {
                    this.context.showForm('note')
                    this.context.showMenu()
                }
                }>Add Note</li>
            </ul>
        )
    }
}

export default Menu
import React from 'react'
import NotefulContext from '../NotefulContext'
import { Link } from 'react-router-dom'
import homeIcon from '../images/homeIcon.png'

class Menu extends React.Component {

    static contextType = NotefulContext

    render(){
        return (
        <ul className='menu'>
        <li> <Link to='/' onClick={() => {
            this.context.showMenu()
            this.context.changeClicked(null)
            }
            }> <img src={homeIcon} alt='home Icon' /></Link> </li>
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
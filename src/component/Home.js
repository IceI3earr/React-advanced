import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <>
          <ul>
            <li>
              <Link to='/randomquote'> Random Quote Machine </Link>
            </li>
            <li>
              <Link to='/todolist'> Todo List </Link>
            </li>
          </ul>
        </>
    )
}

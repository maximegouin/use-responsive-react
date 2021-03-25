import React from 'react'
import { useResponsive } from 'use-responsive-react'
import GithubCorner from 'react-github-corner';
import ReactJson from 'react-json-view'
import ReactMarkdown from 'react-markdown'
import { HEADER_MARKDOWN } from './constants';
const App = () => {
  const { width, height, orientation, screenSize, defineBreakpoints, breakpoints } = useResponsive();

  const handleEdit = ({ updated_src }) => {
    defineBreakpoints(updated_src)
  }

  return (
    <div>
      <GithubCorner href="https://github.com/maximegouin/react-use-responsive" />
      <ReactMarkdown>{HEADER_MARKDOWN}</ReactMarkdown>
      <hr />
      <h3>defineBreakpoints</h3>
      <ReactJson src={breakpoints} onEdit={handleEdit} />
      <hr />
      <h3>Resize screen to get dynamic values</h3>
      <ul>
        <li>{`width: ${width}`}</li>
        <li>{`height: ${height}`}</li>
        <li>{`orientation: ${orientation}`}</li>
        <li>{`screenSize: ${screenSize}`}</li>
      </ul>
    </div>
  )
}

export default App

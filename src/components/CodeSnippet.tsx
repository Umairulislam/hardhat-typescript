import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CodeBlock, CopyBlock, dracula, github } from "react-code-blocks"

const CodeSnippet = ({ code, language, showLineNumbers }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="border border-border">
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={theme === "dark" ? dracula : github}
        codeBlock={true}
      />
    </div>
  )
}

export default CodeSnippet

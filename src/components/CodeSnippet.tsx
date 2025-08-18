import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CopyBlock, dracula, github } from "react-code-blocks"

type CodeSnippetProps = {
  code: string
  language: string
  showLineNumbers: boolean
}

const CodeSnippet = ({ code, language, showLineNumbers }: CodeSnippetProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="border border-border rounded-sm">
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

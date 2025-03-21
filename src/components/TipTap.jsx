import React,{useState} from 'react'
import {EditorContent,useEditor} from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit';
import {Popover} from './Popover'
import Underline from "@tiptap/extension-underline";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import '../components/sample.js'
import {Node} from '@tiptap/core'

const InsertVariables = Node.create({
  name:'insertVariables',
  group:"inline",
  inline:true,

  addAttributes(){
    return{
      value:{
        default:'',
      },
    }
  },
  renderHTML({node}){
    return[
      'span',
      {
        class: 'insert-variable',
      },
      node.attrs.value,
    ]
  }
})
const insertVariables = ()=>InsertVariables


const MenuBar = ({editor})=>{
  if(!editor){
    return null;
  }
  return(
    <div className="menuBar">
      <div>
                <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
           <FaUnderline />
         </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft />
        </button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </button>
      </div>    
      </div>
  )
}

export const Tiptap=()=>{
  const[popover,setPopover]=useState(false)
  const[inputValue,setInputValue]=useState('')
  const[changedVariable,setChangedVariable] = useState('Original Variable Value');

  const editor = useEditor({
    extensions:[StarterKit,insertVariables(),Underline],
    content:`Hey`
  })

  const togglePopover = ()=>{
    setPopover((prev)=>!prev)
  }

  const handleRemove = ()=>{
    setPopover(false)
    setInputValue('');
  }

  const handleChangeVariable=()=>{
    setChangedVariable(inputValue)
  }

  return(
    <div className='textEditor'>
      <div style={{marginTop:"20%",marginLeft:"20%"}}>
         <button onClick={togglePopover}>Show Input Popover</button>
      <button onClick={handleChangeVariable}>Change Variable</button>
      <div>Changed Variable: {changedVariable}</div>

      </div>
      {popover && (
        <Popover
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClose={handleRemove}
        onRemove={handleRemove}
        />
      )}
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className='editor'/>
    </div>
  )

}



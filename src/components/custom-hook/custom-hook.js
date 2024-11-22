import { useNavigate } from "react-router-dom"



export const useFormHandler = () => {
  const navigate = useNavigate()
  const handleFormSubmit = (e,newPath) => {
    e.preventDefault()
    navigate(newPath)
  }
  return handleFormSubmit
}
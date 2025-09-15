import axios from "axios";
import { type Note } from "@/types/note"


export default interface NotesHttpResponse {
    notes: Note[],
    totalPages: number
}

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
})

export interface Credentials {
  email: string,
  password: string
}

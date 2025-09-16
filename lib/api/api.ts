import axios from "axios";
import { type Note } from "@/types/note"


export default interface NotesHttpResponse {
    notes: Note[],
    totalPages: number
}

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

export interface Credentials {
  email: string,
  password: string
}

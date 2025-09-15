import { api } from "./api";
import { Credentials } from "./api";
import { Note, NewNote } from '@/types/note'
import { User } from '@/types/user'
import NotesHttpResponse from "./api";

export const register = async (creds: Credentials) => {
  const { data } = await api.post<User>('/auth/register', creds)
  console.log(data);
  return data
}

export const login = async (creds : Credentials) => {
  const { data } = await api.post<User>('/auth/login', creds)
  console.log(data);
  return data
}

export const logout = async () => {
  await api.post('/auth/logout')
}

export async function deleteNote(id: string) {
    const res = await api.delete<Note>(`/notes/${id}`, {
    headers: {
        Accept: 'application/json'
        }
    })

    return res.data
}

export async function createNote(newNote: NewNote) {
    const res = await api.post<Note>(`/notes`, newNote, {
    headers: {
        Accept: 'application/json'
        }
    })

    return res.data
}

export async function fetchNotes(
  page = 1,
  perPage = 12,
  searchTerm = "",
  tag = ""
): Promise<NotesHttpResponse> {
  const params: Record<string, string | number> = {
    page,
    perPage,
    search: searchTerm,
    };

  if (tag !== 'All') {
    params.tag = tag;
    }

  const res = await api.get("notes", {
    params,
    headers: {
        Accept: "application/json"
    },
  });

  return res.data;
}

export async function fetchNoteById(id: string) {
    const res = await api.get<Note>(`/notes/${id}`, {
    headers: {
        Accept: 'application/json'
        }
    })
    return res.data
}
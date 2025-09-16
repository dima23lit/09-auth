import { api } from "./api";
import NotesHttpResponse from "./api";
import { Note } from '@/types/note'
import { User } from '@/types/user'
import { cookies } from "next/headers";

// export const register = async (creds : Credentials) => {
//   const { data } = await api.post<User>('/auth/register', creds)
//   console.log(data);
//   return data
// }

// export const login = async (creds : Credentials) => {
//   const { data } = await api.post<User>('/auth/login', creds)
//   console.log(data);
//   return data
// }

// export const logout = async () => {
//   await api.post('/auth/logout')
// }

export const fetchUser = async () => {
    const cookieStore = await cookies();
    const { data } = await api.get<User>('/users/me', {
        headers: {
          Cookie: cookieStore.toString()
      }
  })
  return data
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
    const cookieStore = await cookies();
  const res = await api.get("notes", {
    params,
    headers: {
        Accept: "application/json",
        Cookie: cookieStore.toString()
    },
  });

  return res.data;
}

// export async function deleteNote(id: string) {
//     const res = await api.delete<Note>(`/notes/${id}`, {
//     headers: {
//         Accept: 'application/json'
//         }
//     })

//     return res.data
// }

// export async function createNote(newNote: NewNote) {
//     const res = await api.post<Note>(`/notes`, newNote, {
//     headers: {
//         Accept: 'application/json'
//         }
//     })

//     return res.data
// }

export async function fetchNoteById(id: string) {
    const cookieStore = await cookies();
    const res = await api.get<Note>(`/notes/${id}`, {
    headers: {
        Accept: 'application/json',
        Cookie: cookieStore.toString()
        }
    })
    return res.data
}

export const checkServerSession = async () => {
    const cookieStore = await cookies();
    const response = await api.get<{ success: boolean }>('auth/session', {
        headers: {
          Cookie: cookieStore.toString()
      }
    })
    return response
}
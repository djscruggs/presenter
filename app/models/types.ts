export interface User {
  id?: string
  email: string
  clerkId: string
  decks: Deck[]
}
export interface Deck {
  id: string
  name: string
  slides: Slide[]
}
export interface Slide {
  id: string
  body: string
}
export interface CurrentUser extends User {
  role: 'ADMIN' | 'USER'
}
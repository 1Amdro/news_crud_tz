export type RemoveNewsT = (id: number) => void;
export type ChangeNewsT = (
  id: number,
  title: string,
  description: string
) => void;
export type AddNewsT = (title: string, description: string) => void;

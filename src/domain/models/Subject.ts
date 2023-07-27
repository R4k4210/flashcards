export type Subject = {
  id: number;
  object: string;
  url: string;
  data: Data;
};

type Data = {
  level: number;
  slug: string;
  characters: string;
  character_images: CharacterImage[];
};

type CharacterImage = {
  url: string;
  content_type: string;
};

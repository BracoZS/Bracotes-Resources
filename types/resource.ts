import { Category } from './category';

export interface Resource {
  id: string;              // Identificador único en kebab-case
  name: string;            // Nombre visible del recurso
  url: string;             // URL al recurso
  description: string;     // Descripción breve y clara 
  categories: Category[];  // IDs de categorías a las que pertenece
  tags?: string[];         // Etiquetas/palabras clave relevantes
}
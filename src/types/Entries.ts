import { User } from './User';
import { Photo } from './Photo';
import { Album } from './Album';

export interface Entries {
  users: User[],
  photos: Photo[],
  albums: Album[],
}

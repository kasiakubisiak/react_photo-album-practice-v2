import React from 'react';
import { Entries } from '../types/Entries';

export const PhotoList: React.FC<Entries> = (entries) => {
  const { users, photos, albums } = entries;

  return (
    <tbody>
      {photos.map((photo) => {
        const { albumId, id, title } = photo; // Only photo gets destructured due to errors and overlapping variable names
        const targetAlbum = albums.find((album) => album.id === albumId);
        const targetUser = users.find((user) => (
          targetAlbum && user.id === targetAlbum.userId
        ));
        const className = (targetUser && targetUser.sex === 'm')
          ? 'has-text-link'
          : 'has-text-danger';

        return (
          <tr>
            <td className="has-text-weight-bold">
              {id}
            </td>

            <td>{title}</td>
            <td>{targetAlbum && targetAlbum.title}</td>

            <td className={className}>
              {targetUser && targetUser.name}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

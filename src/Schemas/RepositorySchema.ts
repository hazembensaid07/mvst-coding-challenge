/**
 * RepositorySchema defines the structure and types of the repository.
 *
 * @interface
 * @property {string} title - The title of the repository.
 * @property {string} visibility - The repository's visibility status .
 * @property {number} stars - The number of stars the repository has.
 * @property {number} forks - The number of forks the repository has.
 * @property {string} lastUpdate - The date of the last update to the repository.
 * @property {string} technology - The primary technology used in the repository.
 */
export interface RepositorySchema {
  title: string;
  visibility: string;
  stars: number;
  forks: number;
  lastUpdate: string;
  technology: string;
}

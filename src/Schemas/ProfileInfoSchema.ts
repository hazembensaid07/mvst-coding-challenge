/**
 * ProfileInfoSchema defines the structure and types of the github profile informations
 *
 * @interface
 * @property {string} picture - The URL of the user's profile picture.
 * @property {string} bio - The biography of the user.
 * @property {string} username - The username of the user.
 * @property {number} followers - The number of followers the user has.
 * @property {number} following - The number of users the subject is following.
 */

export interface ProfileInfoSchema {
  picture: string;
  bio: string;
  username: string;
  followers: number;
  following: number;
}

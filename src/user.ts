// User functions
import { User, Session, UserDetails, Data, getData } from './data';

/**
  * Registers a user with email, password and username then returns
  * userId value, logs in user (creates new session)
  *
  * @param {string} email - User's email
  * @param {string} password - User's password
  * @param {string} username - Username
  *
  * @returns {{userId: number}}
*/


/**
  * Logs in logged out user with username and password
  *
  * @param {string} username - Username
  * @param {string} password - User's password
  *
  * @returns {{sessionId: string}}
*/

/**
  * Logs in logged out user with email and password
  *
  * @param {string} email - email
  * @param {string} password - User's password
  *
  * @returns {{sessionId: string}}
*/

/**
  * Return user's details given token
  *
  * @param {string} token - token
  *
  * @returns {{userDetails: UserDetails}}
*/

/**
  * Changes password
  *
  * @param {string} token - Token
  * @param {string} oldPassword - old password
  * @param {string} newPassword - new password
  *
  * @returns {object}
*/

/**
  * Logs out user
  *
  * @param {string} token - Token
  *
  * @returns {object}
*/

/**
  * Clears all data
  *
  * @returns {object}
*/




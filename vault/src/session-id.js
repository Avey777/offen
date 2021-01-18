/**
 * Copyright 2020-2021 - Offen Authors <hioffen@posteo.de>
 * SPDX-License-Identifier: Apache-2.0
 */

var uuid = require('uuid/v4')

var cookies = require('./cookie-tools')

module.exports = getSessionId

function getSessionId (accountId) {
  // even though the session identifier will be included in the encrypted part
  // of the event we generate a unique identifier per account so that each session
  // is unique per account and cannot be cross-referenced
  var sessionId
  try {
    var lookupKey = 'session-' + accountId
    var cookieData = cookies.parse(document.cookie)
    sessionId = cookieData[lookupKey] || null
    if (!sessionId) {
      sessionId = uuid()
      document.cookie = cookies.serialize(cookies.defaultCookie(lookupKey, sessionId))
    }
  } catch (err) {
    sessionId = uuid()
  }
  return sessionId
}

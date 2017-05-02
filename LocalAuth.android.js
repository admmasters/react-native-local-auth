/**
 * Forked off: https://github.com/tradle/react-native-local-auth
 * @flow
 */
'use strict'

import { createError } from './error'
import Errors from './data/errors'
import { NativeModules } from 'react-native'

const { RNLocalAuth } = NativeModules

module.exports = {
  hasTouchID() {
    return Promise.reject(createError('RCTTouchIDNotSupported'))
  },

  isDeviceSecure() {
    return RNLocalAuth.isDeviceSecure()
  },

  authenticate(opts: mixed) {
    return RNLocalAuth.authenticate(opts).catch(err => {
      err.name = err.code
      throw err
    })
  }
}

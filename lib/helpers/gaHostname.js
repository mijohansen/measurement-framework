import document from 'document'

/**
 * Get hostname from location.
 *
 * @return {string}
 */
const gaHostname = function () {
  let hostname = '' + document.location.hostname
  return (hostname.indexOf('www.') === 0 ? hostname.substring(4) : hostname)
}

export default gaHostname

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'spot') {
    return '/spot/' + doc.uid
  }

  return '/not-found'
}

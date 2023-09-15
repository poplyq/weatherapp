export const dateTransform = (dateArray: string[]) => {
  return dateArray.map((e) => {
    const ruDate = new Intl.DateTimeFormat('ru', {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
    })
      .format(new Date(e))
      .replace(/(\s?\г\.?)/, '')
    return ruDate
  })
}

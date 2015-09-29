if 'ontouchstart' of document.documentElement
  document.querySelector('.hint').innerHTML = '<p>Tap on the left or right to navigate</p>'

showOverview = (event) ->
  if event.keyCode == 27
    console.log 'Overview'
    document.location.hash = '#/overview'
  return

document.body.addEventListener 'keyup', showOverview

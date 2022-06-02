let themeList = [
  'minimalism',
  'just be crazy',
  'glassmorphism',
  'kid edition',
  'go creative',
  'dared theme',
]

let developerList = ['jazztine cruz', 'nikko abucejo']

function generate() {
  let redValue = Math.floor(Math.random() * 255).toString()
  let greenValue = Math.floor(Math.random() * 255).toString()
  let blueValue = Math.floor(Math.random() * 255).toString()
  let mixedValue = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

  document.getElementById('red').innerHTML = redValue
  document.getElementById('green').innerHTML = greenValue
  document.getElementById('blue').innerHTML = blueValue

  document.getElementById('color-square').style.backgroundColor = mixedValue
  document.getElementById('theme-generator').style.color = mixedValue

  if (
    document.getElementById('color-square').style.transform == '' ||
    document.getElementById('color-square').style.transform ==
      'translate(-50%, -50%) rotate(45deg)'
  ) {
    document.getElementById('color-square').style.transform =
      'translate(-50%, -50%) rotate(135deg)'
  } else if (
    document.getElementById('color-square').style.transform ==
    'translate(-50%, -50%) rotate(135deg)'
  ) {
    document.getElementById('color-square').style.transform =
      'translate(-50%, -50%) rotate(45deg)'
  }

  let randomNumberThemeList = Math.floor(Math.random() * themeList.length)
  document.getElementById('theme-generator').innerHTML =
    themeList[randomNumberThemeList]

  let randomNumberDeveloperList = Math.floor(
    Math.random() * developerList.length
  )
  document.getElementById('developer-generator').innerHTML =
    developerList[randomNumberDeveloperList]
}

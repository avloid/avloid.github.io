/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","reddit":"https://reddit.com/","maps":"https://maps.google.com/","youtube":"https://youtube.com/"}
const engine = "startpage"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"I0MD5WG8wqCLdtgD","label":"Medias","bookmarks":[{"id":"02qbbCbzKk8AxkzL","label":"Youtube","url":"https://Youtube.com/"},{"id":"Uz7cEpJfr2tphsgX","label":"Twitter","url":"https://Twitter.com/"},{"id":"rzpLrq4GIpZH1CcK","label":"Instagram","url":"https://instagram.com/"}]},{"id":"XDVUIfS4DfOqNkpv","label":"Platforms","bookmarks":[{"id":"crpjwC2UgXBUt01F","label":"Github","url":"https://github.com"},{"id":"uFaO4SRPKLWhPdBJ","label":"Steam","url":"https://steamcommunity.com/profiles/76561198416215260/"},{"id":"FjA8VaCl2ulJQ2WA","label":"Roblox","url":"https://www.roblox.com/"}]},{"id":"AI2LRAfIL8mbofO1","label":"Averi","bookmarks":[{"id":"N43o4DHI0EhUkvVO","label":"The Averi Booru","url":""},{"id":"sAoKcEYJgSu3LTZ6","label":"Averi Media","url":"https://twitter.com/TheAveriMedia"},{"id":"CNHCcpkOFgT4R6i7","label":"Fiddleafox","url":"https://twitter.com/fiddleafox"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()

/* Random image */
const RImg = document.getElementById("RandomImage");
let index

Image_array = ['1.jpg', '2.png','3.jpg', '4.png', '5.png', '6.png', '7.jpg', '8.png', '9.png', '10.jpg', '11.png' , '12.png', '13.jpg', '14.jpg' , '15.gif', '16.jpg', '17.png', '18.png', '19.jpg', '20.gif', '21.png', '22.jpg', '23.png', '24.gif', '25.jpg', '26.png', '27.jpeg', '28.jpg', '29.png', '30.png'];

function get_random_image() {
  random_index = Math.floor(Math.random() * Image_array.length);
  if (random_index !== index)
  {
  selected_image = Image_array[random_index];
  console.log(selected_image);
  index = random_index;
  RImg.src = `./images/${selected_image}`;
  } else {
    get_random_image()
  }
}

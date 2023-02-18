function managePosts(posts) {
    var blog = document.querySelector('.blogs')
    let n = 0
    posts.forEach(post => {
      n += 1
      localStorage.setItem(`post${String(n)}`, JSON.stringify(post))
      blog.innerHTML += '<div id="' + String(n) + '" class="hover:translate-y-1" onclick="openPost(' + String(n) + ')">\
      <div class="overflow-hidden rounded-md bg-slate-800">\
        <div class="image aspect-w-3 aspect-h-2"><img class="h-full w-full object-cover object-center"\
            src="' + post.image + '" alt="Image post" loading="lazy" /></div>\
        <div class="px-3 pt-4 pb-6 text-center">\
          <h2 class="tittle text-xl font-semibold">' + post.title + '</h2>\
          <div class="date mt-1 text-xs text-gray-400">' + post.date + '</div>\
          <div class="snippet mt-2 text-sm">' + post.snippet + '</div>\
        </div>\
      </div>\
      </div>'
    });
} function load () {
  var url = '/data/projects.json'
  fetch(url).then(data => {
      return data.json()
  }).then(objectData => {
      managePosts(objectData.projects)
  })
} function openPost(id) {
  var post = JSON.parse(localStorage.getItem(`post${id}`))
  fetch('/posts/post.html')
  .then(response => response.text())
  .then(data => {
    document.documentElement.innerHTML = data.replace('#title', post.title).replace('#title', post.title).replace('$@image', post.image).replace('$@body', post.body).replace('$@date', post.date)
  })
}
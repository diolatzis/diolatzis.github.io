// Lazy-load looping preview videos (video.lazy-video[data-src]): fetch and
// autoplay when they come into view, pause when scrolled away.
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll("video.lazy-video[data-src]");
  if (!videos.length) return;

  var start = function (v) {
    if (!v.src) { v.src = v.dataset.src; }
    v.muted = true; // required for autoplay
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  };

  if (!("IntersectionObserver" in window)) {
    videos.forEach(start);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) start(e.target);
      else if (e.target.src) e.target.pause();
    });
  }, { rootMargin: "200px 0px" });

  videos.forEach(function (v) { io.observe(v); });
});

window.innerWidth < 768 &&
  [].slice.call(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach(function(e) {
    e.classList.remove("animated"), e.removeAttribute("data-bss-hover-animate"), e.removeAttribute("data-aos");
  }),
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      AOS.init();
    },
    !1
  );

var dlitem = document.getElementById("download-item-div"),
  template =
    '<div style="background: #212121;border-radius: 14px;width: max-content;text-align: center;min-width: 210px; float: left; margin-right: 15px;"><img src="IMGUrl" style="width: 131px;background: transparent;border-radius: 14;margin-top: 20px;" /><p style="text-align: center;font-size: 31px;margin-top: 0px;padding-top: 12px;padding-left: 15px;padding-right: 15px;">title</p><p style="text-align: center;font-size: 19px;margin-top: -16px;">codename</p><button class="btn btn-primary" type="button" style="margin-bottom: 20px;" onclick="location.href=\'LINKURL\';">Download</button></div>',
  alltitles = [],
  allcodes = [],
  currentlydisplayed = [];

function dostuff(e) {
  null != dlitem &&
    (console.log(e),
      Object.keys(e).forEach(function(t) {
        alltitles.push(t), allcodes.push(e[t].codename);
        var n = e[t].camtype,
          a = "";
        "punch" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Punch.png"),
          "other" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Base.png"),
          "tear" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Tear.png"),
          (dlitem.innerHTML += template.replace("title", t).replace("codename", e[t].codename).replace("IMGUrl", a).replace("LINKURL", e[t].url));
      }),
      setInterval(function() {
        if (document.activeElement === document.getElementById("sear")) {
          currentlydisplayed = [];
          var t = document.getElementById("sear");
          if ("" != t.value) {
            dlitem.innerHTML = "";
            var n = t.value;
            alltitles.forEach(function(t) {
              if (t.toLowerCase().includes(n.toLowerCase()) && !currentlydisplayed.includes(t)) {
                var a = e[t].camtype,
                  i = "";
                "punch" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Punch.png"),
                  "other" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Base.png"),
                  "tear" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Tear.png"),
                  (dlitem.innerHTML += template.replace("title", t).replace("codename", e[t].codename).replace("IMGUrl", i).replace("LINKURL", e[t].url)),
                  currentlydisplayed.push(t);
              }
            }),
              alltitles.forEach(function(t) {
                if (e[t].codename.toLowerCase().includes(n.toLowerCase()) && !currentlydisplayed.includes(t)) {
                  var a = e[t].camtype,
                    i = "";
                  "punch" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Punch.png"),
                    "other" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Base.png"),
                    "tear" === a && (i = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Tear.png"),
                    (dlitem.innerHTML += template.replace("title", t).replace("codename", e[t].codename).replace("IMGUrl", i).replace("LINKURL", e[t].url)),
                    currentlydisplayed.push(t);
                }
              });
          } else
            (dlitem.innerHTML = ""),
              Object.keys(e).forEach(function(t) {
                var n = e[t].camtype,
                  a = "";
                "punch" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Punch.png"),
                  "other" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Base.png"),
                  "tear" === n && (a = "https://raw.githubusercontent.com/AniOSP/AniOSP-Assets/main/Device-Tear.png"),
                  (dlitem.innerHTML += template.replace("title", t).replace("codename", e[t].codename).replace("IMGUrl", a).replace("LINKURL", e[t].url));
              });
        }
      }, 500));
}

function loadJSON(e, t, n) {
  var a = new XMLHttpRequest();
  (a.onreadystatechange = function() {
    4 === a.readyState && (200 === a.status ? t(JSON.parse(a.responseText)) : n(a));
  }),
    a.open("GET", e, !0),
    a.send();
}

loadJSON("https://raw.githubusercontent.com/AniOSP/api/main/devices.json", dostuff, "jsonp");

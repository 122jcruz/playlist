const vue_app = Vue.createApp({
  // This automatically imports your songs.json file and puts it into
  //   the variable: songs
  created() {
    fetch("songs.json")
      .then((response) => response.json())
      .then((json) => {
        this.songs = json;
      });
  },
  data() {
    return {
      // This holds your songs.json data.
      songs: [],
      title: "Music Playlist",
      owner: "Music",
      github: " https://122jcruz.github.io/JC-Playlist/"
    };
  },
  methods: {
    getMonthText(dateArray) {
      var month;
      switch (dateArray[1]) {
        case 1:
          month = "January";
          break;
        case 2:
          month = "February";
          break;
        case 3:
          month = "March";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "May";
          break;
        case 6:
          month = "June";
          break;
        case 7:
          month = "July";
          break;
        case 8:
          month = "August";
          break;
        case 9:
          month = "September";
          break;
        case 10:
          month = "October";
          break;
        case 11:
          month = "November";
          break;
        case 12:
          month = "December";
          break;
      }
      return month + " " + dateArray[2] + " " + dateArray[0];
    },
    posterClick(index) {
      if (
        this.songs[index].posterindex >=
        this.songs[index].posters.length - 1
      ) {
        this.songs[index].posterindex = 0;
      } else {
        this.songs[index].posterindex++;
      }
    },
    timeText(minutes) {
      return Math.trunc(minutes / 60) + "h" + (minutes % 60) + "m";
    }
  }
});
function toggle(ele) {
  var cont = document.getElementById("cont");
  if (cont.style.display === "block") {
    cont.style.display = "none";

    document.getElementById(ele.id).value = "Yes";
  } else {
    cont.style.display = "block";
    document.getElementById(ele.id).value = "Hide";
  }
}
vue_app.mount("#vue_app");

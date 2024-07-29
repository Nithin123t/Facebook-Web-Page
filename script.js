document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');
  
    menuToggle.addEventListener('click', function() {
      menuList.style.height = menuList.offsetHeight === 0 ? `${menuList.scrollHeight}px` : '0';
    });
  });
  
  function showLiveBody() {
    document.getElementById("live-body").style.display="block";
    document.getElementById("schedule-body").style.display=("none");
    document.getElementById("schedule-button").style.display="block";
    document.getElementById("live-button").style.display=("block");

  }

  function showScheduleBody() {
    document.getElementById("schedule-body").style.display = "block";
    document.getElementById("live-body").style.display = "none";
    document.getElementById("live-button").style.display = "block";
    document.getElementById("schedule-button").style.display = "block";

  }
  document.getElementById("live-button").addEventListener("click",showLiveBody);

  document.getElementById("schedule-button").addEventListener("click",showScheduleBody);


const postBtn = document.getElementById('post-btn');
const postContent = document.getElementById('post-content');

postBtn.addEventListener('click', () => {
  const content = postContent.value;
  console.log('Posting content:', content);
  postContent.value = '';
});





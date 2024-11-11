document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("side_bar");
  
    // Mobile ver : When burger menu is clicked, sidebar will be opened/closed
    menuToggle.addEventListener("click", function() {
      if (window.innerWidth < 768) { // 
        sidebar.classList.toggle("d-none");
        sidebar.classList.toggle("d-block");
        sidebar.classList.toggle("active");
      }
    });
  
    // Close the side bar 
    closeSidebar.addEventListener("click", function() {
      sidebar.classList.add("d-none");
      sidebar.classList.remove("d-block");
      sidebar.classList.remove("active");
    });
  
    // Reset the sidebar when the screen size changes
    function handleResize() {
      if (window.innerWidth >= 768) { // desktop ver.
        sidebar.classList.remove("d-none"); // always displayed
        sidebar.classList.add("d-block");
        sidebar.classList.remove("active");
      } else { // mobile ver.
        sidebar.classList.add("d-none"); // hide and reset
        sidebar.classList.remove("d-block");
        sidebar.classList.remove("active");
      }
    }
  
    window.addEventListener("resize", handleResize);
  
    handleResize();
});
  
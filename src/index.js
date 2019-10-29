/* Materialize initials code */
document.addEventListener('DOMContentLoaded', () => {
    let navigationElements = document.querySelectorAll('.sidenav'); //Mobile sidenav selector
    M.Sidenav.init(navigationElements, {});//Mobile sidenav activator

    let modalElements = document.querySelectorAll('.modal');
    M.Modal.init(modalElements, {});
  });
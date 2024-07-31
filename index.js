const toast = document.getElementById('#toast');

toast.querySelector('img').onerror = function () {
  this.remove();
};
toast.querySelector('button').onclick = () => toast.remove();

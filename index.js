const toast = document.getElementById('#toast');

toast.querySelector('img').onerror = toast.querySelector('button').onclick =
  function () {
    toast.remove();
  };

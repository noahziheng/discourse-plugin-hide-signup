export default {
    name: 'hide-signup',
    initialize() {
        alert('hide-signup');
        document.querySelectorAll('#sign-up-button').forEach((node) => node.remove());
    }
  };
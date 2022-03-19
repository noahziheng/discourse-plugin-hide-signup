export default {
    name: 'hide-signup',
    initialize() {
        document.querySelectorAll('#sign-up-button').forEach((node) => node.remove());
    }
  };
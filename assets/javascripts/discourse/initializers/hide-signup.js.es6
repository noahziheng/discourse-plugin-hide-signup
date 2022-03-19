export default {
    name: 'hide-signup',
    initialize() {
        alert('hide-signup');
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const observer = new MutationObserver((_mutationsList) => {
            dialogNode.querySelectorAll('.sign-up-button').forEach(node => node.remove());
            dialogNode.querySelectorAll('#new-account-link').forEach(node => node.remove());
        });
        observer.observe(document.body, config);
    }
  };
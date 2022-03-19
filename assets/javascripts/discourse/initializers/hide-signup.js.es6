export default {
    name: 'hide-signup',
    initialize() {
        alert('hide-signup');
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const headerButtons = document.querySelector('header-buttons');
        const headerObserver = new MutationObserver((_mutationsList) => {
            console.log('header', _mutationsList);
            dialogNode.querySelectorAll('.sign-up-button').forEach(node => node.remove());
        });
        if (headerButtons) {
            headerObserver.observe(headerButtons, config);
        }

        const dialogNode = document.getElementById('discourse-modal');
        const dialogObserver = new MutationObserver((_mutationsList) => {
            console.log('dialog', _mutationsList);
            dialogNode.querySelectorAll('#new-account-link').forEach(node => node.remove());
        });
        if (dialogNode) {
            dialogObserver.observe(dialogNode, config);
        }
    }
  };
const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayerOneBtn = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtn = document.getElementById('edit-player-2-btn');
const configCancelBtn = document.getElementById('config-cancel-btn');

editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);

configCancelBtn.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
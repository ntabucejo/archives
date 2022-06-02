const { body } = document;
const detail = document.querySelector('.planet-info');
const mercury = document.querySelector('.mercury');


let zoomActivated = false;

window.addEventListener('keydown', (e) => {
	if(e.key === ' ') {
		zoomActivated = !zoomActivated;
	}
});

window.addEventListener('mousemove', (e) => {
	const { clientX: x, clientY: y } = e;
	
	if(zoomActivated) {
    body.style.transform = 'scale(2)';
		body.style.transformOrigin = `${x}px ${y}px`;
	} else {
		body.style.transform = 'none';
	}
});

// function planetInfo() {
//   window.addEventListener('mousemove', (e) => {
//     const { clientX: x, clientY: y } = e; 
//     detail.style.left = `${x}px`;
//     detail.style.top = `${y}px`;
//   });
//   mercury.style.detail = 'block';
// }
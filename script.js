//your code here!
const ele = document.getElementById("infi-list");

let count = 1;

function addItems(num) {
	for (let i = 0; i < num; i++) {
		const li = document.createElement('li');
		li.innerText = `Item ${count}`;
		ele.appendChild(li);
		count++;
	}
}

addItems(10);

ele.addEventListener('scroll', () => {
	if(ele.scrollTop + ele.clientHeight >= ele.scrollHeight - 1) {
		addItems(2);
	}
})
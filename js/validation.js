function validate(e) {
	// console.log(e.target.getElementsByName('first-name'));
	const names_reg = /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]*$/;
	const firstname =  e.target.querySelector('[name="first-name"]').value;
	const lastname = e.target.querySelector('[name="last-name"]').value;
	const email = e.target.querySelector('[name="email"]').value;
	
	const czy = [0, 0, 0, 0];
	
	if (firstname === "" || firstname === null) {
		error1.textContent = '*Nie wprowadzono imienia.';
		czy[0] = 0;
	}
	else if (!names_reg.test(firstname)) {
		error1.textContent = '*Wpisz poprawnie imię.';
		czy[0] = 0;
	}
	else {
		error1.textContent = '';
		czy[0] = 1;
	}
	
	
	if (lastname === "" || lastname === null) {
		error2.textContent = '*Nie wprowadzono nazwiska.';
		czy[1] = 0;
	}
	else if (!names_reg.test(lastname)) {
		error2.textContent = '*Wpisz poprawnie nazwisko.';
		czy[1] = 0;
	}
	else {
		error2.textContent = '';
		czy[1] = 1;
	}
	
	
	if (email === "" || email === null) {
		error3.textContent = '*Nie wpisano poprawnego adresu e-mail.';
		czy[2] = 0;
	}
	else {
		error3.textContent = '';
		czy[2] = 1;
	}
	
	
	const frontend = document.getElementById('frontend-checkbox').checked;
	const backend = document.getElementById('backend-checkbox').checked;
	const mobile = document.getElementById('mobile-checkbox').checked;
	const graphics = document.getElementById('graphics-checkbox').checked;
	
	if (!(frontend || backend || mobile || graphics)) {
		error4.textContent = '*Należy zaznaczyć conajmniej jedną opcję.';
		czy[3] = 0;
	}
	else {
		error4.textContent = '';
		czy[3] = 1;
	}
	
	
	if (!(firstname === "" || firstname === null) && 
	!(!names_reg.test(firstname)) && 
	!(lastname === "" || lastname === null) && 
	!(!names_reg.test(lastname)) && 
	!(email === "" || email === null)) {
		
		location.href = "subpage.html";
	}
	
	

	e.preventDefault();
	e.stopPropagation();
	return true;
	
}

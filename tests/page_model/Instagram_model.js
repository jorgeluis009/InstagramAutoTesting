import {Selector, t} from 'testcafe';

export default class ExamplePage {
	constructor() {
		// this.changeAccount = Selector('.sqdOP yWX7d    y3zKF     ').withText('Mostrar');;
		// this.showPass = Selector('.sqdOP yWX7d     _8A5w5    ');
		this.mailInput = Selector('input[name=username]');
		this.passInput = Selector('input[name=password]');
		this.signInBtn = Selector('button[type=submit]');

	}
}
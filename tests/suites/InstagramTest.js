import ExamplePage from '../page_model/Instagram_model.js'

const page = new ExamplePage();

	fixture `Instagram Test`
    .page `https://www.instagram.com/?hl=es-la`;

test('Instagram Sign In', async t => {
    var mail = 'fofawam582@smlmail.com';
    var p = 'GenericPassword1';

    await t        
        .typeText(page.mailInput, mail)
    	.typeText(page.passInput, p)
        .click(page.signInBtn)
		.wait(5000)
});
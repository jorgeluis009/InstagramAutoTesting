import ExamplePage from '../page_model/example_model'

const page = new ExamplePage();

	fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;


test('My first test', async t => {
	const name = 'Jorge Luis';
    await t
    	.typeText(page.inputName, name)
    	.click(page.checkboxRemoteTesting)
    	.click(page.checkboxAdvanceTraffic)
    	.click(page.triedTestCafe)
    	.typeText(page.commentSection, "Hello I'm a comment")
    	.wait(2000)
        .click(page.submitBtn)
		.wait(2000)

		await t.expect(page.thankYouMsg.innerText).contains(name);
});
// more at https://blog.logrocket.com/end-to-end-testing-react-apps-with-puppeteer-and-jest-ce2f414b4fd7
// https://github.com/GoogleChrome/puppeteer
// https://try-puppeteer.appspot.com/
import puppeteer from 'puppeteer';
describe('toggle', () => {
  it('loads correctly', async () => {
		let browser = await puppeteer.launch();
		let page = await browser.newPage();

		page.emulate({
			viewport: {
			width: 500,
			height: 2400
			},
			userAgent: ''
		});

		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.toggle');

		const html = await page.$eval('.child', e => e.innerHTML);
		expect(html).toBe('0');
		browser.close();
  }, 16000);
});
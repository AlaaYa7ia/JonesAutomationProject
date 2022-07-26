//demo.test.js
describe('Jones Example Test', () => {
    jest.setTimeout(50000);
    beforeAll(async () => {
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
    })
    
    it('Request a callback failed', async () => {

    var current = new Date().toJSON().slice(0,19).replaceAll(':', '-');
    await page.waitForSelector('input[id="name"]');
    await page.type('input[id="name"]','Alaa Yhaia')
    console.log("Done typing name");
    await page.waitForSelector('input[id="email"]');
    await page.type('input[id="email"]','alaa.yahia.1995@gmail.com')
    console.log("Done typing email");
    await page.waitForSelector('input[id="phone"]');
    await page.type('input[id="phone"]','0526052431')
    console.log("Done typing phone number");
    await page.waitForSelector('input[id="company"]');
    await page.type('input[id="company"]','Jones')
    console.log("Done typing company name");
    await page.waitForSelector('select[id="employees"]');
    await page.select('select[id="employees"]', '51-500')
    console.log("Done selecting employees range");
    const fileName = 'beforeSendscreenshot_'+current+'.png';
    await page.screenshot({path: fileName});
    console.log("Done taking screenshot");
    await page.click('button[class="primary button"]');
    console.log("Done clicking button");
    await page.waitForSelector('h2[class="text-center"]');
    const el = await page.$('h2[class="text-center"]');
    const text = await page.evaluate(el => el.innerText, el);
    await expect(text).toContain("You'll hear from us soon.");
    console.log("you have reached the Thank You Page Successfully")
    })
    })
    
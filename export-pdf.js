const puppeteer = require('puppeteer')
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file:///home/amirali/Projects/json-resume/build/tmp.html', {waitUntil: 'networkidle0'});
  await page.emulateMediaType('screen');
  const pdf = await page.pdf({ 
    width: '10.9in',
    height: '14.5in',
    path: './build/resume.pdf',
    printBackground: true,
    displayHeaderFooter: true,
  });
 
  await browser.close();
}

printPDF()

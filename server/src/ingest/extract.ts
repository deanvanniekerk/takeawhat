import puppeteer from "puppeteer";

export type ExtractionResult = {
    success: boolean;
}

const extract = async (url: string): Promise<ExtractionResult> => {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    //@ts-ignore
    const name = await page.evaluate(() => document.querySelector('h1').innerText);

    console.log(name);

    await browser.close();

    return {
        success: false
    }
}


export {
    extract,
}

import { validateUrl } from "./url";



describe("validateUrl", () => {



    test('false > invalid url format', () => {
        const url = "bad-format-url";
        expect(validateUrl(url)).toBe(false);
    })

    test('false > not valid host name', () => {
        const url = "http://google.com";
        expect(validateUrl(url)).toBe(false);
    })

    test('true > valid host name', () => {
        const url = "https://www.takealot.com/dell-p2419hc-23-8-usb-c-full-hd-monitor/PLID53334009";
        expect(validateUrl(url)).toBe(true);
    })



})



const VALID_HOSTNAMES: string[] = ["www.takealot.com"]

const validateUrl = (url: string): boolean => {
    try
    {
        const target = new URL(url);
        return VALID_HOSTNAMES.some(u => target.hostname == u);
    }
    catch {
        return false;
    }
}

export {
    validateUrl,
}
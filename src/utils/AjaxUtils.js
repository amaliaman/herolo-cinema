import axios from 'axios';

class AjaxUtils {
    constructor() {
        this.MOVIES_PATH = '/movies';
    }

    // Return a promise
    queryApi = async (method, url, body) => {
        let response;
        try {
            switch (method) {
                case 'get':
                    response = await axios.get(url);
                    break;
                case 'post':
                    response = await axios.post(url, body);
                    break;
                case 'put':
                    response = await axios.put(url, body);
                    break;
                case 'delete':
                    response = await axios.delete(url);
                    break;
                default:
                    throw new Error(`Unexpected method: ${method}`);
            }
            return response.data;
        }
        catch (error) { throw error; }
    };
}

const ajaxUtils = new AjaxUtils();
export default ajaxUtils;
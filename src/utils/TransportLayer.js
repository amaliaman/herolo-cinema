import ajaxUtils from './AjaxUtils';

class TransportLayer {

    /** Get movies */
    getMovies = titles => {
        const url = `${ajaxUtils.MOVIES_PATH}`;
        return ajaxUtils.queryApi('post', url, { titles });
    };
}

const transportLayer = new TransportLayer();
export default transportLayer;
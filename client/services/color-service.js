
const colourLoversAPI = 'http://www.colourlovers.com/api/colors';

function getColors()
{

}

function searchColors(query, filters = {})
{
    let queryParams = [];

    /*eslint-disable-next-line*/
    for(const key in Object.keys(filters))
    {
        queryParams.push(`${key}=${filters[key]}`);
    }
    queryParams.push(`keywords=${query}`);
    queryParams.push('jsonCallback=?');

    let searchURL = `${colourLoversAPI}?${queryParams.join('&')}`;

    return new Promise((resolve, reject) => {
        $.getJSON(searchURL, resolve)
            .fail((jqxhr, textStatus, error) => {
                reject(error);
            });
    });


}
module.exports = {
    getColors: getColors,
    searchColors: searchColors
};

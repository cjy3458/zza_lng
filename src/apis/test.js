import axios from 'axios';

// const URL = 'https://gominzipsession.o-r.kr';

export const getData = async () => {
	const result = await axios.get(`${URL}/user`);
	console.log(result.data);
	return result.data;
};

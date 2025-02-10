import axios from 'axios';

// const URL = 'https://gominzipsession.o-r.kr';

export const getData = async () => {
	const result = await axios.get(`${URL}/user`);
	console.log(result.data);
	return result.data;
};

const createMeet = async (accessToken) => {
	try {
		const response = await axios.post(
			'https://meet.googleapis.com/v2/spaces',
			{},
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			},
		);

		const data = response.data;
		if (data.name) {
			setMeetLink(`https://meet.google.com/${data.name.split('/')[1]}`);
		} else {
			console.error('Google Meet 생성 실패', data);
		}
	} catch (error) {
		console.error('API 요청 오류', error);
	}
};

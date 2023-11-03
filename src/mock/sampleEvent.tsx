import { Event } from '@/model/event';

export const sampleEvent: Event = {
  eventId: 0,
  title: 'OPEN OFF EVENT',
  streetLoadAddress: '서울 강남구 언주로164길 14 1,2층(신사동)',
  detailAddress: '서울 강남구 언주로164길 14 1,2층(신사동)',
  imageUrl: '',
  eventDateList: [new Date()],
};

export const sampleEvent2: Event = {
  eventId: 42,
  title: '🔥CAU Korea Club Social party🔥',
  streetLoadAddress:
    '서울 마포구 월드컵북로6길 49 딴따라 댄스홀 지하 1층 (B1 floor, Core:line, World cup buk-ro 6 gil 49, Mapogu, Seoul)',
  detailAddress:
    '서울 마포구 월드컵북로6길 49 딴따라 댄스홀 지하 1층 (B1 floor, Core:line, World cup buk-ro 6 gil 49, Mapogu, Seoul)',
  imageUrl: '',
  eventDateList: [new Date(), new Date()],
};

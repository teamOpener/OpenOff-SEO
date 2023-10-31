import toast from 'react-hot-toast';

export default function useCopy() {
  const handleSuccessCopy = () => {
    toast.success('주소를 복사했습니다.', {
      style: {
        backgroundColor: '#191919',
        color: '#fff',
      },
    });
  };

  return { handleSuccessCopy };
}

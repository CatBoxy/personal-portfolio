import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'es' ? es : en;
  return t;
}

export default useTranslation;
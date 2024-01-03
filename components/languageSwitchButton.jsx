import React from 'react';
import { useRouter } from 'next/router'

export default function LanguageSwitchButton() {

  const router = useRouter()
  const { locale } = router
  const otherLocale = locale === 'en' ? 'es' : 'en'

  const handleSwitch = () => {
    const currentPath = router.asPath
    router.push(currentPath, currentPath, { locale: otherLocale })
  }

  return (
    <>
      <button
        type="button"
        className="w-9 h-9 dark:bg-gray-600 bg-gray-200 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={handleSwitch}
      >
        {otherLocale.toUpperCase()}
      </button>
    </>
  );
}
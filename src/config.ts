/**
 * Конфігурація bio-сторінки для донатів
 * 
 * УСІ ПОСИЛАННЯ ТА НОМЕРИ КАРТОК МОЖНА ЗМІНИТИ ТУТ.
 */

export interface AppConfig {
  // Посилання на банку / сторінку оплати Monobank
  MONOBANK_URL: string;
  // Посилання на сторінку оплати ПУМБ
  PUMB_URL: string;
  // Посилання на сторінку оплати Sense Bank
  SENSE_URL: string;

  // Номери банківських карток для переказу (копіюються при натисканні)
  CARD_1: string;
  CARD_1_NAME: string;
  CARD_1_BANK: string;

  CARD_2: string;
  CARD_2_NAME: string;
  CARD_2_BANK: string;

  // Посилання на Telegram
  TELEGRAM_CHANNEL_URL: string;
  TELEGRAM_CHAT_URL: string;

  // Шлях до логотипу
  LOGO_PATH: string;

  // Тексти та інформація
  SLOGAN: string;
  PAGE_TITLE: string;
  SUBTITLE: string;
}

export const CONFIG: AppConfig = {
  // 1. Посилання на банки (Вставте свої URL сюди)
  MONOBANK_URL: "https://send.monobank.ua/jar/AGQR1fLMcP",
  PUMB_URL: "https://mobile-app.pumb.ua/EVRW",
  SENSE_URL: "https://app.sensebank.ua/0SKA",

  // 2. Номери банківських карток (Вставте свої номери сюди)
  CARD_1: "4441 1111 2317 2383",
  CARD_1_NAME: "Основна картка (Monobank)",
  CARD_1_BANK: "Monobank",

  CARD_2: "5355 2800 5205 6783",
  CARD_2_NAME: "Резервна картка ",
  CARD_2_BANK: "РЕЗЕРВ",

  // 3. Telegram посилання (Вставте свої URL сюди)
  TELEGRAM_CHANNEL_URL: "https://t.me/+U6A7szYMP8VhMGJi",
  TELEGRAM_CHAT_URL: "https://t.me/+S7qBjr8nNChkNWNi",

  // 4. Логотип (Використовується збережений логотип)
  LOGO_PATH: "/logo.jpg",

  // 5. Заголовки та тексти
  SLOGAN: "Донат — це твій спосіб діяти",
  PAGE_TITLE: "Оперативне Оповіщення Кривий Ріг",
  SUBTITLE: "Твоя підтримка допомагає нам надавати оперативні сповіщення цілодобово"
};

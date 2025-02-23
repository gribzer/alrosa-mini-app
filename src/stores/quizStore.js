import { writable } from "svelte/store";

// Вопросы квиза
// Вопросы квиза
export const questions = [
  {
    id: 1,
    text: "Выберите ситуацию, которая Вас больше всего вдохновляет на работу:",
    options: [
      {
        text: "Есть четкий план действий и сроки",
        scores: {
          "Управление проектами": 10,
          "Аналитика": 7,
          "Социальная сфера": 5
        }
      },
      {
        text: "При необходимости можно углубиться в детали и проанализировать всё досконально",
        scores: {
          "Аналитика": 10,
          "ИТ": 7,
          "Автоматизация производства": 5
        }
      },
      {
        text: "Есть возможность творить, создавать что-то красивое и уникальное",
        scores: {
          "Ювелирное дело": 10,
          "Ремонт": 7,
          "Строительство": 5
        }
      },
      {
        text: "Помогать и взаимодействовать с людьми",
        scores: {
          "Социальная сфера": 10,
          "Перевозки": 7,
          "Геология": 5
        }
      }
    ]
  },
  {
    id: 2,
    text: "Представьте: у Вас сломалась бытовая техника. Как Вы поступите?",
    options: [
      {
        text: "Сразу вызову специалиста",
        scores: {
          "Социальная сфера": 10,
          "Перевозки": 7,
          "Аналитика": 5
        }
      },
      {
        text: "Разберу, попытаюсь починить сам",
        scores: {
          "Ремонт": 10,
          "Автоматизация производства": 7,
          "ИТ": 5
        }
      },
      {
        text: "Найду инструкции, буду искать причину неполадки",
        scores: {
          "Аналитика": 10,
          "ИТ": 7,
          "Автоматизация производства": 5
        }
      },
      {
        text: "Проще купить новый гаджет",
        scores: {
          "Управление проектами": 10,
          "Геология": 7,
          "Социальная сфера": 5
        }
      }
    ]
  },
  {
    id: 3,
    text: "Какой формат работы Вам наиболее комфортен?",
    options: [
      {
        text: "Четкая структура, дедлайны и контроль",
        scores: {
          "Управление проектами": 10,
          "Аналитика": 7,
          "ИТ": 5
        }
      },
      {
        text: "Интересно внедрять новую технологию, автоматизировать процессы",
        scores: {
          "Автоматизация производства": 10,
          "ИТ": 7,
          "Аналитика": 5
        }
      },
      {
        text: "Возможность создавать что-то осязаемое своими руками",
        scores: {
          "Строительство": 10,
          "Ремонт": 7,
          "Ювелирное дело": 5
        }
      },
      {
        text: "Больше свободы, исследование нового, путешествия",
        scores: {
          "Геология": 10,
          "Социальная сфера": 7,
          "Перевозки": 5
        }
      }
    ]
  },
  {
    id: 4,
    text: "Как Вы любите проводить выходные?",
    options: [
      {
        text: "Ездить в новые места, знакомиться с местной культурой",
        scores: {
          "Перевозки": 10,
          "Геология": 7,
          "Управление проектами": 5
        }
      },
      {
        text: "Читаю о новейших технологиях или тестирую гаджеты",
        scores: {
          "ИТ": 10,
          "Автоматизация производства": 7,
          "Аналитика": 5
        }
      },
      {
        text: "Общаюсь, помогаю близким, занимаюсь волонтёрством",
        scores: {
          "Социальная сфера": 10,
          "Управление проектами": 7,
          "Геология": 5
        }
      },
      {
        text: "Занимаюсь домом, ремонтом, строительством",
        scores: {
          "Ремонт": 10,
          "Строительство": 7,
          "Ювелирное дело": 5
        }
      }
    ]
  },
  {
    id: 5,
    text: "Что Вам кажется более интересным в рабочем процессе?",
    options: [
      {
        text: "Глубокий анализ, расчёты",
        scores: {
          "Аналитика": 10,
          "ИТ": 7,
          "Управление проектами": 5
        }
      },
      {
        text: "Координация большой команды",
        scores: {
          "Управление проектами": 10,
          "Социальная сфера": 7,
          "Строительство": 5
        }
      },
      {
        text: "Работа руками, создание чего-то уникального",
        scores: {
          "Ювелирное дело": 10,
          "Ремонт": 7,
          "Строительство": 5
        }
      },
      {
        text: "Применение новых технологий в рутинных операциях",
        scores: {
          "Автоматизация производства": 10,
          "ИТ": 7,
          "Аналитика": 5
        }
      }
    ]
  },
  {
    id: 6,
    text: "Представьте, что Вы находитесь в мегаполисе. Что Вам наиболее интересно?",
    options: [
      {
        text: "Гулять по городу, изучать архитектуру, здания",
        scores: {
          "Строительство": 10,
          "Ремонт": 7,
          "Ювелирное дело": 5
        }
      },
      {
        text: "Выполнять точечные задачи, связанные с сервисом и ремонтом",
        scores: {
          "Ремонт": 10,
          "ИТ": 7,
          "Автоматизация производства": 5
        }
      },
      {
        text: "Оценивать потоки людей, транспорта, логистику",
        scores: {
          "Перевозки": 10,
          "Аналитика": 7,
          "Социальная сфера": 5
        }
      },
      {
        text: "Наблюдать за инновационными решениями, новыми гаджетами",
        scores: {
          "ИТ": 10,
          "Автоматизация производства": 7,
          "Аналитика": 5
        }
      }
    ]
  },
  {
    id: 7,
    text: "Какой из проектов Вы бы выбрали?",
    options: [
      {
        text: "Создание новой логистической схемы для перевозок",
        scores: {
          "Перевозки": 10,
          "Управление проектами": 7,
          "Аналитика": 5
        }
      },
      {
        text: "Разработка программного продукта",
        scores: {
          "ИТ": 10,
          "Аналитика": 7,
          "Автоматизация производства": 5
        }
      },
      {
        text: "Строительство или ремонт крупного объекта",
        scores: {
          "Строительство": 10,
          "Ремонт": 7,
          "Ювелирное дело": 5
        }
      },
      {
        text: "Изучение геологических особенностей местности",
        scores: {
          "Геология": 10,
          "Социальная сфера": 7,
          "Перевозки": 5
        }
      }
    ]
  },
  {
    id: 8,
    text: "Представьте, что Вы получили задание организовать масштабное мероприятие. Как Вы действуете?",
    options: [
      {
        text: "Составлю четкий план, распределю роли",
        scores: {
          "Управление проектами": 10,
          "Аналитика": 7,
          "ИТ": 5
        }
      },
      {
        text: "Подумаю, как организовать доставку и логистику",
        scores: {
          "Перевозки": 10,
          "Автоматизация производства": 7,
          "Геология": 5
        }
      },
      {
        text: "Займусь оформлением и декоративными элементами",
        scores: {
          "Ювелирное дело": 10,
          "Ремонт": 7,
          "Строительство": 5
        }
      },
      {
        text: "Особое внимание уделю взаимодействию и помощи коллегам",
        scores: {
          "Социальная сфера": 10,
          "Управление проектами": 7,
          "Перевозки": 5
        }
      }
    ]
  },
  {
    id: 9,
    text: "Какая из фраз наиболее близка Вам по духу?",
    options: [
      {
        text: "Всё должно быть по плану и вовремя",
        scores: {
          "Управление проектами": 10,
          "Аналитика": 7,
          "ИТ": 5
        }
      },
      {
        text: "Люблю разбираться в новом, докапываться до сути",
        scores: {
          "Аналитика": 10,
          "ИТ": 7,
          "Автоматизация производства": 5
        }
      },
      {
        text: "Уют, комфорт, что-то делать руками",
        scores: {
          "Ремонт": 10,
          "Ювелирное дело": 7,
          "Строительство": 5
        }
      },
      {
        text: "Нравится общаться и поддерживать людей",
        scores: {
          "Социальная сфера": 10,
          "Перевозки": 7,
          "Геология": 5
        }
      }
    ]
  },
  {
    id: 10,
    text: "Какой результат работы приносит Вам наибольшее удовлетворение?",
    options: [
      {
        text: "Вижу, как процесс становится эффективнее и технологичнее",
        scores: {
          "Автоматизация производства": 10,
          "ИТ": 7,
          "Аналитика": 5
        }
      },
      {
        text: "Смогу показать реальный физический объект — здание, помещение",
        scores: {
          "Строительство": 10,
          "Ремонт": 7,
          "Ювелирное дело": 5
        }
      },
      {
        text: "Когда удается наладить коммуникацию и работу команды",
        scores: {
          "Социальная сфера": 10,
          "Управление проектами": 7,
          "Перевозки": 5
        }
      },
      {
        text: "Открываю что-то новое о природе, ресурсах",
        scores: {
          "Геология": 10,
          "Аналитика": 7,
          "ИТ": 5
        }
      }
    ]
  }
];


// Начальные «категории» (проф. направления)
const categories = {
  "Автоматизация производства": 0,
  "Перевозки": 0,
  "Ювелирное дело": 0,
  "Ремонт": 0,
  "Строительство": 0,
  "Аналитика": 0,
  "Управление проектами": 0,
  "ИТ": 0,
  "Геология": 0,
  "Социальная сфера": 0
};


// В store храним:
// - currentQuestion: индекс текущего вопроса
// - answers: массив выбранных вариантов (по одному на вопрос)
// - completed/result: признак завершения и итоговое направление
// - scores: финальные очки по каждой категории (считаются в конце)
export const quizStore = writable({
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  completed: false,
  result: null,
  scores: { ...categories }
});

/**
 * Пользователь выбирает вариант ответа для текущего вопроса
 */
export function selectAnswer(option) {
  quizStore.update(state => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestion] = option;

    return {
      ...state,
      answers: newAnswers
    };
  });
}

/**
 * Переход к следующему вопросу.
 * Если это был последний вопрос – завершаем опрос и считаем результат.
 */
export function goNext() {
  quizStore.update(state => {
    const nextIndex = state.currentQuestion + 1;

    // Если превысили число вопросов – завершаем
    if (nextIndex >= questions.length) {
      const finalScores = calculateScores(state.answers);
      const bestCategory = getBestCategory(finalScores);

      return {
        ...state,
        completed: true,
        scores: finalScores,
        result: bestCategory
      };
    } else {
      // Иначе просто двигаем индекс вопроса
      return {
        ...state,
        currentQuestion: nextIndex
      };
    }
  });
}

/**
 * Переход на предыдущий вопрос (если уже не 0)
 */
export function goBack() {
  quizStore.update(state => {
    if (state.currentQuestion > 0) {
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1
      };
    }
    // Если находимся на 0-м вопросе – просто вернём state без изменений.
    // (Позже в компоненте, если увидим что currentQuestion=0, можно уйти на Onboarding)
    return state;
  });
}

/**
 * Сброс квиза в начальное состояние
 */
export function resetQuiz() {
  quizStore.set({
    currentQuestion: 0,
    answers: Array(questions.length).fill(null),
    completed: false,
    result: null,
    scores: { ...categories }
  });
}

/** Подсчитываем итоговые очки на основе массива answers */
function calculateScores(answers) {
  const total = { ...categories };
  answers.forEach(option => {
    if (option && option.scores) {
      for (const cat in option.scores) {
        total[cat] += option.scores[cat];
      }
    }
  });
  return total;
}

/** Находим направление с максимальным баллом */
function getBestCategory(scoreObj) {
  return Object.keys(scoreObj).reduce((a, b) =>
    scoreObj[a] > scoreObj[b] ? a : b
  );
}
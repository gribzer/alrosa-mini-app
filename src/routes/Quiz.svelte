<script>
  import { quizStore, questions, selectAnswer, goNext, goBack } from "../stores/quizStore";
  import Result from "./Result.svelte";
  import { createEventDispatcher } from "svelte";

  // Импортируем кастомные переходы
  import { cardIn, cardOut } from "../transitions.js";

  const dispatch = createEventDispatcher();

  $: isLastQuestion = $quizStore.currentQuestion === questions.length - 1;

  function handleBack() {
    if ($quizStore.currentQuestion === 0) {
      dispatch("backToOnboarding");
    } else {
      goBack();
    }
  }

  function handleNext() {
    goNext();
  }

  function handleSelect(option) {
    selectAnswer(option);
  }
</script>

{#if $quizStore.completed}
  <!-- Экран результата -->
  <Result />
{:else}
  <div class="quiz-container">
    <!-- Фоновая картинка -->
    <div class="hex-bg"></div>

    <!-- Шапка (кнопка назад, счётчик, инфо) -->
    <div class="quiz-header">
      <div class="top-nav">
        <button class="icon-button" on:click={handleBack}>
          <img src="/public/arrow-left.svg" alt="Назад" />
        </button>
        <div class="progress-info">
          {$quizStore.currentQuestion + 1} / {questions.length}
        </div>
        <button class="icon-button">
          <img src="/public/info.svg" alt="Инфо" />
        </button>
      </div>

      <!-- Прогресс-бар -->
      <div class="progress-bar-bg">
        <div
          class="progress-bar-fill"
          style="width: {((( $quizStore.currentQuestion + 1 ) / questions.length) * 100)}%"
        ></div>
      </div>
    </div>

    <!-- Контент квиза -->
    <div class="quiz-content">
      <div class="card-stack">
        <!-- Псевдо-слои под карточкой -->
        <div class="card-layer layer-1"></div>
        <div class="card-layer layer-2"></div>

        <!-- Обёртка, резервирующая пространство под анимированную карточку -->
        <div class="card-wrapper">
          {#key $quizStore.currentQuestion}
            <div class="question-card"
                 in:cardIn={{ duration: 600, angle: 10, y: 50 }}
                 out:cardOut={{ duration: 600, angle: -10, y: -50 }}>

              <div class="question-subtitle">
                Вопрос {$quizStore.currentQuestion + 1}
              </div>
              <h2 class="question-title">
                {questions[$quizStore.currentQuestion].text}
              </h2>

              <!-- Список ответов -->
              <div class="answers-list">
                {#each questions[$quizStore.currentQuestion].options as option}
                  <button
                    class="answer-item { $quizStore.answers[$quizStore.currentQuestion] === option ? 'selected' : '' }"
                    type="button"
                    on:click={() => handleSelect(option)}
                  >
                    <span class="answer-text">{option.text}</span>
                    <span class="radio-circle">
                      {#if $quizStore.answers[$quizStore.currentQuestion] === option}
                        <span class="radio-dot"></span>
                      {/if}
                    </span>
                  </button>
                {/each}
              </div>
            </div>
          {/key}
        </div>
      </div>
    </div>

    <!-- Кнопка "Следующий вопрос" -->
    <button
      class="bottom-btn {isLastQuestion ? 'final' : ''}"
      disabled={!$quizStore.answers[$quizStore.currentQuestion]}
      on:click={handleNext}
      type="button"
    >
      {#if isLastQuestion}
        Узнать результат
      {:else}
        Следующий вопрос
      {/if}
    </button>

    <footer class="footer">
      Специальный проект «АЛРОСА»
    </footer>
  </div>
{/if}

<style>
/* Корневой контейнер */
.quiz-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #FFF 0%, #D7EFFE 65.17%, #FFF 100%);
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
}

/* Фоновая картинка */
.hex-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: url("/public/hex.svg") no-repeat center top / cover;
  z-index: 0;
}

/* Шапка (кнопка, счётчик, инфо) */
.quiz-header {
  position: relative;
  z-index: 1; 
  margin-bottom: 15px;
}
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.icon-button {
  width: 45px;
  height: 45px;
  background: rgba(255,255,255,0.3);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-button img {
  width: 20px;
  height: 20px;
}
.progress-info {
  font-weight: 300;
  font-size: 16px;
  color: #fff;
}

/* Прогресс-бар */
.progress-bar-bg {
  margin-top: 10px;
  height: 6px;
  background: rgba(255, 255, 255, 0.50);
  border-radius: 10px;
  position: relative;
}
.progress-bar-fill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  background: #358CD9;
  border-radius: 10px;
  width: 0;
}

/* Контент (вопрос) */
.quiz-content {
  flex: 1;
  position: relative;
  z-index: 1;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
}

/* «Стопка» карточек */
.card-stack {
  position: relative;
  max-width: 400px;
  margin: 0 auto 20px auto;
  perspective: 1000px; /* Небольшой 3D-эффект */
}

/* Псевдослои */
.card-layer {
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  z-index: 0;
  transition: transform 0.6s ease;
}
.card-layer.layer-1 {
  transform: translateY(30px);
  background: #CEECFF;
  width: 80%;
  left: 10%;
}
.card-layer.layer-2 {
  transform: translateY(15px);
  background: #E6F6FF;
}

/* Обёртка, резервирующая пространство под карточку */
.card-wrapper {
  position: relative;
  width: 100%;        /* Тянемся на всю ширину card-stack */
  min-height: 400px;  /* Резервируем вертикальное место, чтобы карточка не прыгала */
  overflow: visible;
}

/* Сама карточка, вынутая из потока */
.question-card {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  transform-origin: center center;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* Текст над вопросом */
.question-subtitle {
  font-size: 16px;
  color: #999;
  margin-bottom: 4px;
}
/* Заголовок вопроса */
.question-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -1.2px;
}

/* Список ответов */
.answers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

/* Кнопка-ответ */
.answer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefe;
  border: 1px solid #E6E6E6;
  border-radius: 15px;
  padding: 10px 10px 10px 15px;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}
.answer-item:hover {
  background: #f7f7f7;
}
.answer-item.selected {
  background: #C2E8FF;
  border-color: #358CD9;
}
.answer-text {
  flex: 1;
  font-size: 14px;
  color: #333;
  margin-right: 20px;
  font-weight: 500;
}

/* Радио-кружок */
.radio-circle {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: relative;
}
.radio-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #358CD9;
  border: 1px solid #358CD9;
  position: absolute;
  top: -1px;
  left: -1px;
}
.radio-dot::before {
  content: '';
  display: block;
  background: url('/public/check.svg') no-repeat center center / cover;
  width: 12px;
  height: 8px;
  position: absolute;
  top: 8px;
  left: 6px;
}

/* Кнопка внизу */
.bottom-btn {
  width: 100%;
  border-radius: 9999px;
  font-size: 18px;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  background: #358CD9;
  color: #fff;
  font-weight: 300;
  margin-bottom: 10px;
  z-index: 999;
}
.bottom-btn.final {
  background: #F7381A;
}
.bottom-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: #a3bcca;
}
</style>

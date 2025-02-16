<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function startQuiz() {
    dispatch("start");
  }
</script>

<div class="onboarding-container">
  <!-- 1) Блок с логотипом (сверху) -->
  <div class="logo-block">
    <img src="/public/logo.svg" alt="АЛРОСА" class="logo" />
  </div>

  <!-- 2) Блок снизу (заголовок, описание, кнопка, футер) -->
  <div class="bottom-content">
    <h1 class="title">
      Узнай профессию <br />
      <span class="highlight">своей мечты</span>
    </h1>
    <p class="description">
      Пройди мини-опрос и узнай, какая профессия подойдёт тебе лучше всего
    </p>

    <button class="bottom-btn" on:click={startQuiz}>
      Начать опрос
    </button>

    <footer class="footer">
      Специальный проект «АЛРОСА»
    </footer>
  </div>
</div>

<style>
/* Родительский контейнер на всю высоту экрана */
.onboarding-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url("public/onboarding-bg.svg") no-repeat center 3% / contain;
  margin: 0;
  box-sizing: border-box;
}

/* 1) Логотип сверху */
.logo-block {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* Отступ сверху, если требуется */
  margin-top: 25px;
}

/* Размер логотипа */
.logo {
  width: 120px;
}

/* 2) Основной блок снизу:
   Занимает всё доступное пространство, 
   прижимая контент к нижней части экрана */
.bottom-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* «прижимаем» содержимое к низу */
  align-items: center;
  text-align: center;
  background: linear-gradient(0deg, #FFF 35%, rgba(255, 255, 255, 0.00) 50%);
  padding: 0 20px; /* боковые отступы, если нужно */
  padding-bottom: 20px; /* отступ от нижнего края */
}

.title {
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: -1.8px;
}

.highlight {
  color: #358CD9;
}

.description {
  font-size: 15px;
  color: #878787;
  max-width: 320px;
  margin: 0 auto 20px;
}

/* Кнопка (пилюля) */
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
  margin-bottom: 10px; /* небольшой отступ перед футером */
}

</style>

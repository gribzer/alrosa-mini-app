<script>
  import { quizStore, resetQuiz } from "../stores/quizStore";
  import { get } from "svelte/store";

  // Карта: результат -> иконка
  const resultIcons = {
    "Автоматизация производства": "/public/hex-automation.svg",
    "Перевозки": "/public/hex-transport.svg",
    "Ювелирное дело": "/public/hex-jewelry.svg",
    "Ремонт": "/public/hex-repair.svg",
    "Строительство": "/public/hex-building.svg",
    "Аналитика": "/public/hex-analytics.svg",
    "Управление проектами": "/public/hex-management.svg",
    "ИТ": "/public/hex-it.svg",
    "Геология": "/public/hex-geology.svg",
    "Социальная сфера": "/public/hex-social.svg"
  };

// Словарь описаний для каждой профессии
const resultDescriptions = {
  "Автоматизация производства": `
Вы любите технологии и умеете повышать эффективность. 
Ваши навыки ценны для автоматизации сложных процессов, включая дистанционное управление техникой. 
В АЛРОСА вас ждут вакансии инженера КИПиА, специалиста по автоматизации и IT-специалиста.
  `,

  "Перевозки": `
Вы уверены в себе и готовы управлять сложной техникой. 
Ваше призвание — перевозить грузы и людей на суше, воде и в воздухе. 
В АЛРОСА есть вакансии водителя, пилота и капитана корабля.
  `,

  "Ювелирное дело": `
Вы внимательны к деталям и любите создавать красоту. 
Работа с алмазами требует усидчивости и точности. 
В АЛРОСА вы можете стать огранщиком, дизайнером ювелирных изделий или сортировщиком алмазов.
  `,

  "Ремонт": `
Вы легко разбираетесь в технике и любите чинить механизмы. 
Любая поломка для вас — лишь новая задача. 
В АЛРОСА вас ждут вакансии механика, электрослесаря и инженера по надежности.
  `,

  "Строительство": `
Вы умеете превращать материалы в прочные и полезные конструкции. 
Ваш труд будет служить людям долгие годы. 
В АЛРОСА есть вакансии монтажника, сварщика, инженера-проектировщика и архитектора.
  `,

  "Аналитика": `
Вы любите работать с данными и находить закономерности. 
Ваш аналитический склад ума поможет принимать важные решения. 
В АЛРОСА есть вакансии data-аналитика и бизнес-аналитика.
  `,

  "Управление проектами": `
Вы прирожденный лидер, умеете организовать команду и добиваться целей. 
Масштабные задачи — ваша стихия. 
В АЛРОСА вас ждут вакансии проектного менеджера и руководителя проектов.
  `,

  "ИТ": `
Вы разбираетесь в технологиях и любите решать сложные задачи. 
Ваши навыки помогут автоматизировать процессы и улучшить цифровую инфраструктуру. 
В АЛРОСА есть вакансии разработчиков, тестировщиков, DevOps-инженеров и специалистов по кибербезопасности.
  `,

  "Геология": `
Вы исследователь по духу и вас манит изучение природных процессов. 
Ваши открытия могут привести к новым месторождениям алмазов. 
В АЛРОСА есть вакансии геолога, гидрогеолога, маркшейдера и геодезиста.
  `,

  "Социальная сфера": `
Вы умеете работать с людьми и создавать комфортную атмосферу. 
Ваше призвание — помогать и развивать общественные программы. 
В АЛРОСА вам подойдут вакансии HR-специалиста, медицинского работника и воспитателя.
  `
};


$: state = get(quizStore);
  $: result = state.result;

  function restart() {
    resetQuiz();
  }

  // Функция заглушка для примера
  function shareResult() {
    alert("Поделиться результатом (пример)!");
  }
</script>

<main class="result-container">
  <!-- Верхняя часть (логотип, шапка) -->
  <header class="header">
    <img src="/public/logo.svg" alt="АЛРОСА" class="logo" />
  </header>

  <!-- Основной блок с «карточкой» результата -->
  <div class="content-wrapper">
    <div class="result-card">
      <div class="hex-wrap">
        <img class="hex-base" src="/public/hex-bg.svg" alt="Фон голубого шестиугольника" />
        {#if resultIcons[result]}
          <img class="hex-profession" src={resultIcons[result]} alt={result} />
        {/if}
      </div>

      <p class="subtitle">Ваше направление</p>
      <h2 class="profession-title">{result}</h2>
      {#if resultDescriptions[result]}
        <p class="description">{@html resultDescriptions[result]}</p>
      {:else}
        <p class="description">Описание для {result} пока не добавлено.</p>
      {/if}
    </div>
  </div>

  <!-- Нижняя панель -->
  <div class="bottom-panel">
    <!-- Большая красная кнопка -->
    <button class="btn btn-red big-button">
      Хочу работать в АЛРОСА
    </button>

    <!-- Две компактные кнопки в одну строку с иконками -->
    <div class="small-buttons-row">
      <button class="btn btn-lightblue btn-icon" on:click={shareResult}>
        <img src="/public/share.svg" class="icon" alt="Share" />
        Поделиться
      </button>
      <button class="btn btn-lightgray btn-icon" on:click={restart}>
        <img src="/public/restart.svg" class="icon" alt="Restart" />
        Пройти заново
      </button>
    </div>

    <footer class="footer">Специальный проект «АЛРОСА»</footer>
  </div>
</main>

<style>
/* Общий контейнер */
.result-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url("public/result-bg.svg") no-repeat center -5% / contain;
}

/* Шапка */
.header {
  text-align: center;
}
.logo {
  width: 120px;
  margin: 25px auto 0 auto;
  display: block;
}

/* Центральный блок «выталкиваем» вниз нижнюю панель */
.content-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
}

/* Карточка */
.result-card {
  position: relative;
  background: #fff;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Обёртка для иконки */
.hex-wrap {
  position: absolute;
  left: 50%;
  top: -40px;  /* чтобы гекс был чуть над карточкой */
  transform: translate(-50%, -50%);
  width: 100px;
  height: 116px;
}
.hex-base {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: auto;
}
.hex-profession {
  position: absolute;
  width: 46px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Текст */
.subtitle {
  color: #AEAEAE;
  margin-bottom: 8px;
  font-size: 14px;
  margin-top: 20px; /* отступ сверху, чтобы не лезло под hex */
}
.profession-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 10px;
  color: #000;
  letter-spacing: -1.3px;
}
.description {
  font-size: 14px;
  color: #000;
  line-height: 1.4;
}

/* Нижняя панель */
.bottom-panel {
  padding: 20px;
  text-align: center;
}

/* Кнопки */
.btn {
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
}

/* Первая большая красная кнопка */
.big-button {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 12px auto; /* отступ снизу */
  padding: 20px;
}
.btn-red {
  background: #F7381A;
  color: #fff;
}

/* Маленькие кнопки в одну строчку */
.small-buttons-row {
  display: flex;
  justify-content: center; /* по центру или space-between */
  gap: 10px;
  max-width: 400px;
  margin: 0 auto 12px auto;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  flex: 1;
  font-size: 14px;
}

.icon {
  width: 16px;
  height: 16px;
}

/* Цвета фона для мелких кнопок */
.btn-lightblue {
  background: #C2E8FF;
  color: #358CD9;
}
.btn-lightgray {
  background: #eaeaea;
  color: #AEAEAE;
}

</style>
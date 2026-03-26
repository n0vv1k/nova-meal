const plans = [
  {
    name: "Lite",
    kcal: "1200–1400 ккал",
    price: "890 ₽ / день",
    text: "Для легкого дефицита калорий, комфорта и понятного режима без перегруза.",
  },
  {
    name: "Daily",
    kcal: "1600–1900 ккал",
    price: "1090 ₽ / день",
    text: "Для обычного городского ритма: работа, дела, прогулки, тренировки без фанатизма.",
  },
  {
    name: "Active",
    kcal: "2200–2500 ккал",
    price: "1290 ₽ / день",
    text: "Для насыщенного дня, спорта и более плотного рациона с хорошим запасом энергии.",
  },
];

const features = [
  {
    title: "Рацион на весь день",
    text: "Завтрак, обед, ужин и перекус уже продуманы и собраны в удобный формат.",
  },
  {
    title: "Нормальная вкусная еда",
    text: "Без ощущения, что ты сидишь на бесконечной диете из сухой курицы и гречки.",
  },
  {
    title: "Экономия времени",
    text: "Не нужно закупаться, готовить, считать калории и собирать контейнеры.",
  },
  {
    title: "Доставка под график",
    text: "Можно получать рацион домой или в офис и не ломать свой распорядок.",
  },
];

const dayMenu = [
  {
    time: "08:00",
    title: "Завтрак",
    dish: "Сырники из рикотты с йогуртом и ягодным соусом",
  },
  {
    time: "12:30",
    title: "Обед",
    dish: "Курица терияки, рис жасмин и овощи",
  },
  {
    time: "16:00",
    title: "Перекус",
    dish: "Греческий йогурт с гранолой и фруктами",
  },
  {
    time: "19:30",
    title: "Ужин",
    dish: "Лосось, киноа и брокколи с лимонным соусом",
  },
];

const reviews = [
  {
    name: "Анна, 27 лет",
    text: "Мне понравилось, что здесь все выглядит не как очередная диета, а как нормальный удобный сервис. Просто выбрала программу и перестала тратить время на готовку.",
  },
  {
    name: "Дмитрий, 31 год",
    text: "Взял Daily. По ощущениям это лучший формат для работы: еда всегда под рукой, калории понятные, ничего считать не надо.",
  },
  {
    name: "Мария, 25 лет",
    text: "Нравится сама подача: аккуратный дизайн, понятные программы и нормальные блюда, которые реально хочется есть каждый день.",
  },
];

const faq = [
  {
    q: "Можно ли начать с пробного дня?",
    a: "Да, можно оформить пробный день и посмотреть, подходит ли вам формат, меню и доставка.",
  },
  {
    q: "Есть ли разные программы по калорийности?",
    a: "Да, у нас есть несколько программ под разные цели: легкий рацион, сбалансированный и более калорийный.",
  },
  {
    q: "Можно ли доставлять в офис?",
    a: "Да, доставка доступна и домой, и в офис в удобный временной интервал.",
  },
  {
    q: "Как часто меняется меню?",
    a: "Меню обновляется регулярно, чтобы рацион не надоедал и оставался разнообразным.",
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <div className="border-b border-black/5 bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3 text-center text-sm text-[var(--muted)]">
          Готовые рационы на день и неделю · доставка домой и в офис
        </div>
      </div>

      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between gap-6">
          <a href="#hero" className="text-2xl font-semibold tracking-[-0.04em]">
            NOVA MEAL
          </a>

          <nav className="hidden items-center gap-6 rounded-full border border-black/10 bg-[var(--surface)] px-5 py-3 text-sm md:flex">
            <a href="#concept" className="transition hover:text-[var(--accent)]">
              О сервисе
            </a>
            <a href="#plans" className="transition hover:text-[var(--accent)]">
              Программы
            </a>
            <a href="#menu" className="transition hover:text-[var(--accent)]">
              Меню
            </a>
            <a href="#reviews" className="transition hover:text-[var(--accent)]">
              Отзывы
            </a>
            <a href="#faq" className="transition hover:text-[var(--accent)]">
              FAQ
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Оставить заявку
          </a>
        </div>
      </header>

      <section
        id="hero"
        className="mx-auto grid max-w-7xl gap-8 px-6 pb-8 pt-4 md:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="rounded-[36px] bg-[var(--surface)] p-8 shadow-[0_20px_80px_rgba(24,32,36,0.06)] md:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[var(--soft)] px-4 py-2 text-sm text-[var(--accent)]">
              Доставка здорового питания
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Еда,
              <br />
              которая
              <br />
              вписывается
              <br />
              в жизнь
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Готовые программы питания на каждый день: без готовки, без подсчетов,
              без хаоса в холодильнике. Выбираете цель — получаете понятный рацион
              с удобной доставкой.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plans"
                className="rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Смотреть программы
              </a>
              <a
                href="#menu"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Посмотреть меню
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--muted)]">Калорийность</p>
                <p className="mt-2 text-xl font-semibold">1200–2500 ккал</p>
              </div>
              <div className="rounded-3xl bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--muted)]">Формат</p>
                <p className="mt-2 text-xl font-semibold">4 блюда в день</p>
              </div>
              <div className="rounded-3xl bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--muted)]">Доставка</p>
                <p className="mt-2 text-xl font-semibold">Дом / офис</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[36px] bg-[var(--sage)] p-8 text-[var(--text)]">
            <p className="text-sm uppercase tracking-[0.22em] text-black/45">
              Рацион недели
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Daily
            </h2>
            <p className="mt-3 text-lg text-black/60">1600–1900 ккал</p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-3xl bg-white/70 p-4">
                Завтрак, обед, ужин и перекус уже собраны
              </div>
              <div className="rounded-3xl bg-white/70 p-4">
                Подходит для обычного активного ритма
              </div>
              <div className="rounded-3xl bg-white/70 p-4">
                От 1090 ₽ в день
              </div>
            </div>
          </div>

          <form
            id="cta"
            className="rounded-[36px] bg-[var(--surface)] p-8 shadow-[0_20px_80px_rgba(24,32,36,0.06)]"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
              Заявка
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Подберем программу под вашу цель
            </h3>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
              <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none transition focus:border-[var(--accent)]">
                <option>Выберите программу</option>
                <option>Lite</option>
                <option>Daily</option>
                <option>Active</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[var(--accent)] px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5"
              >
                Отправить заявку
              </button>

              <p className="text-sm leading-6 text-[var(--muted)]">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[28px] border border-black/8 bg-[var(--surface)] p-6">
            <p className="text-sm text-[var(--muted)]">Рационов в линейке</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">3</p>
          </div>
          <div className="rounded-[28px] border border-black/8 bg-[var(--surface)] p-6">
            <p className="text-sm text-[var(--muted)]">Блюд в день</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">4</p>
          </div>
          <div className="rounded-[28px] border border-black/8 bg-[var(--surface)] p-6">
            <p className="text-sm text-[var(--muted)]">Минимальный старт</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">1 день</p>
          </div>
          <div className="rounded-[28px] border border-black/8 bg-[var(--surface)] p-6">
            <p className="text-sm text-[var(--muted)]">Доставка</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">ежедневно</p>
          </div>
        </div>
      </section>

      <section id="concept" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
            О сервисе
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Новый шаблон —
            <br />
            не “типичный лендинг”
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="rounded-[32px] bg-[var(--surface)] p-8 shadow-[0_20px_70px_rgba(24,32,36,0.05)] md:col-span-7">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Идея
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Это не про диету.
              <br />
              Это про удобный режим.
            </h3>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
              Мы не продаем стресс от подсчетов. Мы продаем ощущение, что вопрос
              питания уже решен: еда нормальная, формат удобный, день становится
              спокойнее и собраннее.
            </p>
          </div>

          <div className="rounded-[32px] bg-[var(--soft)] p-8 md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Подходит для
            </p>
            <ul className="mt-5 space-y-4 text-lg leading-7">
              <li>— занятых специалистов</li>
              <li>— тех, кто хочет режим без готовки</li>
              <li>— людей с активным городским графиком</li>
              <li>— тех, кто хочет есть понятнее и легче</li>
            </ul>
          </div>

          {features.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-[32px] p-8 ${
                index === 1
                  ? "bg-[var(--accent)] text-white"
                  : index === 3
                  ? "bg-[var(--sage)]"
                  : "bg-[var(--surface)] shadow-[0_20px_70px_rgba(24,32,36,0.05)]"
              } md:col-span-6`}
            >
              <p
                className={`text-sm uppercase tracking-[0.2em] ${
                  index === 1 ? "text-white/70" : "text-[var(--muted)]"
                }`}
              >
                0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p
                className={`mt-4 leading-8 ${
                  index === 1 ? "text-white/85" : "text-[var(--muted)]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
              Программы
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Выберите свой ритм
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-[var(--muted)]">
            Вместо одинаковых карточек — горизонтальные блоки с разным характером и
            четким позиционированием.
          </p>
        </div>

        <div className="space-y-5">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`grid gap-6 rounded-[34px] p-8 md:grid-cols-[1.1fr_0.7fr_0.6fr] md:items-center ${
                index === 1
                  ? "bg-[var(--text)] text-white"
                  : "border border-black/8 bg-[var(--surface)]"
              }`}
            >
              <div>
                <p
                  className={`text-sm uppercase tracking-[0.2em] ${
                    index === 1 ? "text-white/60" : "text-[var(--muted)]"
                  }`}
                >
                  {plan.kcal}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 max-w-2xl leading-8 ${
                    index === 1 ? "text-white/78" : "text-[var(--muted)]"
                  }`}
                >
                  {plan.text}
                </p>
              </div>

              <div>
                <p
                  className={`text-sm ${
                    index === 1 ? "text-white/60" : "text-[var(--muted)]"
                  }`}
                >
                  Стоимость
                </p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
              </div>

              <div className="md:text-right">
                <a
                  href="#cta"
                  className={`inline-block rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5 ${
                    index === 1
                      ? "bg-white text-[var(--text)]"
                      : "bg-[var(--accent)] text-white"
                  }`}
                >
                  Выбрать
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
              Меню на день
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Как выглядит
              <br />
              один день
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[var(--muted)]">
              Вместо обычной сетки с одинаковыми карточками — вертикальная лента дня.
              Выглядит живее и лучше подходит под тематику meal plan.
            </p>
          </div>

          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 top-0 h-full w-px bg-black/10" />
            <div className="space-y-6">
              {dayMenu.map((item, index) => (
                <div
                  key={item.time}
                  className={`relative rounded-[30px] p-6 ${
                    index % 2 === 0
                      ? "bg-[var(--surface)] shadow-[0_18px_60px_rgba(24,32,36,0.05)]"
                      : "bg-[var(--soft)]"
                  }`}
                >
                  <div className="absolute -left-[34px] top-8 h-4 w-4 rounded-full bg-[var(--accent)]" />
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.title}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                        {item.dish}
                      </h3>
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm text-[var(--muted)]">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
            Отзывы
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={item.name}
              className={`rounded-[34px] p-8 ${
                index === 1
                  ? "bg-[var(--text)] text-white"
                  : "bg-[var(--surface)] shadow-[0_18px_60px_rgba(24,32,36,0.05)]"
              }`}
            >
              <p className={`text-lg leading-8 ${index === 1 ? "text-white/82" : "text-[var(--text)]"}`}>
                “{item.text}”
              </p>
              <p
                className={`mt-8 text-sm uppercase tracking-[0.18em] ${
                  index === 1 ? "text-white/55" : "text-[var(--muted)]"
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Частые
              <br />
              вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="rounded-[28px] border border-black/8 bg-[var(--surface)] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {item.q}
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/6 bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">NOVA MEAL</p>
            <p className="mt-2 text-[var(--muted)]">
              Современная доставка здорового питания
            </p>
          </div>

          <div className="text-sm text-[var(--muted)]">
            <p>+7 (999) 123-45-67</p>
            <p>hello@novameal.ru</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
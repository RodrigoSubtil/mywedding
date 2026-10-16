import Image from "next/image";
import Link from "next/link";
import { FooterLanguages } from "@/components/layout/language-switcher";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/locales";
import { Header } from "@/components/layout/header";
import { Icon } from "@/components/ui/icon";
import { Brand } from "@/components/ui/brand";
import { MotionRoot } from "@/components/ui/motion-root";
import { models, wedding } from "@/content/wedding";
import { founders } from "@/config/contacts";
import { WeddingPreview } from "./wedding-preview";
import { GuestExperience } from "./guest-experience";
import { Faq } from "./faq";

export async function Landing({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Landing" });
  const modelContent = t.raw("models.items") as {
    name: string;
    description: string;
    tags: string[];
  }[];
  const steps = t.raw("steps.items") as { title: string; body: string }[];
  const questions = t.raw("faq.items") as {
    question: string;
    answer: string;
  }[];
  const demo = `/${locale}/demonstracao/`;
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t("skip")}
      </a>
      <Header locale={locale} />
      <MotionRoot id="conteudo" motionKey={locale}>
        <section
          className="container section hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 id="hero-title">{t("hero.title")}</h1>
            <p className="lead">{t("hero.description")}</p>
            <div className="actions">
              <a className="button" href="#modelos">
                {t("hero.primary")}
                <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href={demo}>
                <Icon name="monitor" />
                {t("hero.secondary")}
              </a>
            </div>
            <p className="small hero-note">
              <Icon name="heart" />
              {t("hero.note")}
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-stage">
              <div className="browser-preview">
                <div className="browser-bar">
                  <span className="browser-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>clara & miguel · {t("demoLabel").toLowerCase()}</span>
                  <Icon name="link" />
                </div>
                <WeddingPreview locale={locale} priority />
              </div>
              <div className="phone-preview" aria-hidden="true">
                <span className="phone-speaker" />
                <Icon name="heart" />
                <p className="phone-couple">{wedding.names}</p>
                <div className="phone-photo">
                  <Image
                    src="/images/editorial.webp"
                    width={800}
                    height={1000}
                    alt=""
                  />
                </div>
                <span className="small">18 · 09 · 2027</span>
                <span className="phone-footer">
                  <Icon name="calendar" />
                  {locale === "pt-BR" ? "O nosso dia" : "O nosso dia"}
                </span>
              </div>
            </div>
            <p className="visual-caption">
              <span className="caption-line" />
              {t("heroBadge")}
              <span className="caption-line" />
            </p>
          </div>
        </section>
        <div className="benefits-strip">
          <div className="container benefits">
            {[0, 1, 2].map((i) => (
              <p key={i} data-reveal>
                <Icon
                  name={i === 0 ? "palette" : i === 1 ? "calendar" : "users"}
                />
                {t(`benefits.${i}`)}
              </p>
            ))}
          </div>
        </div>
        <section
          className="container section"
          id="modelos"
          aria-labelledby="models-title"
        >
          <div className="section-heading centered" data-reveal>
            <p className="eyebrow section-label">
              <Icon name="palette" />
              {t("models.eyebrow")}
            </p>
            <h2 id="models-title">{t("models.title")}</h2>
            <p>{t("models.description")}</p>
          </div>
          <div className="models-grid">
            {models.map((model, index) => (
              <article
                className="model"
                key={model.id}
                data-reveal
                data-reveal-order={index}
              >
                <a
                  className="model-preview-link"
                  href={`${demo}#${model.id}`}
                  aria-label={`${t("models.example")} — ${modelContent[index].name}`}
                >
                  <WeddingPreview locale={locale} model={model.id} compact />
                  <span className="model-preview-label">
                    {t("demoLabel")}
                    <Icon name="diagonal" />
                  </span>
                </a>
                <div className="model-title">
                  <h3>{modelContent[index].name}</h3>
                  <span className="small">0{index + 1}</span>
                </div>
                <p>{modelContent[index].description}</p>
                <ul className="model-tags">
                  {modelContent[index].tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="inline-action" href={`${demo}#${model.id}`}>
                  {t("models.example")}
                  <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          className="steps-section"
          id="como-funciona"
          aria-labelledby="steps-title"
        >
          <div className="container section">
            <div className="section-heading centered" data-reveal>
              <p className="eyebrow section-label">
                <Icon name="pencil" />
                {t("steps.eyebrow")}
              </p>
              <h2 id="steps-title">{t("steps.title")}</h2>
              <p>{t("steps.description")}</p>
            </div>
            <ol className="steps-grid">
              {steps.map((step, index) => (
                <li key={step.title} data-reveal data-reveal-order={index}>
                  <div className="step-top">
                    <span className="step-number">0{index + 1}</span>
                    <span className="step-line" />
                    <Icon
                      name={
                        index === 0
                          ? "palette"
                          : index === 1
                            ? "pencil"
                            : "envelope"
                      }
                    />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          className="container section"
          id="recursos"
          aria-labelledby="resources-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow section-label">
              <Icon name="users" />
              {t("experience.eyebrow")}
            </p>
            <h2 id="resources-title">{t("experience.title")}</h2>
            <p>{t("experience.description")}</p>
          </div>
          <GuestExperience />
          <p className="small section-footnote">{t("experience.note")}</p>
        </section>
        <section className="founders-section" aria-labelledby="founders-title">
          <div className="container section founders-layout">
            <figure className="editorial-photo" data-reveal>
              <Image
                src="/images/editorial.webp"
                alt={
                  locale === "pt-BR"
                    ? "Mãos de um casal com alianças e um buquê branco"
                    : "Mãos de um casal com alianças e um ramo branco"
                }
                width={800}
                height={1000}
                sizes="(max-width: 767px) 90vw, 430px"
              />
              <figcaption>{t("founders.caption")}</figcaption>
            </figure>
            <div data-reveal>
              <p className="eyebrow section-label">
                <Icon name="users" />
                {t("founders.eyebrow")}
              </p>
              <h2 id="founders-title">{t("founders.title")}</h2>
              <p className="lead">{t("founders.body")}</p>
              <p>{t("founders.note")}</p>
              <div className="founder-signatures">
                {founders.map((founder) => (
                  <div key={founder.name}>
                    <strong>{founder.name}</strong>
                    <span>
                      <Icon
                        name={founder.role === "developer" ? "code" : "penTool"}
                      />
                      {t(`founders.${founder.role}`)}
                    </span>
                  </div>
                ))}
              </div>
              <a className="inline-action" href="#contato">
                {t("founders.contact")}
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
        <section
          className="container section contact-section"
          id="contato"
          aria-labelledby="contact-title"
        >
          <div className="section-heading centered" data-reveal>
            <p className="eyebrow section-label">
              <Icon name="chat" />
              {t("offer.eyebrow")}
            </p>
            <h2 id="contact-title">{t("offer.title")}</h2>
            <p>{t("offer.body")}</p>
          </div>
          <div className="contact-grid">
            {founders.map((founder, i) => (
              <article
                className="contact-card"
                key={founder.name}
                data-reveal
                data-reveal-order={i}
              >
                <span className="founder-monogram" aria-hidden="true">
                  <Icon
                    name={founder.role === "developer" ? "code" : "penTool"}
                    width="24"
                    height="24"
                  />
                </span>
                <div>
                  <h3>{founder.name}</h3>
                  <p className="small">{t(`founders.${founder.role}`)}</p>
                  <a
                    className="inline-action"
                    href={`https://www.instagram.com/${founder.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="instagram" />
                    <span>@{founder.instagram}</span>
                    <Icon name="diagonal" />
                  </a>
                  <a className="contact-phone" href={founder.phoneHref}>
                    <Icon name="phone" />
                    {founder.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="container section faq-section"
          id="duvidas"
          aria-labelledby="faq-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow section-label">
              <Icon name="help" />
              {t("faq.eyebrow")}
            </p>
            <h2 id="faq-title">{t("faq.title")}</h2>
          </div>
          <Faq items={questions} />
        </section>
        <section className="closing">
          <div className="container section" data-reveal>
            <p className="eyebrow section-label">
              <Icon name="heart" />
              {t("closing.eyebrow")}
            </p>
            <h2>{t("closing.title")}</h2>
            <p>{t("closing.body")}</p>
            <div className="actions">
              <a className="button" href="#modelos">
                {t("closing.action")}
                <Icon name="arrow" />
              </a>
              <a className="closing-contact text-link" href="#contato">
                {t("closing.secondary")}
              </a>
            </div>
          </div>
        </section>
      </MotionRoot>
      <footer className="site-footer">
        <div className="container section footer-grid">
          <div>
            <Brand href={`/${locale}/`} />
            <p>{t("footer.tagline")}</p>
          </div>
          <div>
            <p className="footer-label">{t("footer.navigation")}</p>
            <a href="#modelos">{t("nav.items.0")}</a>
            <a href="#como-funciona">{t("nav.items.1")}</a>
            <a href={demo}>{t("hero.secondary")}</a>
            <Link href={`/${locale}/entrar/`}>{t("nav.login")}</Link>
            <Link href={`/${locale}/criar-conta/`}>{t("nav.signup")}</Link>
          </div>
          <div>
            <p className="footer-label">{t("footer.contact")}</p>
            {founders.map((founder) => (
              <a
                key={founder.name}
                href={`https://www.instagram.com/${founder.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {founder.name}
                <Icon name="diagonal" />
              </a>
            ))}
          </div>
          <div>
            <p className="footer-label">{t("footer.locale")}</p>
            <FooterLanguages locale={locale} />
          </div>
        </div>
        <div className="container footer-bottom">
          <p>{t("footer.note")}</p>
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer.credits")}
          </a>
        </div>
      </footer>
    </>
  );
}

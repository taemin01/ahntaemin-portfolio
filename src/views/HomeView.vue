<template>
  <main class="home-view">
    <!-- HERO -->
    <section class="hero" id="home">
      <div class="container hero-inner">
        <div class="hero-text full">
          <h2>
            안녕하세요<br />
            끈기 있게 배우며 성장하는<br />
            백엔드 개발자 안태민입니다.
          </h2>
          <p class="lead">
            저에 대한 정보와 프로젝트의 자세한 내용은 이력서를 확인해주세요.
          </p>

          <div class="resume-actions">
            <a
              class="btn"
              style="margin-right: 10px;"
              href="/ahntaemin-portfolio/ahntaemin_portfolio.pdf"
              target="_blank"
            >
              이력서 보기
            </a>
            <a
              class="btn"
              href="/ahntaemin-portfolio/ahntaemin_cover_letter.pdf"
              target="_blank"
            >
              자기소개서 보기
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT ME -->
    <!-- 여기서부터는 section은 전체폭, 안쪽에 container 한 번 감쌈 -->
    <section class="resume" id="aboutme">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-me">
          <div class="about-me-inner">
            <p class="about-bio">
              저는 신입 백엔드 개발자로서
              주로 Java와 Spring Boot로 서버와 API를 설계·구현합니다. <br />
              다양한 백엔드 언어(Golang, Python) 및 프레임워크에 관심이 있으며, <br />
              현재 간단한 홈 서버(MiniPC) 구축을 통해 서버 보안 <br />
              DB 보안 지식을 학습하여 개인 및 팀 프로젝트에 적용하고 있습니다.
            </p>

            <ul class="contact-icons">
              <li>
                <a
                  class="icon-link github"
                  href="https://github.com/taemin01"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1-.02-1.96-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.096.823 2.21 0 1.596-.015 2.884-.015 3.277 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z"
                    />
                  </svg>
                  <span class="icon-label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  class="icon-link linkedin"
                  href="https://www.linkedin.com/in/%ED%83%9C%EB%AF%BC-%EC%95%88-244782384/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02C6.08 7.46 6.96 6.58 6.96 5.48 6.96 4.38 6.08 3.5 4.98 3.5zM3.5 8.98h3v11h-3v-11zM10.5 8.98h2.86v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47h-3v-5.74c0-1.37-.03-3.13-1.9-3.13-1.9 0-2.19 1.48-2.19 3.01v5.86h-3v-11z"
                    />
                  </svg>
                  <span class="icon-label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  class="icon-link velog"
                  href="https://velog.io/@taemin01/posts"
                  target="_blank"
                  rel="noopener"
                  aria-label="Velog"
                  title="Velog"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 7h10M7 11h10M7 15h6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                  </svg>
                  <span class="icon-label">Velog</span>
                </a>
              </li>
              <li>
                <a
                  class="icon-link instagram"
                  href="https://www.instagram.com/t._.m2_/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      ry="5"
                    />
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="icon-label">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="about" id="skills">
      <div class="container">
        <h2>Skills</h2>
        <h4>보유 스킬과 경험 내용을 작성하였습니다.</h4>

        <p class="core-tech">핵심기술: Java · Spring Boot · JPA · MySQL</p>

        <div class="skills-grid">
          <div class="skill-card full-width">
            <h3>Languages</h3>
            <p class="skill-list">Java · Python · HTML/CSS · JavaScript</p>
            <p class="skill-note">
              Java Spring Boot를 사용하여 웹을 기반으로 한 팀 프로젝트를 진행하였습니다.
            </p>
            <p class="skill-note">
              Python을 사용하여 데이터 분석 미니 프로젝트 및 RAG 기초 학습을 진행하였습니다.
            </p>
          </div>

          <div class="skill-card full-width">
            <h3>Frameworks</h3>
            <p class="skill-list">Spring Boot · Spring Data JPA · Vue.js</p>
            <p class="skill-note">
              Spring Boot로 REST API 설계·구현 및 JPA로 데이터 연동을 담당했습니다.
            </p>
            <p class="skill-note">
              Vue.js로 화면 개발 및 API 로직 설계·구현을 담당했습니다.
            </p>
          </div>

          <div class="skill-card full-width">
            <h4>Database</h4>
            <p class="skill-list">MySQL · Chroma DB</p>
            <p class="skill-note">
              관계형 DB 설계와 홈 서버 구축 데이터베이스 경험이 있으며, Chroma DB로 벡터 데이터
              저장·검색을 다뤄봤습니다.
            </p>
          </div>

          <div class="skill-card full-width">
            <h3>Version Control</h3>
            <p class="skill-list">Git · GitHub</p>
            <p class="skill-note">
              Git 브랜칭 전략과 PR 기반 협업을 통해 코드 리뷰·형상 관리를 수행했습니다.
            </p>
          </div>

          <div class="skill-card full-width">
            <h3>Tools & DevOps</h3>
            <p class="skill-list">
              Docker · AWS(EC2,Lambda,RDS) · GitHub Actions · Postman
            </p>
            <p class="skill-note">
              Docker로 데이터베이스 컨테이너화, 간단한 AWS Lambda, EC2 배포 및 GitHub Actions 기반
              CI 설정을 진행했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects" id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="cards">
          <article
            class="card"
            v-for="project in displayProjects"
            :key="project.id"
          >
            <h3 class="card-title">
              <span class="card-title-text">{{ project.title }}</span>
              <router-link
                class="card-link"
                :to="`/projects/${project.id}`"
              >
                자세히 보기
              </router-link>
            </h3>
            <p class="card-summary">{{ project.cardSummary }}</p>
            <p
              v-if="project.cardHighlight"
              class="card-highlight"
            >
              {{ project.cardHighlight }}
            </p>

            <div
              class="tags"
              v-if="getTags(project).length"
            >
              <span
                class="tag"
                v-for="(t, i) in getTags(project)"
                :key="i"
              >
                {{ t }}
              </span>
            </div>
          </article>
        </div>

        <div
          class="project-toggle"
          v-if="projects.length > visibleCount"
          @click="toggleExpand"
          role="button"
          tabindex="0"
          @keyup.enter="toggleExpand"
        >
          <span class="toggle-label">
            {{ expanded ? '프로젝트 접기' : '프로젝트 더보기' }}
          </span>
          <svg
            class="toggle-arrow"
            :class="{ open: expanded }"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      projects: [],
      expanded: false,
      visibleCount: 3
    }
  },
  computed: {
    displayProjects() {
      if (this.expanded) return this.projects
      return this.projects.slice(0, this.visibleCount)
    }
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    },
    getTags(project) {
      if (!project || !project.stacks) return []
      const stacks = project.stacks
      const tags = []
      for (const key in stacks) {
        const val = stacks[key]
        if (Array.isArray(val)) {
          val.forEach(v => {
            if (v && !tags.includes(v)) tags.push(v)
          })
        }
      }
      return tags
    }
  },
  mounted() {
    const base = process.env.BASE_URL || '/'

    fetch(`${base}projects.json`)
      .then(r => r.json())
      .then(data => {
        this.projects = data.projects || []
        if (this.projects.length <= this.visibleCount) this.expanded = true
      })
      .catch(err => {
        console.error('projects.json 로드 실패', err)
      })
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.home-view h2 {
  text-align: left;
  margin: 0 0 16px;
}

/* HERO */
.hero {
  position: relative;
  padding: 64px 0;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  background: var(--hero-bg);
  z-index: 0;
}

.hero-inner {
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  flex: 1;
  text-align: left;
}

.hero-text.full {
  max-width: 1000px;
}

.hero-text h1 {
  font-size: 34px;
  line-height: 1.1;
  margin: 0 0 8px;
  color: var(--text);
}

.lead {
  color: var(--muted);
  margin-bottom: 12px;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  background: var(--primary);
  color: white;
  border-radius: 6px;
  text-decoration: none;
}

.btn.outline {
  background: transparent;
  border: 1px solid var(--card-border);
  color: var(--muted);
  margin-left: 8px;
}

/* ABOUT / SKILLS / PROJECTS 섹션 */
.about,
.resume,
.projects {
  margin-top: 0;
  text-align: left;
  background: var(--page-bg);
  padding: 32px 0;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
}

.core-tech {
  font-weight: 600;
  color: var(--primary);
  margin: 8px 0 12px;
}

.skill-card {
  background: var(--ui-bg);
  border: 1px solid var(--card-border);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.02);
}

.skill-card h3,
.skill-card h4 {
  margin: 0 0 8px;
}

.skill-list {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  font-weight: 400;
}

.skill-note {
  margin: 6px 0 0;
  font-size: 15px;
  color: var(--muted);
}

.skill-card.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 720px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .skill-list,
  .skill-note {
    font-size: 14px;
  }
}

/* Projects */
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.card {
  background: var(--ui-bg);
  border: 1px solid var(--card-border);
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.02);
  box-sizing: border-box;
  position: relative;
}

.card h3 {
  color: var(--text);
  margin: 0 0 8px;
}

.card .link {
  color: var(--primary);
  text-decoration: none;
}

.card-summary {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 15px;
  font-weight: 400;
}

.card-highlight {
  margin: 4px 0 10px;
  color: var(--primary);
  font-weight: 700;
  font-size: 15px;
}

.tags {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: var(--ui-bg);
  border: 1px solid var(--card-border);
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 13px;
  color: var(--muted);
}

.project-toggle {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  color: var(--primary);
  user-select: none;
}

.toggle-arrow {
  transition: transform 180ms ease;
}

.toggle-arrow.open {
  transform: rotate(180deg);
}

.card-title {
  margin: 0 0 8px;
  padding-right: 88px;
}

.card-title-text {
  font-weight: 600;
  display: block;
}

.card-link {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 13px;
  color: var(--primary);
  text-decoration: none;
}

.card-link:hover,
.card-link:focus {
  text-decoration: underline;
}

/* About Me styles */
.about-me {
  padding: 12px 0 0;
}

.about-me-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.about-bio {
  margin: 0 0 12px;
  color: var(--text);
  max-width: 720px;
  line-height: 1.6;
  color: black;
}

.contact-icons {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.contact-icons li {
  display: block;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--primary);
  text-decoration: none;
  font-size: 16px;
}

.icon-link svg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.icon-label {
  display: inline-block;
}

.icon-link:hover,
.icon-link:focus {
  color: var(--primary);
}

/* Velog icon larger to avoid clipping */
.velog-icon {
  width: 36px;
  height: 36px;
  display: block;
}

@media (max-width: 720px) {
  .contact-icons {
    gap: 10px;
  }
  .icon-link svg {
    width: 24px;
    height: 24px;
  }
  .icon-link {
    font-size: 15px;
  }
  .velog-icon {
    width: 30px;
    height: 30px;
  }
  .card-summary,
  .card-highlight {
    font-size: 14px;
  }
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .card-title {
    padding-right: 0;
  }
  .card-link {
    position: static;
    display: inline-block;
    margin-left: 8px;
  }
}

.quick-tags {
  color: var(--primary);
  font-weight: 600;
  margin-top: 8px;
}

/* ensure sections don't get hidden under fixed header when navigating */
section {
  scroll-margin-top: var(--hf-height);
}

@media (max-width: 720px) {
  .about-me-inner {
    flex-direction: column;
  }
}
</style>

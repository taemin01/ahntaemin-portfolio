<template>
  <main class="home-view">
    <section class="hero" id="home">
      <div class="hero-inner container">
        <div class="hero-text full">
          <h2>안녕하세요<br />꾸준히 배우고 성장하는<br />끈기의 백엔드 개발자 안태민입니다.<br/>
            주로 Java를 사용하며, Backend, Server에 관심이 있습니다.</h2>
          <p class="lead">프로젝트의 자세한 내용은 이력서를 확인해주세요.</p>
        </div>
        
      </div>
    </section>

    <section class="about container" id="about">
      <h2>Skills</h2>
      <h4>보유 스킬과 경험 내용을 작성하였습니다.</h4>

      <!-- 핵심 기술 한 줄 요약 -->
      <p class="core-tech">핵심기술: Java · Spring Boot · JPA · MySQL</p>

      <div class="skills-grid">
        <div class="skill-card full-width">
          <h4>Languages</h4>
          <p class="skill-list">Java · Python · HTML/CSS · JavaScript</p>
          <p class="skill-note">Java Spring Boot를 사용하여 웹을 기반으로 한 팀 프로젝트를 진행하였습니다.</p>
          <p class="skill-note">Python을 사용하여 데이터 분석 미니 프로젝트 및 RAG 기초 학습을 진행하였습니다.</p>
        </div>

        <div class="skill-card full-width">
          <h4>Frameworks</h4>
          <p class="skill-list">Spring Boot · Spring Data JPA · Vue.js</p>
          <p class="skill-note">Spring Boot로 REST API 설계·구현 및 JPA로 데이터 연동을 담당했습니다.</p>
          <p class="skill-note">Vue.js로 화면 개발 및 API 로직 설계·구현을 담당했습니다.</p>
        </div>

        <div class="skill-card full-width">
          <h4>Database</h4>
          <p class="skill-list">MySQL · Chroma DB</p>
          <p class="skill-note">관계형 DB 설계와 홈 서버 구축 데이터베이스 경험이 있으며, Chroma DB로 벡터 데이터 저장·검색을 다뤄봤습니다.</p>
        </div>

        <div class="skill-card full-width">
          <h4>Version Control</h4>
          <p class="skill-list">Git · GitHub</p>
          <p class="skill-note">Git 브랜칭 전략과 PR 기반 협업을 통해 코드 리뷰·형상 관리를 수행했습니다.</p>
        </div>

        <div class="skill-card full-width">
          <h4>Tools & DevOps</h4>
          <p class="skill-list">Docker · AWS(EC2,Lambda,RDS) · GitHub Actions · Postman</p>
          <p class="skill-note">Docker로 데이터베이스 컨테이너화, 간단한 AWS Lambda, EC2 배포 및 GitHub Actions 기반 CI 설정을 진행했습니다.</p>
        </div>
      </div>
      
    </section>

    <section class="projects container" id="projects">
      <h2>Projects</h2>
      <div class="cards">
        <article class="card">
          <h3>AI 입찰 수집 서비스 (2024)</h3>
          <p>Spring Boot · 24일의 프로젝트 요약</p>
          <!-- <a class="link" href="../views/ProjectDetailView.vue">자세히 보기</a> -->
           <router-link class="link" :to="{ path: '../views/ProjectDetailView'}" replace>자세히 보기</router-link>
        </article>
        <article class="card">
          <h3>DB 자동화(2023)</h3>
          <p>Spring Boot · 툴링</p>
          <a class="link" href="#">자세히 보기</a>
        </article>
        <article class="card">
          <h3>쇼핑몰 운영 지원 (2022)</h3>
          <p>PostgSQL · AWS</p>
          <a class="link" href="#">자세히 보기</a>
        </article>
      </div>
    </section>

    <section class="resume container" id="resume">
      <h2>Resume</h2>

      <div class="resume-actions">
            <a class="btn" style="margin-right: 10px;" href="/ahntaemin_portfoilo.pdf" target="_blank" >이력서 보기</a>
            <a class="btn" href="/antaemin_resume.pdf" target="_blank" >자기소개서 보기</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 24px; }
.home-view h2 { text-align: left; }
.hero { position: relative; padding: 64px 0px; }
.hero::before {
  /* full-bleed background behind the centered container */
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--hero-bg);
  z-index: 0;
}
.hero-inner { display:flex; gap:24px; align-items:center; position: relative; z-index: 1 }
.hero-text { flex:1; text-align:left; }
.hero-text.full { max-width: 1000px; }
.hero-text h1 { font-size: 34px; line-height:1.1; margin:0 0 8px; color:var(--text) }
.lead { color:var(--muted); margin-bottom:12px; }
.btn { display:inline-block; padding:10px 16px; background:var(--primary); color:white; border-radius:6px; text-decoration:none; }
.btn.outline { background:transparent; border:1px solid var(--card-border); color:var(--muted); margin-left:8px; }
/* hero illustration removed */
.about { margin-top:0; text-align:left; background:var(--page-bg); padding:32px 0 }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
}
.core-tech { font-weight:600; color:var(--primary); margin:8px 0 12px }
.skill-card { background:var(--ui-bg); border:1px solid var(--card-border); padding:12px; border-radius:8px; box-shadow: 0 1px 0 rgba(15,23,42,0.02); }
.skill-card h4 { margin:0 0 8px }
.skill-list { margin:0; color:var(--muted); font-size:14px; font-weight: normal; }
.skill-note { margin:6px 0 0; font-size:13px; color:var(--muted) }
.skill-card.full-width { grid-column: 1 / -1 }

@media (max-width: 720px) {
  .skills-grid { grid-template-columns: 1fr }
}
.projects { margin-top:0; background:var(--page-bg); padding:32px 0 }
.cards { display:flex; gap:16px; margin-top:8px; flex-wrap:wrap; align-items:stretch }
.card { background:var(--ui-bg); border:1px solid var(--card-border); padding:12px; border-radius:8px; flex:1 1 280px; text-align:left; box-shadow: 0 1px 0 rgba(15,23,42,0.02); box-sizing:border-box }
.card h3 { color:var(--text); margin:0 0 8px }
.card .link { color:var(--primary); text-decoration: none }
.resume { margin-top:0; text-align:left; background:var(--page-bg); padding:32px 0 }
.resume-actions { margin-top:8px }
/* ensure sections don't get hidden under fixed header when navigating */
section { scroll-margin-top: var(--hf-height); }
</style>

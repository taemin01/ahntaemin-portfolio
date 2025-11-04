<template>
  <main class="home-view">
    <section class="hero" id="home">
      <div class="hero-inner container">
        <div class="hero-text full">
          <h1>안녕하세요<br />꾸준히 배우고 성장하는<br />끈기의 백엔드 개발자 안태민입니다.</h1>
          <p class="lead">이력서 및 자기소개서를 통해 자세한 내용을 확인하세요.</p>
          <!-- <div class="cta"> -->
            <!-- <a class="btn" style="margin-right: 10px;" href="/antaemin_resume.pdf" target="_blank" >이력서 보기</a>
            <a class="btn" href="/antaemin_resume.pdf" target="_blank" >포트폴리오 보기</a> -->
          <!-- </div> -->
        </div>
        
      </div>
    </section>

    <section class="about container" id="about">
      <h2>About</h2>
      <p>간단한 자기소개와 역할, 관심 분야를 적습니다. (이력은 About에 포함)</p>
      <div class="skills">
        <div class="skill">
          <div class="skill-name">Spring Boot</div>
          <div class="skill-bar"><span style="width:85%"></span></div>
        </div>
        <div class="skill">
          <div class="skill-name">Database</div>
          <div class="skill-bar"><span style="width:70%"></span></div>
        </div>
        <div class="skill">
          <div class="skill-name">DevOps</div>
          <div class="skill-bar"><span style="width:50%"></span></div>
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
      <!-- <p>이력서(자기소개서)는 다운로드 또는 PDF 뷰어로 표시할 수 있습니다.</p> -->
      <div class="resume-actions">
            <a class="btn" style="margin-right: 10px;" href="/antaemin_resume.pdf" target="_blank" >이력서 보기</a>
            <a class="btn" href="/antaemin_resume.pdf" target="_blank" >포트폴리오 보기</a>
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
.hero { position: relative; padding: 90px 0; }
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
.hero-text h1 { font-size: 34px; line-height:1.1; margin:0 0 12px; color:var(--text) }
.lead { color:var(--muted); margin-bottom:16px; }
.btn { display:inline-block; padding:10px 16px; background:var(--primary); color:white; border-radius:6px; text-decoration:none; }
.btn.outline { background:transparent; border:1px solid var(--card-border); color:var(--muted); margin-left:8px; }
/* hero illustration removed */
.about { margin-top:40px; text-align:left; background:var(--page-bg); padding:40px 0 }
.skills { display:flex; gap:16px; margin-top:12px }
.skill { flex:1 }
.skill-name { font-weight:600; margin-bottom:6px }
.skill-bar { background:#f1f6f5; height:10px; border-radius:6px; overflow:hidden }
.skill-bar span { display:block; height:100%; background:var(--accent) }
.projects { margin-top:40px; background:var(--page-bg); padding:40px 0 }
.cards { display:flex; gap:16px; margin-top:12px }
.card { background:var(--ui-bg); border:1px solid var(--card-border); padding:16px; border-radius:8px; flex:1; text-align:left; box-shadow: 0 1px 0 rgba(15,23,42,0.02) }
.card h3 { color:var(--text); margin:0 0 8px }
.card .link { color:var(--primary); text-decoration: none }
.resume { margin-top:40px; text-align:left; background:var(--page-bg); padding:40px 0 }
.resume-actions { margin-top:12px }
/* ensure sections don't get hidden under fixed header when navigating */
section { scroll-margin-top: var(--hf-height); }
</style>

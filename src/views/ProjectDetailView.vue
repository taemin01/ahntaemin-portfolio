<template>
  <main class="project-detail container">
    <div v-if="loading" class="loading">로딩 중...</div>
    <div v-else>
      <div v-if="!project" class="not-found">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <router-link to="/">홈으로 돌아가기</router-link>
      </div>

      <div v-else class="detail-layout">
        <article class="detail-card">
          <div class="detail-inner">
            <div class="detail-header">
              <h1 class="detail-title">{{ project.title }}</h1>
        </div>

        <p class="detail-summary">{{ project.cardSummary }}</p>
        <p v-if="project.cardHighlight" class="detail-highlight">{{ project.cardHighlight }}</p>

        <section v-if="project.detail" class="detail-sections">
          <div v-if="project.detail.goal" class="block">
            <h2>Goal</h2>
            <p>{{ project.detail.goal }}</p>
          </div>

          <div v-if="project.detail.overview" class="block">
            <h2>Overview</h2>
            <ul>
              <li v-for="(o, i) in project.detail.overview" :key="i">{{ o }}</li>
            </ul>
          </div>

          <div v-if="project.detail.responsibilities" class="block">
            <h2>Responsibilities</h2>
            <ul>
              <li v-for="(r, i) in project.detail.responsibilities" :key="i">{{ r }}</li>
            </ul>
          </div>

          <div v-if="project.detail.problemsAndSolutions" class="block">
            <h2>Problems & Solutions</h2>
            <div class="problems">
              <div v-for="(p, i) in project.detail.problemsAndSolutions" :key="i" class="problem">
                <p class="problem-title">문제: {{ p.problem }}</p>
                <p class="problem-solution">해결: {{ p.solution }}</p>
              </div>
            </div>
          </div>

          <div v-if="project.detail.learnings" class="block">
            <h2>Learnings</h2>
            <ul>
              <li v-for="(l, i) in project.detail.learnings" :key="i">{{ l }}</li>
            </ul>
          </div>
        </section>

        

        <div class="back">
          <router-link to="/" class="btn">홈으로</router-link>
        </div>
          </div>
        </article>

        <aside class="detail-sidebar" aria-label="Project sidebar">
          <div class="sticky">
            <div class="view-block">
              <h4>View project</h4>
              <div class="view-project">
                <a v-if="project.links && project.links.github" :href="project.links.github" target="_blank" rel="noopener" class="btn primary">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M10 17l5-5-5-5v10z"/></svg>
                  View on GitHub
                </a>
                <a v-else-if="project.links && project.links.demo" :href="project.links.demo" target="_blank" rel="noopener" class="btn primary">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M10 17l5-5-5-5v10z"/></svg>
                  View demo
                </a>
              </div>
            </div>

            <div class="sidebar-block tech-block">
              <h4>Tech stack</h4>
              <div class="stack-items">
                <span v-for="(t,i) in flattenStacks(project)" :key="i" class="stack">{{ t }}</span>
              </div>
            </div>

            <div class="sidebar-block info-block">
              <h4>Info</h4>
              <div class="info-table">
                <div class="info-row"><div class="info-key">기간</div><div class="info-value">{{ project.period ? project.period.text : 'N/A' }}</div></div>
                <div class="info-row"><div class="info-key">유형</div><div class="info-value">{{ project.type || 'N/A' }}</div></div>
                <div class="info-row"><div class="info-key">인원</div><div class="info-value">{{ (project.team && project.team.teamSize) ? project.team.teamSize : (project.team && project.team.isTeam === false ? 1 : '-') }}</div></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectDetailView',
  data() {
    return {
      project: null,
      loading: true
    }
  },
  methods: {
    loadProject() {
      const id = this.$route.params.id
      const base = process.env.BASE_URL || '/'
      fetch(`${base}projects.json`)
        .then(res => res.json())
        .then(data => {
          const list = data.projects || []
          this.project = list.find(p => p.id === id) || null
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error('projects.json load error', err)
          this.project = null
        })
        .finally(() => { this.loading = false })
    },

    // helper to flatten stacks into a single array (unique)
    flattenStacks(project) {
      if (!project || !project.stacks) return []
      const tags = []
      for (const key in project.stacks) {
        const val = project.stacks[key]
        if (Array.isArray(val)) {
          val.forEach(v => { if (v && !tags.includes(v)) tags.push(v) })
        }
      }
      return tags
    }
  },
  watch: {
    '$route.params.id': 'loadProject'
  },
  mounted() {
    this.loadProject()
  }
}
</script>

<style scoped>
.project-detail { padding: 24px; padding-top: calc(var(--hf-height, 64px) + 24px); }
.detail-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap:40px; align-items:start }
.detail-card { min-width: 0 }
.detail-inner { max-width: 760px; margin: 0 auto }
.detail-sidebar .sticky { position: sticky; top: calc(var(--hf-height, 64px) + 16px); max-height: calc(100vh - (var(--hf-height, 64px) + 48px)); overflow: auto; display:flex; flex-direction:column; gap:18px; align-items:flex-start }
.view-project { margin-bottom: 6px; display:flex; justify-content:flex-start }
.detail-card { background:var(--ui-bg); border:1px solid var(--card-border); padding:20px; border-radius:10px; box-shadow: 0 6px 18px rgba(15,23,42,0.04); }
.detail-header { display:flex; flex-direction:column; gap:6px; margin-bottom:8px; align-items:flex-start; text-align:left }
.detail-title { margin:0; font-size:22px; line-height:1.15; text-align:left }
.meta { color:var(--muted); font-size:13px; text-align:left }
.detail-summary { margin:8px 0; color:var(--muted); font-size:15px; text-align:left }
.detail-highlight { color:var(--primary); font-weight:700; margin-bottom:8px; font-size:16px; text-align:left }
.stacks { margin:12px 0; text-align:left }
.stack-group { margin-bottom:8px }
.stack-key { display:block; font-weight:600; text-transform:capitalize; margin-bottom:6px; text-align:left }
.stack-items { display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-start }
.stack { display:inline-block; padding:6px 10px; border-radius:999px; background:#f1f5f9; border:1px solid #e6eefc; font-size:13px; color:var(--text); }
.detail-sections .block { margin-top:18px }
.detail-sections h2 { margin:0 0 8px; font-size:20px; text-align:left }
.detail-sections li { font-size: 16px; color: #0f172a !important; }

.detail-inner { max-width: 760px; margin: 0 auto; text-align: left }
.detail-sections ul { padding-left:18px }
.detail-sidebar .tech-block h4 { text-align:left; margin-bottom:8px }
.detail-sidebar .tech-block .stack-items { justify-content:flex-start }
/* Info shown as table rows so the divider lines are continuous */
.info-table { display: table; width: 100%; background:var(--page-bg); border-radius:8px; border:1px solid var(--card-border); border-collapse: collapse; box-sizing: border-box; }
.info-row { display: table-row; border-bottom: 1px solid var(--card-border) }
.info-row:last-child { border-bottom: none }
.info-key, .info-value { display: table-cell; padding: 10px 12px; vertical-align: middle }
.info-key { width: 96px; font-weight:700; color:var(--text, #0f172a); font-size:15px }
.info-value { color:var(--muted); font-size:15px }
@media (max-width:720px) {
  .info-table { display:block }
  .info-row { display:block; border-bottom:1px solid var(--card-border); }
  .info-row:last-child { border-bottom:none }
  .info-key, .info-value { display:block; padding:8px 6px }
  .info-key { margin-bottom:4px }
}
.detail-sidebar { text-align:left }
.detail-sidebar .sticky { align-items:flex-start }
.detail-sidebar .view-project { width:100% }
.detail-sidebar .view-project .btn { margin:0; align-self:flex-start }
.detail-sidebar .sidebar-block { width:100% }
.detail-sidebar h4 { text-align:left }
.detail-sidebar .stack-items { justify-content:flex-start }
/* ensure info table never causes horizontal overflow */
.info-table { box-sizing: border-box; max-width: 100%; overflow: visible }
.info-value { word-break: break-word; }
/* enforce left alignment for sidebar and info table */
.detail-sidebar { text-align: left }
.info-table { justify-items: start; width: 100% }
.info-key, .info-value { text-align: left }
.view-block { width:100% }
.view-block h4 { margin:0 0 8px; font-size:16px }
.view-project .btn.primary { background: #2b8cf6; color: #fff; border: none; padding:8px 12px; border-radius:8px; display:inline-flex; align-items:center; gap:8px; text-decoration:none }
.view-project .btn.primary svg { width:14px; height:14px }
.view-project .btn.primary:focus { outline: 2px solid rgba(43,140,246,0.24); outline-offset:2px }
/* keep link buttons visually stable (no underline, no color shift after click) */
.back .btn,
.back .btn:link,
.back .btn:visited,
.back .btn:active,
.back .btn:focus {
  text-decoration: none;
  color: var(--text, #0f172a);
}

/* style .back .btn as a visible button */
.back .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: transparent;
  cursor: pointer;
}
.back .btn:hover { background: rgba(0,0,0,0.02) }
.back .btn:focus { outline: 2px solid rgba(0,0,0,0.06); outline-offset:2px }

/* ensure primary view button also doesn't change after click */
.view-project .btn.primary:link,
.view-project .btn.primary:visited,
.view-project .btn.primary:active,
.view-project .btn.primary:focus {
  background: #2b8cf6;
  color: #fff;
  text-decoration: none;
}
.problems .problem { background: var(--hero-bg); border:1px solid var(--card-border); padding:14px; border-radius:10px; margin-bottom:12px; color:var(--text) }
.problem-title {  margin:0 0 6px; color: #0f172a; }
.problem-solution { margin:0; color: #0f172a; }
.links { margin-top:12px; display:flex; gap:12px }
.link { color:var(--primary); text-decoration:none; border:1px solid transparent; padding:6px 10px; border-radius:6px }
.back { margin-top:16px; display:flex; gap:8px }
.loading, .not-found { padding:24px; text-align:center }
@media (max-width:720px) {
  .detail-title { font-size:18px }
  .detail-card { padding:16px }
  .detail-layout { grid-template-columns: 1fr; }
  .detail-sidebar .sticky { position: static; top: auto }
}
</style>

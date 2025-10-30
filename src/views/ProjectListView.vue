<template>
	<main class="project-list container">
		<h1>Projects</h1>
		<p>프로젝트 목록(임시)
		</p>
		<ul class="projects">
			<li v-for="proj in projects" :key="proj.id" class="project-item">
				<h3>{{ proj.title }}</h3>
				<p>{{ proj.summary }}</p>
				<router-link :to="`/projects/${proj.id}`">자세히 보기</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	name: 'ProjectListView',
	data() {
		return {
			projects: [
				{ id: 1, title: 'AI 입찰 수집 서비스', summary: 'Spring Boot 기반 수집 서비스' },
				{ id: 2, title: 'DB 자동화 툴', summary: '데이터베이스 자동화 및 백업' },
				{ id: 3, title: '쇼핑몰 운영 지원', summary: '운영 자동화 및 모니터링' }
			]
		}
	}
}
</script>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 24px; }
.projects { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.project-item { border: 1px solid var(--card-border); padding: 12px; border-radius: 8px; background: var(--ui-bg) }
.project-item h3 { color:var(--text); margin:0 0 8px }
.project-item a { color:var(--primary); text-decoration:none }
</style>


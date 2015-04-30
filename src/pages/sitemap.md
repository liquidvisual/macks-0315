---
layout: internal
title: Sitemap
permalink: /sitemap/
---

<!--- This child document initializes the page in Jekyll. -->

<div class="row">
	<div class="columns">
		<h2>All Available Pages for Macks Advisory</h2>
		<section class="section has-padding">
			<ul class="triangle-list">
				{% for item in site.pages %}
					<li><a href="{{ item.url }}">{{ item.layout }}</a></li>
				{% endfor %}
			</ul>
		</section>
	</div>
</div>

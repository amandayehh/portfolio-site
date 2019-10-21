
var Promise = window.Promise

function _LrSDK() {
	this.entryPoints = {
  "importer" : {
    "path" : "https://static.lightroom.adobe.com/sdk/lr-importer-c7aea4fdf2b778fea407.js",
    "provides" : [
      "catalog"
    ]
  },
  "catalog" : {
    "path" : "https://static.lightroom.adobe.com/sdk/lr-catalog-52413c9d1a559d8b66d5.js"
  },
  "storycore" : {
    "path" : "https://static.lightroom.adobe.com/sdk/lr-storycore-a553307a90a1853f2954.js"
  }
}
	this.assetURL = 'https://static.lightroom.adobe.com/'
	this.imsURL = 'https://ims-na1.adobelogin.com'
	this.scriptIsLoaded = {}
	this.requirePromises = {}
	
	if (!window.Feature) {
		window.Feature = {
			is_enabled: function(feature) {
				return window.Feature.feature_hash[feature] == true
			}
		}
		window.Feature.feature_hash = {
  "{\"actions_v2\"=>\"More powerful and easier to write actions.\"}" : false,
  "{\"delay_load_develop\"=>\"Wait til after page loads up to preload the develop module\"}" : false,
  "sidebar_refactor" : false,
  "gallery_tip_refactor" : false,
  "{\"cooper_404\"=>\"special 404 page for /learn and /tutorial\"}" : false,
  "share_sidebar" : false,
  "{\"remove_all_albums\"=>\"Removes the all albums view, but keeps it for automation for now.\"}" : false,
  "kelpie_album_tutorial" : false,
  "cloud_trash" : false,
  "optimistic_restore_in_progress" : false,
  "{\"branch_sdk\"=>\"integrate branch sdk\"}" : false,
  "better_album_updates" : false,
  "{\"gallery_share_sidebar\"=>\"Adds sidebar to Gallery Share\"}" : false,
  "ab_growth_carousel" : false,
  "{\"develop_slider_nudge\"=>\"Mouse over sliders and use arrows to nudge\"}" : false,
  "projects_addassets" : false,
  "{\"better_menu_scroll\"=>\"Make ActiveMenuV2 and invite list scrollbars look better for Chrome and Safari.\"}" : false,
  "{\"owner_link\"=>\"Link to owner view from /shares.\"}" : false,
  "{\"hazy\"=>\"Share Filters: Disable share filtering\"}" : false,
  "sdk_publish_refactor" : false,
  "paint_flags" : false,
  "{\"delete_debug_shortcut\"=>\"Allows for deleting of share Space and Web Link, using Shift+Alt, while holding down Stop Sharing button\"}" : false,
  "{\"project_edit\"=>\"Allow reordering of project content\"}" : false,
  "{\"new_info_panel\"=>\"Updated version of asset info panel\"}" : false,
  "{\"welcome_coachtip\"=>\"Coachtip Welcome to Lightroom (if shown) when exiting loupe for the first time\"}" : false,
  "{\"branch_identity_tracking\"=>\"Track Branch identity for logged in users\"}" : false,
  "{\"asset_store\"=>\"shared asset data between models\"}" : false,
  "{\"allow_duplicate_album_names\"=>\"Waiting on ecosystem. See PECO-389\"}" : false,
  "torq_spectrum_lrweb" : false,
  "{\"set_capture_date\"=>\"Set the capture date for selected assets\"}" : false,
  "{\"uplevel_best_photos\"=>\"Put Best Photos icon in the Album Header instead of the tridot\"}" : false,
  "upload_crs_version" : false,
  "upload_async_metadata" : false,
  "connections_details" : false,
  "stock_dev_connector" : false,
  "whcc_dev_connector" : false,
  "{\"remove_all_albums_fully\"=>\"Removes all albums fully, we'll enable this once automation is working.\"}" : false,
  "kelpie_feedback_owner" : false,
  "people" : false,
  "{\"proofing_design_update\"=>\"Design refactor for proofing, including square client grid, owner view changes, and more\"}" : false,
  "{\"compact_peeky_bar\"=>\"Move the peeky bar to the top of the window on compact screens\"}" : false,
  "{\"delete_library_permanently\"=>\"Change the delete library confirmation string to be scarier\"}" : false,
  "{\"new_catalog_header\"=>\"Update the catalog header to a pure torq view.\"}" : false,
  "{\"iac_share_sidebar\"=>\"Updates to owner share sidebar for in-app contribute.\"}" : false,
  "{\"in_app_contribute\"=>\"Main feature for owner view Shared With You work.\"}" : false,
  "{\"iac_owner_embed\"=>\"Will be needed for avatar stack work to show the owner's avatar. Be sure this is working on prod before turning on\"}" : false,
  "{\"avatar_refactor\"=>\"Consolidate avatar code and improve functionality as a prerequisite to avatar stacks.\"}" : false,
  "{\"home_view\"=>\"Change Dashboard to Home, and show Cooper content\"}" : false,
  "{\"home_view_pending_invites\"=>\"Show a clickable icon on recent albums with pending invite requests\"}" : false,
  "{\"home_view_tutorials\"=>\"Show Tutorials (WIP) in the owner Home view\"}" : false,
  "cooper_unauth" : false,
  "{\"spectrum_web_components\"=>\"Install the Spectrum Web Components into the browser at launch\"}" : false,
  "{\"spectrum_button\"=>\"Wires in Spectrum Buttons\"}" : false,
  "{\"spectrum_checkbox\"=>\"Wires in Spectrum Checkboxes\"}" : false,
  "{\"spectrum_switch\"=>\"Wires in Spectrum Switches\"}" : false,
  "{\"spectrum_test_harness\"=>\"Wires in Spectrum for test harness page\"}" : false,
  "{\"service_worker\"=>\"Enable the service worker for LrWeb\"}" : false,
  "{\"service_worker_sync\"=>\"Follow the sync feed and send out messages about updates\"}" : false,
  "{\"service_worker_sync_db\"=>\"Read the sync feed and write it into an IndexedDB\"}" : false,
  "{\"graphql\"=>\"Enable GraphQL\"}" : false,
  "{\"graphql_server\"=>\"Enable GraphQL resolving from a GraphQL server\"}" : false,
  "{\"graphql_sync_feed\"=>\"Enable updating GraphQL queries from the sync feed\"}" : false,
  "{\"graphql_db\"=>\"Enable resolving GraphQL queries in browser from an IndexedDB\"}" : false,
  "{\"graphql_oz_model\"=>\"Enable resolving GraphQL queries in browser using the Pony OZ model\"}" : false,
  "torq_sidebar_list_thumbnails_view" : false,
  "selection_download" : false,
  "{\"sdk_ingest\"=>\"Use Ingest analytics service for the SDK\"}" : false,
  "{\"pony_ingest_search\"=>\"Use Ingest analytics service for search\"}" : false,
  "{\"best_photos_quality_update\"=>\"Use Best-Frame data for Best Photos\"}" : false,
  "best_photos_default_similarity" : false,
  "loupe_poll_basic_renditions" : false,
  "best_photos_for_compact_screens" : false,
  "ab_dummy_a" : false,
  "ab_dummy_b" : false,
  "develop_testing" : false,
  "develop_unstable" : false,
  "proofing_design_update" : false,
  "{\"better_rendition_selection\"=>\"Review this for deletion\"}" : false,
  "pixel_density_multiplier" : false,
  "filename_overlay_button" : false,
  "expired_catalog_info" : false,
  "auto_segment_journal" : false,
  "{\"connections_proto\"=>\"Prototype connections path initially for Spark growth experiment\"}" : false,
  "{\"relassets\"=>\"Show related assets in loupe\"}" : false,
  "{\"search_ml_feedback\"=>\"Allow Machine Learning Feedback submission on search results\"}" : false,
  "debug_asset_cache" : false,
  "debug_empty_filenames" : false,
  "{\"cooper_prod_assets\"=>\"Show cooper prod assets instead of the default\"}" : false,
  "{\"cooper_unauth_debug\"=>\"Show information about discover content\"}" : false,
  "debug_create_library_error" : false,
  "debug_sdk_importer" : false,
  "debug_short_waits" : false,
  "disable_site_catalyst" : false,
  "global_nav_prod" : false,
  "best_aesthetics_score_only" : false,
  "{\"best_photos_no_similarity_data\"=>\"Simulates the ’account still indexing’ state for Best Photos\"}" : false,
  "{\"best_photos_local\"=>\"Always use local processing for Best Photos\"}" : false,
  "{\"best_photos_load_forever\"=>\"Best photos will load until timeout\"}" : false,
  "debug_uss_stage_fac_endpoint" : false,
  "face_detection" : false,
  "search_sneak_disabled" : false,
  "allow_over_quota_restore" : false,
  "force_reset_grids" : false,
  "{\"debug_storycore\"=>\"Adds a Debug.storycore variable you can use to test storycore with raw data.\"}" : false,
  "debug_force_show_error_assets" : false,
  "develop_force_enable" : false,
  "develop_disable_pnacl" : false,
  "develop_disable_wasm" : false,
  "develop_rendering_indicator" : false,
  "develop_simulate_slow_load" : false,
  "develop_simulate_slow_styles" : false,
  "force_externalize_edit_settings" : false,
  "force_partial_externalize_edit_settings" : false,
  "loupe_absolute_times" : false,
  "{\"debug_sharing\"=>\"shows additional info for album shares in the sharing tab\"}" : false,
  "debug_journal_duplicate_assets" : false,
  "debug_storycore" : false,
  "debug_projects" : false,
  "debug_connections" : false,
  "debug_connections_service_down" : false,
  "automation" : false,
  "automation_performance" : false,
  "debug_random_failures" : false,
  "debug_staged_ab_tests" : false,
  "debug_simulate_slow_search" : false,
  "{\"debug_spectrum_light\"=>\"Use the spectrum light theme. Useful to spot unthemed UI, but expect some jarring UI in places.\"}" : false,
  "{\"debug_no_news\"=>\"Simulate the No News state\"}" : false,
  "{\"huey_debug\"=>\"Use the debug News database so you can test all news features without affecting prod\"}" : false,
  "override_oz_limit_500" : false,
  "debug_web_components" : false,
  "{\"debug_spectrum_force_legacy\"=>\"Force using the legacy polyfills\"}" : false,
  "debug_share_upload_redact" : false,
  "debug_random_uploads" : false,
  "debug_upload_anything" : false,
  "force_chunk_upload" : false,
  "no_renditions_on_chunked_upload" : false,
  "upload_skip_local_dupe_check" : false,
  "large_video_dupe_check" : false,
  "{\"generate_p3_renditions\"=>\"Alex Dixon to review with Alex Smith\"}" : false,
  "generate_srgb_renditions" : false,
  "generate_adobergb_renditions" : false,
  "debug_log_service_worker" : false,
  "debug_log_graphql" : false,
  "debug_log_sync" : false,
  "debug" : false,
  "{\"debug_asset_data\"=>\"Loupe asset payload, Grid overlays, and Touch selected assets\"}" : false,
  "ml_keyword_game" : false,
  "debug_best_photos" : false,
  "debug_coach_tips" : false,
  "debug_verbose" : false,
  "lots_of_likes" : false,
  "override_oz_limit_5" : false,
  "portfolio_unlimited_upload" : false,
  "upload_all_video_formats" : false,
  "{\"people_categories_debug\"=>\"Add LR->Face Data Collector\"}" : false,
  "actions_v2" : true,
  "delay_load_develop" : true,
  "sidebar_refactor" : true,
  "gallery_tip_refactor" : true,
  "cooper_404" : true,
  "share_sidebar" : true,
  "remove_all_albums" : true,
  "kelpie_album_tutorial" : true,
  "cloud_trash" : true,
  "optimistic_restore_in_progress" : true,
  "branch_sdk" : true,
  "better_album_updates" : true,
  "gallery_share_sidebar" : true,
  "ab_growth_carousel" : true,
  "develop_slider_nudge" : true,
  "projects_addassets" : true,
  "better_menu_scroll" : true,
  "owner_link" : true,
  "hazy" : true,
  "sdk_publish_refactor" : true,
  "paint_flags" : true,
  "delete_debug_shortcut" : true,
  "project_edit" : true,
  "new_info_panel" : true,
  "welcome_coachtip" : true,
  "branch_identity_tracking" : true
}
	}
	
	var scripts = document.querySelectorAll('script')
	var expr = /^(.*\/)sdk\/lr-sdk\.js.*$/
	for (var i = 0; i < scripts.length; i++) {
		var match = expr.exec(scripts[i].src)
		if (match) {
			this.baseURL = match[1]
		}
	}
	if (this.assetURL === '/') {
		this.assetURL = this.baseURL
	}
	this.environment = this.baseURL === 'https://lightroom.adobe.com/' ? 'prod' : 'stage'
}

_LrSDK.prototype.initializeP = function(config) {
	var promises = [], promise
	var componentIds = Array.prototype.slice.call(arguments, 1)
	var provided = new Set()
	
	if (config.features) {
		for (var feature in config.features) {
			if (config.features.hasOwnProperty(feature)) {
				window.Feature.feature_hash[feature] = config.features[feature]
			}
		}
	}
	
	for (var componentIdIndex in componentIds) {
		if (componentIds.hasOwnProperty(componentIdIndex)) {
			var component = this.entryPoints[componentIds[componentIdIndex]]
			if (component.provides) {
				for (var itemIndex in component.provides) {
					if (component.provides.hasOwnProperty(itemIndex)) {
						provided.add(component.provides[itemIndex])
					}
				}
			}
		}
	}

	// takes a list of component identifiers of required components
	for (var componentIdIndex in componentIds) {
		if (componentIds.hasOwnProperty(componentIdIndex)) {
			var componentId = componentIds[componentIdIndex]
			var that = this
			if (this.requirePromises[componentId] == null) {
				var componentScript = this.entryPoints[componentId].path
				if (componentScript == null) {
					throw new Error('Unknown LrSDK entry point "' + componentId + '"')
				}
				promise = new Promise(function (resolve, reject) {
					if (!provided.has(componentId)) {
						that.loadScript(componentScript, reject)
					}
					that.requirePromises[componentId] = {
						resolve: resolve,
						reject: reject
					}
				}).then(function(component) {
					if (config && component && component.initialize && typeof component.initialize === 'function') {
						component.initialize(config)
					}
					return component
				})
				that.requirePromises[componentId].promise = promise
				promises.push(promise)
			}
			else {
				promises.push(this.requirePromises[componentId].promise)
			}
		}
	}
	
	return Promise.all(promises)
}

_LrSDK.prototype.loadScript = function(script, reject) {
	if (this.scriptIsLoaded[script] == null) {
		this.scriptIsLoaded[script] = true
		var scriptNode = document.createElement('script')
		scriptNode.onerror = function loadError(error) {
			reject(new Error("SDK failed to load SDK component at " + script))
		}
		if (script[0] === '/') {
			script = this.getRelativeUrl(script)
		}
		scriptNode.src = script
		document.head.appendChild(scriptNode)
	}
}

_LrSDK.prototype.provide = function(componentId, module) {
	if (this.entryPoints[componentId] == null) {
		throw new Error("LrSDK: Unknown entry point: " + componentId)
	}
	var promiseData = this.requirePromises[componentId]
	if (promiseData != null) {
		promiseData.resolve(module)
	}
	this[componentId] = module
}

_LrSDK.prototype.getRelativeUrl = function(relative) {
	if (relative.length > 0 && relative[0] === '/') {
		relative = relative.slice(1)
	}
	var base = this.assetURL
	if (base.length > 0 && base.slice(-1) === '/') {
		base = base.slice(0, -1)
	}
	return base + "/" + relative
}

if (window.LrSDK == null) {
	window.LrSDK = new _LrSDK()
	window.LrSDK.nr = '"<script id=\"lr-organizer-nr-snippet\" type=\"text/javascript\">\nwindow.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if(\"function\"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var o,i=t(\"ee\"),a=t(19),c={};try{o=localStorage.getItem(\"__nr_flags\").split(\",\"),console&&\"function\"==typeof console.log&&(c.console=!0,o.indexOf(\"dev\")!==-1&&(c.dev=!0),o.indexOf(\"nr_dev\")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&i.on(\"internal-error\",function(t){r(t.stack)}),c.dev&&i.on(\"fn-err\",function(t,e,n){r(n.stack)}),c.dev&&(r(\"NR AGENT IN DEVELOPMENT MODE\"),r(\"flags: \"+a(c,function(t,e){return t}).join(\", \")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{h?h-=1:i(\"err\",[o||new UncaughtException(t,e,n)])}catch(c){try{i(\"ierr\",[c,(new Date).getTime(),!0])}catch(s){}}return\"function\"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||\"Uncaught error with no additional information\",this.sourceURL=e,this.line=n}function o(t){i(\"err\",[t,(new Date).getTime()])}var i=t(\"handle\"),a=t(20),c=t(\"ee\"),s=t(\"loader\"),f=window.onerror,u=!1,h=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(d){\"stack\"in d&&(t(12),t(11),\"addEventListener\"in window&&t(6),s.xhrWrappable&&t(13),u=!0)}c.on(\"fn-start\",function(t,e,n){u&&(h+=1)}),c.on(\"fn-err\",function(t,e,n){u&&(this.thrown=!0,o(n))}),c.on(\"fn-end\",function(){u&&!this.thrown&&h>0&&(h-=1)}),c.on(\"internal-error\",function(t){i(\"ierr\",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t(\"loader\").features.ins=!0},{}],4:[function(t,e,n){function r(){j++,S=y.hash,this[u]=Date.now()}function o(){j--,y.hash!==S&&i(0,!0);var t=Date.now();this[l]=~~this[l]+t-this[u],this[h]=t}function i(t,e){x.emit(\"newURL\",[\"\"+y,e])}function a(t,e){t.on(e,function(){this[e]=Date.now()})}var c=\"-start\",s=\"-end\",f=\"-body\",u=\"fn\"+c,h=\"fn\"+s,d=\"cb\"+c,p=\"cb\"+s,l=\"jsTime\",m=\"fetch\",v=\"addEventListener\",w=window,y=w.location;if(w[v]){var g=t(9),b=t(10),x=t(8),E=t(6),T=t(12),O=t(7),R=t(13),P=t(\"ee\"),D=P.get(\"tracer\");t(14),t(\"loader\").features.spa=!0;var S,N=w[v],j=0;P.on(u,r),P.on(d,r),P.on(h,o),P.on(p,o),P.buffer([u,h,\"xhr-done\",\"xhr-resolved\"]),E.buffer([u]),T.buffer([\"setTimeout\"+s,\"clearTimeout\"+c,u]),R.buffer([u,\"new-xhr\",\"send-xhr\"+c]),O.buffer([m+c,m+\"-done\",m+f+c,m+f+s]),x.buffer([\"newURL\"]),g.buffer([u]),b.buffer([\"propagate\",d,p,\"executor-err\",\"resolve\"+c]),D.buffer([u,\"no-\"+u]),a(R,\"send-xhr\"+c),a(P,\"xhr-resolved\"),a(P,\"xhr-done\"),a(O,m+c),a(O,m+\"-done\"),x.on(\"pushState-end\",i),x.on(\"replaceState-end\",i),N(\"hashchange\",i,!0),N(\"load\",i,!0),N(\"popstate\",function(){i(0,j>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t(\"ee\"),i=t(\"handle\"),a=t(12),c=t(11),s=\"learResourceTimings\",f=\"addEventListener\",u=\"resourcetimingbufferfull\",h=\"bstResource\",d=\"resource\",p=\"-start\",l=\"-end\",m=\"fn\"+p,v=\"fn\"+l,w=\"bstTimer\",y=\"pushState\";t(\"loader\").features.stn=!0,t(8);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(v,function(t,e){var n=t[0];n instanceof g&&i(\"bst\",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,Date.now(),this.bstType])}),c.on(m,function(){this.bstStart=Date.now()}),c.on(v,function(t,e){i(w,[e,this.bstStart,Date.now(),\"requestAnimationFrame\"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+l,function(t){i(\"bstHist\",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance[\"c\"+s]?window.performance[f](u,function(t){i(h,[window.performance.getEntriesByType(d)]),window.performance[\"c\"+s]()},!1):window.performance[f](\"webkit\"+u,function(t){i(h,[window.performance.getEntriesByType(d)]),window.performance[\"webkitC\"+s]()},!1)),document[f](\"scroll\",r,{passive:!0}),document[f](\"keypress\",r,!1),document[f](\"click\",r,!1)}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){c.inPlace(t,[u,h],\"-\",i)}function i(t,e){return t[1]}var a=t(\"ee\").get(\"events\"),c=t(21)(a,!0),s=t(\"gos\"),f=XMLHttpRequest,u=\"addEventListener\",h=\"removeEventListener\";e.exports=a,\"getPrototypeOf\"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+\"-start\",function(t,e){var n=t[1],r=s(n,\"nr@wrapped\",function(){function t(){if(\"function\"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,\"function\":n}[typeof n];return e?c(e,\"fn-\",null,e.name||\"anonymous\"):n});this.wrapped=t[1]=r}),a.on(h+\"-start\",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];\"function\"==typeof r&&(t[e]=function(){var t=r.apply(this,arguments);return o.emit(n+\"start\",arguments,t),t.then(function(e){return o.emit(n+\"end\",[null,e],t),e},function(e){throw o.emit(n+\"end\",[e],t),e})})}var o=t(\"ee\").get(\"fetch\"),i=t(19);e.exports=o;var a=window,c=\"fetch-\",s=c+\"body-\",f=[\"arrayBuffer\",\"blob\",\"json\",\"text\",\"formData\"],u=a.Request,h=a.Response,d=a.fetch,p=\"prototype\";u&&h&&d&&(i(f,function(t,e){r(u[p],e,s),r(h[p],e,s)}),r(a,\"fetch\",c),o.on(c+\"end\",function(t,e){var n=this;e?e.clone().arrayBuffer().then(function(t){n.rxSize=t.byteLength,o.emit(c+\"done\",[null,e],n)}):o.emit(c+\"done\",[t],n)}))},{}],8:[function(t,e,n){var r=t(\"ee\").get(\"history\"),o=t(21)(r);e.exports=r,o.inPlace(window.history,[\"pushState\",\"replaceState\"],\"-\")},{}],9:[function(t,e,n){var r=t(\"ee\").get(\"mutation\"),o=t(21)(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,\"fn-\")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],10:[function(t,e,n){function r(t){var e=a.context(),n=c(t,\"executor-\",e),r=new f(n);return a.context(r).getCtx=function(){return e},a.emit(\"new-promise\",[r,e],e),r}function o(t,e){return e}var i=t(21),a=t(\"ee\").get(\"promise\"),c=i(a),s=t(19),f=NREUM.o.PR;e.exports=a,f&&(window.Promise=r,[\"all\",\"race\"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){a.emit(\"propagate\",[null,!o],i),o=o||!t}}var o=!1;s(n,function(e,n){Promise.resolve(n).then(r(\"all\"===t),r(!1))});var i=e.apply(f,arguments),c=f.resolve(i);return c}}),[\"resolve\",\"reject\"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&a.emit(\"propagate\",[t,!0],n),n}}),f.prototype[\"catch\"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),s(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),a.on(\"executor-start\",function(t){t[0]=c(t[0],\"resolve-\",this),t[1]=c(t[1],\"resolve-\",this)}),a.on(\"executor-err\",function(t,e,n){t[1](n)}),c.inPlace(f.prototype,[\"then\"],\"then-\",o),a.on(\"then-start\",function(t,e){this.promise=e,t[0]=c(t[0],\"cb-\",this),t[1]=c(t[1],\"cb-\",this)}),a.on(\"then-end\",function(t,e,n){this.nextPromise=n;var r=this.promise;a.emit(\"propagate\",[r,!0],n)}),a.on(\"cb-end\",function(t,e,n){a.emit(\"propagate\",[n,!0],this.nextPromise)}),a.on(\"propagate\",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=a.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return\"\"+f})},{}],11:[function(t,e,n){var r=t(\"ee\").get(\"raf\"),o=t(21)(r),i=\"equestAnimationFrame\";e.exports=r,o.inPlace(window,[\"r\"+i,\"mozR\"+i,\"webkitR\"+i,\"msR\"+i],\"raf-\"),r.on(\"raf-start\",function(t){t[0]=o(t[0],\"fn-\")})},{}],12:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],\"fn-\",null,n)}function o(t,e,n){this.method=n,this.timerDuration=\"number\"==typeof t[1]?t[1]:0,t[0]=a(t[0],\"fn-\",this,n)}var i=t(\"ee\").get(\"timer\"),a=t(21)(i),c=\"setTimeout\",s=\"setInterval\",f=\"clearTimeout\",u=\"-start\",h=\"-\";e.exports=i,a.inPlace(window,[c,\"setImmediate\"],c+h),a.inPlace(window,[s],s+h),a.inPlace(window,[f,\"clearImmediate\"],f+h),i.on(s+u,r),i.on(c+u,o)},{}],13:[function(t,e,n){function r(t,e){h.inPlace(e,[\"onreadystatechange\"],\"fn-\",c)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit(\"xhr-resolved\",[],t)),h.inPlace(t,v,\"fn-\",c)}function i(t){w.push(t),l&&(g=-g,b.data=g)}function a(){for(var t=0;t<w.length;t++)r([],w[t]);w.length&&(w=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t(\"ee\"),u=f.get(\"xhr\"),h=t(21)(u),d=NREUM.o,p=d.XHR,l=d.MO,m=\"readystatechange\",v=[\"onload\",\"onerror\",\"onabort\",\"onloadstart\",\"onloadend\",\"onprogress\",\"ontimeout\"],w=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit(\"new-xhr\",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit(\"internal-error\",[n])}catch(r){}}return e};if(s(p,y),y.prototype=p.prototype,h.inPlace(y.prototype,[\"open\",\"send\"],\"-xhr-\",c),u.on(\"send-xhr-start\",function(t,e){r(t,e),i(e)}),u.on(\"open-xhr-start\",r),l){var g=1,b=document.createTextNode(g);new l(a).observe(b,{characterData:!0})}else f.on(\"fn-end\",function(t){t[0]&&t[0].type===m||a()})},{}],14:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<h;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader(\"X-NewRelic-App-Data\");a&&(e.cat=a.split(\", \").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit(\"xhr-done\",[t],t),c(\"xhr\",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if(\"json\"===n&&null!==e)return e;var r=\"arraybuffer\"===n||\"blob\"===n||\"json\"===n?t.response:t.responseText;return l(r)}function i(t,e){var n=s(e),r=t.params;r.host=n.hostname+\":\"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t(\"loader\");if(a.xhrWrappable){var c=t(\"handle\"),s=t(15),f=t(\"ee\"),u=[\"load\",\"error\",\"abort\",\"timeout\"],h=u.length,d=t(\"id\"),p=t(18),l=t(17),m=window.XMLHttpRequest;a.features.xhr=!0,t(13),f.on(\"new-xhr\",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener(\"progress\",function(t){e.lastSize=t.loaded},!1)}),f.on(\"open-xhr-start\",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on(\"open-xhr-end\",function(t,e){\"loader_config\"in NREUM&&\"xpid\"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader(\"X-NewRelic-ID\",NREUM.loader_config.xpid)}),f.on(\"send-xhr-start\",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=l(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{\"abort\"===t.type&&(o.params.aborted=!0),(\"load\"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||\"function\"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit(\"internal-error\",[n])}catch(r){}}};for(var a=0;a<h;a++)e.addEventListener(u[a],this.listener,!1)}),f.on(\"xhr-cb-time\",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&\"function\"==typeof n.onload||this.end(n)}),f.on(\"xhr-load-added\",function(t,e){var n=\"\"+d(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on(\"xhr-load-removed\",function(t,e){var n=\"\"+d(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on(\"addEventListener-end\",function(t,e){e instanceof m&&\"load\"===t[0]&&f.emit(\"xhr-load-added\",[t[1],t[2]],e)}),f.on(\"removeEventListener-end\",function(t,e){e instanceof m&&\"load\"===t[0]&&f.emit(\"xhr-load-removed\",[t[1],t[2]],e)}),f.on(\"fn-start\",function(t,e,n){e instanceof m&&(\"onload\"===n&&(this.onload=!0),(\"load\"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on(\"fn-end\",function(t,e){this.xhrCbStart&&f.emit(\"xhr-cb-time\",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],15:[function(t,e,n){e.exports=function(t){var e=document.createElement(\"a\"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split(\"://\");!r.port&&o[1]&&(r.port=o[1].split(\"/\")[0].split(\"@\").pop().split(\":\")[1]),r.port&&\"0\"!==r.port||(r.port=\"https\"===o[0]?\"443\":\"80\"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],\"/\"!==r.pathname.charAt(0)&&(r.pathname=\"/\"+r.pathname);var i=!e.protocol||\":\"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],16:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var i=t(\"handle\"),a=t(19),c=t(20),s=t(\"ee\").get(\"tracer\"),f=NREUM;\"undefined\"==typeof window.newrelic&&(newrelic=f);var u=[\"setPageViewName\",\"setCustomAttribute\",\"setErrorHandler\",\"finished\",\"addToTrace\",\"inlineHit\",\"addRelease\"],h=\"api-\",d=h+\"ixn-\";a(u,function(t,e){f[e]=o(h+e,!0,\"api\")}),f.addPageAction=o(h+\"addPageAction\",!0),f.setCurrentRouteName=o(h+\"routeName\",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o=\"function\"==typeof e;return i(d+\"tracer\",[Date.now(),t,n],r),function(){if(s.emit((o?\"\":\"no-\")+\"fn-start\",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{s.emit(\"fn-end\",[Date.now()],n)}}}};a(\"setName,setAttribute,save,ignore,onEnd,getContext,end,get\".split(\",\"),function(t,e){p[e]=o(d+e)}),newrelic.noticeError=function(t){\"string\"==typeof t&&(t=new Error(t)),i(\"err\",[t,(new Date).getTime()])}},{}],17:[function(t,e,n){e.exports=function(t){if(\"string\"==typeof t&&t.length)return t.length;if(\"object\"==typeof t){if(\"undefined\"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if(\"undefined\"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!(\"undefined\"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],18:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\\/\\s](\\d+\\.\\d+)/);o&&(r=+o[1]),e.exports=r},{}],19:[function(t,e,n){function r(t,e){var n=[],r=\"\",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],20:[function(t,e,n){function r(t,e,n){e||(e=0),\"undefined\"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],21:[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t(\"ee\"),i=t(20),a=\"nr@original\",c=Object.prototype.hasOwnProperty,s=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,c,s;try{a=this,r=i(arguments),c=\"function\"==typeof n?n(r,a):n||{}}catch(f){d([f,\"\",[r,a,o],c])}u(e+\"start\",[r,a,o],c);try{return s=t.apply(a,r)}catch(h){throw u(e+\"err\",[r,a,h],c),h}finally{u(e+\"end\",[r,a,s],c)}}return r(t)?t:(e||(e=\"\"),nrWrapper[a]=t,h(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o=\"\");var a,c,s,f=\"-\"===o.charAt(0);for(s=0;s<e.length;s++)c=e[s],a=t[c],r(a)||(t[c]=n(a,f?c+o:o,i,c))}function u(n,r,o){if(!s||e){var i=s;s=!0;try{t.emit(n,r,o)}catch(a){d([a,n,r,o])}s=i}}function h(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){d([r])}for(var o in t)c.call(t,o)&&(e[o]=t[o]);return e}function d(e){try{t.emit(\"internal-error\",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,c,i):i()}function n(n,r,o){if(!d.aborted){t&&t(n,r,o);for(var i=e(o),a=l(n),c=a.length,s=0;s<c;s++)a[s].apply(i,r);var f=u[y[n]];return f&&f.push([g,n,r,i]),i}}function p(t,e){w[t]=l(t).concat(e)}function l(t){return w[t]||[]}function m(t){return h[t]=h[t]||o(n)}function v(t,e){f(t,function(t,n){e=e||\"feature\",y[n]=e,e in u||(u[e]=[])})}var w={},y={},g={on:p,emit:n,get:m,listeners:l,context:e,buffer:v,abort:a,aborted:!1};return g}function i(){return new r}function a(){(u.api||u.feature)&&(d.aborted=!0,u=d.backlog={})}var c=\"nr@context\",s=t(\"gos\"),f=t(19),u={},h={},d=e.exports=o();d.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t(\"ee\").get(\"handle\");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||\"object\"!==e&&\"function\"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i=\"nr@id\",a=t(\"gos\");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!b++){var t=g.info=NREUM.info,e=h.getElementsByTagName(\"script\")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();s(w,function(e,n){t[e]||(t[e]=n)}),c(\"mark\",[\"onload\",a()],null,\"api\");var n=h.createElement(\"script\");n.src=\"https://\"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){\"complete\"===h.readyState&&i()}function i(){c(\"mark\",[\"domContent\",a()],null,\"api\")}function a(){return(new Date).getTime()}var c=t(\"handle\"),s=t(19),f=t(\"ee\"),u=window,h=u.document,d=\"addEventListener\",p=\"attachEvent\",l=u.XMLHttpRequest,m=l&&l.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:l,REQ:u.Request,EV:u.Event,PR:u.Promise,MO:u.MutationObserver},t(16);var v=\"\"+location,w={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",agent:\"js-agent.newrelic.com/nr-spa-1016.min.js\"},y=l&&m&&m[d]&&!/CriOS/.test(navigator.userAgent),g=e.exports={offset:a(),origin:v,features:{},xhrWrappable:y};h[d]?(h[d](\"DOMContentLoaded\",i,!1),u[d](\"load\",r,!1)):(h[p](\"onreadystatechange\",o),u[p](\"onload\",r)),c(\"mark\",[\"firstbyte\",a()],null,\"api\");var b=0},{}]},{},[\"loader\",2,14,5,3,4]);\n;NREUM.info={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",licenseKey:\"b3a229b3da\",applicationID:\"41710945\",sa:1}\n</script>\n"'
}

// Promise Polyfill from https://github.com/taylorhakes/promise-polyfill
if (Promise == null) {
	var scope = {}
	!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?r:u)(n.promise,e._value);var o;try{o=t(e._value)}catch(i){return void u(n.promise,i)}r(n.promise,o)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void f(e);if("function"==typeof i)return void s(t(i,n),e)}e._state=1,e._value=n,f(e)}catch(r){u(e,r)}}function u(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function c(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,u(n,e))})}catch(o){if(t)return;t=!0,u(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new c(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(e){o(r,e)},t)}n[r]=u,0===--i&&e(n)}catch(c){t(c)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(scope);
	Promise = scope.Promise
}

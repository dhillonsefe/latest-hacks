function random_posts(a){for(var i=0;i<latesthack_numposts;i++){var b=a.feed.entry[i];var c=b.title.$t;if('content'in b){var d=b.content.$t}else{if('summary'in b){var d=b.summary.$t}else{var d=""}};d=d.replace(/<[^>]*>/g,"");if(d.length<latesthack_snippet_length){var e=d}else{d=d.substring(0,latesthack_snippet_length);var f=d.lastIndexOf(" ");e=d.substring(0,f)+"&#133;"};for(var j=0;j<b.link.length;j++){if('thr$total'in b){var g=b.thr$total.$t+' '+latesthack_comment}else{g=latesthack_disable};if(b.link[j].rel=='alternate'){var h=b.link[j].href;var k=b.published.$t;if('media$thumbnail'in b){var l=b.media$thumbnail.url}else{l="http://2.bp.blogspot.com/-XQt2v4x5dl8/T1zdpFh392I/AAAAAAAABUU/xMJZDedw38k/s1600/default.jpg"}}};document.write('<p>');document.write('<img alt="'+c+'" src="'+l+'"/>');document.write('<div><a href="'+h+'" rel="nofollow" title="'+e+'">'+c+'</a></div>');if(latesthack_info=='yes'){document.write('<span>'+k.substring(8,10)+'/'+k.substring(5,7)+'/'+k.substring(0,4)+' - '+g)+'</span>'}document.write('<div style="clear:both"></div></p>')}};getvalue();for(var i=0;i<latesthack_numposts;i++){document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index='+latesthack_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};
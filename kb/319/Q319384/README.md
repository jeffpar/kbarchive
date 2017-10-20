---
layout: page
title: "Q319384: Pages Do Not Expire as Expected After Web Site Content Change"
permalink: /kb/319/Q319384/
---

## Q319384: Pages Do Not Expire as Expected After Web Site Content Change

{% raw %}

	Article: Q319384
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change content on a Web site, the changes do not appear as expected.
	Instead, Internet Information Services (IIS) 5.0 shows the old content.
	
	CAUSE
	=====
	
	This can occur if HTTP compression is enabled on the Web server. Enabling HTTP
	compression introduces a new metabase key named HcCacheControlHeader. The
	default value of HcCacheControlHeader is set to max-age=86400 (that is, 86400
	seconds). This means that the Web site stays in the cache of the browser for 24
	hours.
	
	RESOLUTION
	==========
	
	1. On your server, open a command prompt.
	
	2. Change to your <X>:\InetPub\AdminScripts folder, where <X> is the
	  drive that you specified for your IIS documents.
	
	3. Run the following command:
	
	  CSCRIPT.EXE ADSUTIL.VBS SET
	  W3SVC/Filters/Compression/Parameters/HcCacheControlHeader "max-age=0"
	
	4. Stop and restart the IISAdmin service.
	
	5. Restart the WWW service.
	
	WORKAROUND
	==========
	
	If the client refreshes the content (for example, by pressing the F5 key), the
	IIS cache is updated and shows the changed content.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Setting the value of Response.Expires to 0 in the relevant ASP page does not
	resolve the issue.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

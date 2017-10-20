---
layout: page
title: "Q238923: User Is Prompted for Password When Browsing to Http://127.0.0.1"
permalink: /kb/238/Q238923/
---

## Q238923: User Is Prompted for Password When Browsing to Http://127.0.0.1

{% raw %}

	Article: Q238923
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are testing a local Web site using Internet Explorer 5.0 on a computer
	running Windows 2000, and you attempt to connect to http://127.0.0.1, you may be
	prompted for a password, even if no logon is required.
	
	CAUSE
	=====
	
	This occurs because this version of Internet Explorer does not recognize
	http://127.0.0.1 as a local intranet site. This version of Internet Explorer
	regards 127.0.0.1 as an Internet site, and therefore does not send your
	credentials automatically to the site.
	
	RESOLUTION
	==========
	
	To correct this problem, use http://Localhost to connect to the site or change
	the settings in Internet Explorer by performing the following steps:
	
	1. Open Internet Explorer 5.0 and click Tools.
	
	2. On the Tools menu, click Internet Options.
	
	3. In the Internet Options window, click on the Security.
	
	4. In the list, click Local Intranet, and then click Sites.
	
	5. In the Local Intranet window, click Advanced.
	
	6. In the Add This Web Site To This Zone box, add "http://127.0.0.1" and click
	  Add.
	
	7. Click OK.
	
	8. Click OK, and then click OK again (to get back to the browser).
	
	9. Restart Internet Explorer and try to browse the site again.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

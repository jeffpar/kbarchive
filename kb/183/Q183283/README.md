---
layout: page
title: "Q183283: Internet Explorer via Proxy to IIS May Stop on Page with Scripts"
permalink: /kb/183/Q183283/
---

## Q183283: Internet Explorer via Proxy to IIS May Stop on Page with Scripts

{% raw %}

	Article: Q183283
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.01; winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Proxy Server version 2.0 
	- Microsoft Internet Explorer version 4.01 for Windows 95 
	- Microsoft Internet Explorer version 4.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Internet Explorer version 4.01 connects through Microsoft Proxy Server
	version 2.0 to a Microsoft Internet Information Server (IIS) 4.0 computer,
	Internet Explorer may hang when you refresh a page that contains Java or ASP
	scripts. The page will be incomplete, and the images may fail to download.
	
	NOTE: This problem will not occur if you use IIS version 3.0, or if you use
	Microsoft Internet Explorer version 3.0 to access an IIS 4.0 computer.
	
	CAUSE
	=====
	
	A content-length header may be missing from the IIS 4.0 HTTP response.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the Microsoft Proxy Server 2.0 Service Pack 1.
	For additional information on Service Pack 1, please reference the following
	Microsoft Knowledge Base article:
	
	  Q238375 Proxy Server 2.0 Service Pack 1: List of Fixes
	
	WORKAROUND
	==========
	
	To work around this problem, contact the administrator of the Web site, and ask
	him or her to contact Microsoft Product Support Services to obtain and install
	the IIS fix discussed below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	There are two fixes available for this problem, one for IIS 4.0 and one for
	Proxy Server 2.0. The IIS fix can be applied to any IIS 4.0 Web server that
	users connect to using Internet Explorer version 4.x.
	
	Because this problem occurs more frequently when Microsoft Internet Explorer 4.x
	connects through Microsoft Proxy Server to an IIS 4.0 Web site, a fix has been
	created for Microsoft Proxy Server 2.0. This version of the fix can be installed
	on the Proxy Server computer and is the preferred solution because it will
	correct the problem for connections to ALL IIS 4.0 web sites.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbIEsearch kbAudDeveloper kbiis400 kbZNotKeyword2 kbProxyServSearch kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE401Win95 kbIE401WinNT400 kbProxyServ200
	Version           : WINDOWS:4.01; winnt:2.0,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

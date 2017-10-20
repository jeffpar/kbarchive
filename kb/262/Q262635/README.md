---
layout: page
title: "Q262635: Err: HTTP 403.9 - Access Forbidden: Too Many Users Are Connected"
permalink: /kb/262/Q262635/
---

## Q262635: Err: HTTP 403.9 - Access Forbidden: Too Many Users Are Connected

{% raw %}

	Article: Q262635
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4039 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse an Internet Information Services (IIS) 5.0 Web site
	that is running on Windows 2000 Professional, the following error message is
	displayed at the top of the browser:
	
	  The page cannot be displayed
	  There are too many people accessing the Web site at this time.
	
	The following error message is also displayed further down in the browser:
	
	  HTTP 403.9 - Access Forbidden: Too many users are connected
	  Internet Information Services
	
	CAUSE
	=====
	
	The error messages occur when more than ten users are attempting to connect to
	IIS 5.0. The version of IIS 5.0 that is included in Windows 2000 Professional is
	limited to ten connections.
	
	RESOLUTION
	==========
	
	If more than ten connections are needed, use the version of IIS 5.0 that is
	included in Windows 2000 Server.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information about running IIS 5.0 on Windows 2000 Professional,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q262632 PWS Does Not Run on Windows 2000 Professional
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 Personal Web Server Peer Services win2kpro w2kpro 4039 403-9 403;9 akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4039 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

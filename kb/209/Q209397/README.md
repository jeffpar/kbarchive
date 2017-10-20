---
layout: page
title: "Q209397: The Web Proxy Service Stops Responding"
permalink: /kb/209/Q209397/
---

## Q209397: The Web Proxy Service Stops Responding

{% raw %}

	Article: Q209397
	Product(s): Internet Information Server
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 29-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Proxy Server version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade your computer to Internet Information Server (IIS) 4.0 and you
	reinstall Proxy Server, or after you install Proxy Server on a computer that is
	running a "clean" installation of IIS 4.0, you may receive the following error
	messages:
	
	  Event Viewer: Event 127 Web Proxy Service failed to initialize.
	
	In the administration tool, you receive the following error message:
	
	  IIS is improperly installed. You will need to reinstall.
	
	CAUSE
	=====
	
	This behavior can occur because when you upgrade your computer from IIS 3.0 to
	IIS 4.0 and Proxy Server 2.0 is installed, you need to reinstall the W3proxy.dll
	file.
	
	RESOLUTION
	==========
	
	To resolve this behavior:
	
	1. In IIS, click the ISAPI Filters tab in the Master dialog box, and then remove
	  the W3proxy.dll file.
	
	2. In the Default Web Site Properties dialog box, click the ISAPI Filters tab,
	  and then manually add the W3proxy.dll file.
	
	3. Stop and restart the World Wide Web (WWW) service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200
	Version           : :2.0,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

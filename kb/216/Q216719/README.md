---
layout: page
title: "Q216719: Internet Explorer Stops Responding When Connecting to SSL-Enable"
permalink: /kb/216/Q216719/
---

## Q216719: Internet Explorer Stops Responding When Connecting to SSL-Enable

{% raw %}

	Article: Q216719
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSiteServ300sp1fix
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to an IIS computer with Internet Explorer version 3.0 or later
	using SSL (HTTPS), the browser may appear to stop responding. The browser
	eventually displays the following error message:
	
	  Internet Explorer cannot open the Internet site https://sitename. The
	  operation timed out
	
	CAUSE
	=====
	
	This problem may be related to an improperly set SSL port, or a malformed URL.
	The standard port for an SSL connection is port 443. When HTTPS is used in an
	Internet browser, port 443 is assumed. If your Web site is set to use a
	different port, then the user must specify the new port within the URL. If the
	port is incorrect, then the server is never really contacted, which produces
	this behavior.
	
	RESOLUTION
	==========
	
	The user's request should be formatted as follows (the SSL port is 230 in this
	example):
	
	  https://www.microsoft.com:230
	
	In the case of a virtual directory in the request:
	
	  https://www.microsoft.com:230/vdir/resource.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSiteServ300sp1fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

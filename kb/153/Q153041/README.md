---
layout: page
title: "Q153041: FP: HTTP Error 404, Invalid Proxy Server Error When Opening Web"
permalink: /kb/153/Q153041/
---

## Q153041: FP: HTTP Error 404, Invalid Proxy Server Error When Opening Web

{% raw %}

	Article: Q153041
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194057.
	
	SYMPTOMS
	========
	
	In FrontPage Explorer, when you open an internal Web after a proxy server has
	been defined, the following error message may appear:
	
	  The server may not have the FrontPage Server Extensions installed, or the
	  server may be misconfigured, or you may have specified an invalid proxy
	  server, or the Web you are accessing may have been deleted (HTTP error 404)
	
	CAUSE
	=====
	
	The ability to access internal host names is unavailable in FrontPage Explorer
	when a proxy server is designated, unless one of the following conditions is
	true:
	
	- The internal host names are specified in the "List of Hosts without Proxy"
	  (on the Tools menu, click Proxies).
	
	  -or-
	
	- The IP address of the Web Server is specified in the Open Web dialog box.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Open FrontPage Explorer.
	
	2. On the Tools menu, click Proxies.
	
	3. Under "List of Hosts without Proxy," list all internal host names that you
	  want to be accessed inside the proxy.
	
	NOTE: When you specify multiple host names to be used without a proxy, use commas
	to separate the names as in the following example:
	
	hostname1,hostname2
	
	MORE INFORMATION
	================
	
	Wild card characters (* or ?) can not be used to specify host IP addresses in
	the "List of Hosts Without Proxy" list.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

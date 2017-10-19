---
layout: page
title: "Q233444: MSBP Err Msg: Internet Explorer Cannot Open the Internet Site..."
permalink: /kb/233/Q233444/
---

## Q233444: MSBP Err Msg: Internet Explorer Cannot Open the Internet Site...

	Article: Q233444
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbnetwork kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time you click a Web link in Microsoft Business Planner, you may
	receive an error message similar to the following:
	
	  Internet Explorer cannot open the Internet site <site address>. The
	  downloaded file is not available. This could be due to your Security or
	  Language settings or because the server was unable to retrieve the requested
	  file.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- Microsoft Internet Explorer 4.0 is your default Web browser.
	
	- You connect to the Internet through a firewall or proxy server.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your Web browser to bypass the proxy server
	when you use Business Planner. To do this:
	
	1. Start Internet Explorer.
	
	2. On the View menu, click Internet Options.
	
	3. Click the Connection tab.
	
	4. Under Proxy Server, click Advanced.
	
	5. In the "Do not use proxy server for addresses beginning with" box, type
	  ";*.msn.com" (without the quotation marks).
	
	6. Click OK, and then click OK again.
	
	7. Quit Internet Explorer.
	
	MORE INFORMATION
	================
	
	To work around this issue, click OK to dismiss the error message, and then click
	the Web link again.
	
	Additional query words: msbp connect ie4 unable
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbnetwork kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

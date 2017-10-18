---
layout: page
title: "Q150684: FP: &quot;No Server on Port ...&quot; Error Opening, Creating Web Page"
permalink: kb/150/Q150684/
---

## Q150684: FP: &quot;No Server on Port ...&quot; Error Opening, Creating Web Page

	Article: Q150684
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new Web or open an existing Web in FrontPage
	Explorer, the following message appears:
	
	  There is no server on port <port number> at '<Server name>'
	
	where <port number> is the port to which your server is connected.
	
	CAUSE
	=====
	
	The auto-launch feature of the FrontPage Personal Web Server functions only when
	the server is running from port 80.
	
	WORKAROUND
	==========
	
	If your FrontPage Personal Web Server is installed on a port other than 80,
	start the Personal Web Server before you work with FrontPage Explorer.
	
	MORE INFORMATION
	================
	
	If you are using FrontPage 1.0 and you choose the full installation of FrontPage
	1.1 (as opposed to the upgrade), the FrontPage Personal Web Server 1.1 is
	installed to port 8080.
	
	FrontPage 98 expanded the auto-launch feature so it will work with the FrontPage
	Personal Web Server if it is configured to use port 8080. However, other
	possible port configurations, such as port 8088, still require you to manual
	launch the server (Vhttpd32.exe) from the appropriate folder.
	
	
	Additional query words: automatic auto-start startup start up 98
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

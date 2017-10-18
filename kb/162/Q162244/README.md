---
layout: page
title: "Q162244: FP: Error 10053 After Quick, Repeated Operations on WebSite"
permalink: kb/162/Q162244/
---

## Q162244: FP: Error 10053 After Quick, Repeated Operations on WebSite

	Article: Q162244
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbdta
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194258.
	
	SYMPTOMS
	========
	
	When you perform many operations quickly or repeatedly, such as deleting and
	creating webs on a WebSite server, you may receive the following error message:
	
	  Unable to connect to server at <your_server_name> on port
	  <your_server_port> (socket code 10053).
	
	CAUSE
	=====
	
	When you delete a FrontPage Web on a WebSite server, FrontPage updates the
	WebSite configuration files and sets a flag in the registry that instructs
	WebSite to reread its configuration files. WebSite checks the flag whenever it
	is idle. While it is rereading the configuration files, the Website server does
	not accept connections, resulting in the error message described in the
	"Symptoms" section.
	
	
	WORKAROUND
	==========
	
	To avoid receiving this error message, allow the WebSite server time to process
	the multiple operations and reread its configuration files. For example, allow
	the Web Server to remain idle for about 10 seconds or restart the Web server.
	(An idle state is one in which the server is not providing any data to connected
	users. The quickest way to ensure that the server rereads its configuration
	files is to restart it.)
	
	The WebSite products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 97 front page socket code
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :1.0,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

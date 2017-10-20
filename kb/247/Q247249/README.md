---
layout: page
title: "Q247249: Error Message: HTTP/1.1 Error 400 - Bad Request"
permalink: /kb/247/Q247249/
---

## Q247249: Error Message: HTTP/1.1 Error 400 - Bad Request

{% raw %}

	Article: Q247249
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp400 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a GET request is submitted to a Web server configured with Custom Error
	pages, the Web server sends the following error message to the client browser:
	
	  HTTP/1.1 Error 400 - Bad Request
	
	CAUSE
	=====
	
	This behavior is expected when the GET request itself cannot be parsed because
	of some kind of packet corruption. If you send a bad request to the IIS Web
	server, the Custom Errors functionality is not invoked, which causes the
	"HTTP/1.1 Error 400 - Bad Request" error message.
	
	RESOLUTION
	==========
	
	If the contents of a GET request are corrupt, then the server is unable to
	determine the URL or the host to which the GET request should be sent. IIS is
	unable to retrieve the host information from the GET request packet in order to
	look up the meta data for the custom error. This is by design. Errors that
	result from severely corrupted GET requests are not customizable.
	
	To more completely determine what may be occurring, obtain a network capture of
	the communication packets between the client receiving the error and the Web
	server itself. Use the Microsoft Network Monitor utility to capture network
	packets for analysis. For additional information, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp400 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

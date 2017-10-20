---
layout: page
title: "Q248013: Err Msg: HTTP Error 500-12 Application Restarting"
permalink: /kb/248/Q248013/
---

## Q248013: Err Msg: HTTP Error 500-12 Application Restarting

{% raw %}

	Article: Q248013
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp50012 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client attempts to connect to a Microsoft Internet Information Services
	(IIS) 5.0 application that is restarting, the browser displays the following
	error message:
	
	  
	
	  The page cannot be displayed
	  ----------------------------
	
	  There is a problem with the page you are trying to reach and it cannot be
	  displayed.
	
	  HTTP Error 500-12 Application Restarting
	  Internet Information Services
	
	WORKAROUND
	==========
	
	This message is harmless and usually disappears after the browser is refreshed.
	There is no good workaround once the message appears from a production
	environment. However, if the message appears for an extended period of time, you
	may want to consider stopping all the Web services and reloading the
	application.
	
	MORE INFORMATION
	================
	
	When certain changes are made to an IIS 5.0 application, those changes are
	committed to the Global.asa file for the application. When you save changes to
	the Global.asa file, the server finishes processing all of the current
	application requests before it recompiles the Global.asa file. During that time,
	the server refuses additional requests and returns an error message stating that
	the request cannot be processed while the Web site is restarting.
	
	After all of the current user requests have been processed, the server deletes
	all active sessions, calling the Session_OnEnd event for each session it
	deletes, closes the application, and then calls the Application_OnEnd event. The
	Global.asa file is then recompiled.
	
	Subsequent user requests will start the application and create new sessions, and
	trigger the Application_OnStart and Session_OnStart events. When you view an ASP
	page while the application is running Application_OnStart, the following error
	message occurs:
	
	  HTTP Error 500-12 Application Restarting
	
	The message is harmless and usually disappears when you refresh the page in your
	browser.
	
	This error message may also be caused by anti-virus software scanning. When
	anti-virus software scans an IIS Web application, IIS may behave as if the
	Global.asa has been modified and thus restart the web application. Turning off
	virus scanning on the global.asa file may help resolve this issue. If a client
	GET request is made during this time, the web server will return a 500-12 error.
	For additional information on the same error message occurring in Site Server
	3.0, Commerce Edition, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236446 Err Msg: HTTP 1.1 Application Restarting
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp50012 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

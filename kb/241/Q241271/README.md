---
layout: page
title: "Q241271: IIS 5.0 Returns 500;100 Error Page with Response.Buffer=False"
permalink: /kb/241/Q241271/
---

## Q241271: IIS 5.0 Returns 500;100 Error Page with Response.Buffer=False

{% raw %}

	Article: Q241271
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set Response.Buffer to False on an ASP page, the "500;100" error
	message is still returned when an error occurs. However, when you set
	Response.Buffer to False for debugging purposes, a static error message should
	be returned, as it does in IIS 4.0 .
	
	CAUSE
	=====
	
	The ASP page sends no data to the client before the error occurs. IIS 5.0
	returns the custom error page because no data is provided by the static error
	message when there is no data written to the client.
	
	WORKAROUND
	==========
	
	For IIS 5.0 to return static error messages, you must disable the ASP dynamic
	error page. To do this, perform the following steps:
	
	1. In the Internet Service Manager MMC, right-click the Web site, and then
	  select Properties.
	
	2. Click the Custom Errors tab.
	
	3. Choose the 500;100 HTTP error.
	
	4. Change the Message Type to Default.
	
	5. Click OK, and then click Apply.
	
	IIS 5.0 will now return static messages when an error is received from all pages
	served from this Web site.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

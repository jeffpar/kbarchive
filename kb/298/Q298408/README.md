---
layout: page
title: "Q298408: IIS Redirects When Folder Without Trailing Slash Is Requested"
permalink: /kb/298/Q298408/
---

## Q298408: IIS Redirects When Folder Without Trailing Slash Is Requested

{% raw %}

	Article: Q298408
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a browser requests a URL such as http://www.servername.de/SubDir, the
	browser is redirected to http://www.servername.de/SubDir/. A trailing slash is
	included at the end of the URL.
	
	CAUSE
	=====
	
	Internet Information Server (IIS) first treats SubDir as a file that it should
	give back to the browser. If this file cannot be found, IIS checks to see if
	there is a directory with this name. If a directory with this name exists, a
	courtesy redirect with a 302 "Object moved" response message is returned to the
	browser. This message also contains the information about the new location of
	the directory with the trailing slash. In turn, the browser starts a new GET
	request to the URL with the trailing slash.
	
	With this slash at the end of the URL, IIS treats this as a directory and tries
	to obtain either the default document from this directory or, if no default
	document exists, returns the directory listing or a "Directory listing denied"
	error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q247558: Browsing HTML Administrator without Default Document Enabled Ret"
permalink: /kb/247/Q247558/
---

## Q247558: Browsing HTML Administrator without Default Document Enabled Ret

{% raw %}

	Article: Q247558
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse the HTML Administration Web site with no default
	document enabled and directory browsing disabled returns, an error similar to
	the following occurs:
	
	  HTTP Error 403 - Forbidden
	  You are not authorized to view this page
	  You might not have permission to view this directory or page using the
	  credentials you supplied.
	
	CAUSE
	=====
	
	This behavior is by design. When a client request is made to a folder or Web
	site that has no default document enabled and has directory browsing disabled,
	Internet Information Services (IIS) returns an "HTTP 403 Forbidden" error
	message to inform the client that the request is denied for reasons other than
	an authentication error, which results in an "HTTP 401 Unauthorized" error
	message.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

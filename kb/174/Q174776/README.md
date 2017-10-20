---
layout: page
title: "Q174776: Index Server Queries Return Not Enough Storage Is Available Err."
permalink: /kb/174/Q174776/
---

## Q174776: Index Server Queries Return Not Enough Storage Is Available Err.

{% raw %}

	Article: Q174776
	Product(s): Internet Information Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do a query using Index Server, the browser may return an error message
	similar to the following:
	
	  Not enough storage is available to complete this operation 0x8007000e.
	
	This error message will appear some of the time, but not necessarily all of the
	time.
	
	CAUSE
	=====
	
	If the query is using a POST command (in the HTML file), you can get the above
	error message. The Index Server is expecting all POST commands to be Null
	Terminated.
	
	WORKAROUND
	==========
	
	Instead of using the POST command, use the GET command in the HTML code, or
	ensure that the data in the POST command is Null Terminated.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : 1.1
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}

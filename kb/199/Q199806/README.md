---
layout: page
title: "Q199806: IIS: Headers Containing White Spaces May Return a 404 Error"
permalink: kb/199/Q199806/
---

## Q199806: IIS: Headers Containing White Spaces May Return a 404 Error

	Article: Q199806
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a request to an Internet Information Server (IIS) Web server contains a
	"HOST:" entry that contains a space between the HOST and the colon (HOST :), the
	Web server will return a 404 error message (not found). This information is
	found in the headers of the request sent by the browser to the Web server. This
	problem does not occur with a standard browser (Netscape or Internet Explorer).
	
	CAUSE
	=====
	
	All "headername:" information presented to Internet Information Server
	(including 'host:') is assumed to not contain a space. There is no HTTP error
	code for "Server Not Found," therefore the server returns a 404 error message.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

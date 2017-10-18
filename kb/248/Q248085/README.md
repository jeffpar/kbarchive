---
layout: page
title: "Q248085: Err Msg: HTTP 401.5 - Unauthorized: Authorization by ISAPI ..."
permalink: kb/248/Q248085/
---

## Q248085: Err Msg: HTTP 401.5 - Unauthorized: Authorization by ISAPI ...

	Article: Q248085
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4015 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access an IIS Web site, the following error message may
	occur:
	
	  HTTP 401.5 - Unauthorized: Authorization by ISAPI or CGI application failed
	
	CAUSE
	=====
	
	The Web address has an ISAPI (Internet Server Application Programming Interface)
	or CGI (Common Gateway Interface) program that verifies user credentials. The
	authentication credentials used to connect to the server were denied access by
	this program.
	
	RESOLUTION
	==========
	
	To resolve this issue, attempt to access the server again using the appropriate
	credentials. Contact the system administrator to obtain the correct logon
	information.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4015 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

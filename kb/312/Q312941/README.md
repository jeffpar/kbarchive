---
layout: page
title: "Q312941: PRB: IIS May Hang If You Enable ASP Server-Side Script Debugging"
permalink: /kb/312/Q312941/
---

## Q312941: PRB: IIS May Hang If You Enable ASP Server-Side Script Debugging

	Article: Q312941
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enable Active Server Pages (ASP) server-side script debugging in the Web
	site configuration and ASP encounters a scripting error, Internet Information
	Services (IIS) may hang, but no error messages are sent to the client browser.
	
	NOTE: This behavior may occur if you have installed the Microsoft Script Debugger
	or Microsoft Visual Interdev on a server that is running Microsoft IIS 4.0 or
	5.0 in a development environment.
	
	CAUSE
	=====
	
	This behavior occurs because you have not properly configured the default
	debugger that is in use.
	
	RESOLUTION
	==========
	
	To resolve this behavior, make the additional configurations that are outlined
	in the following article in the Microsoft Knowledge Base:
	
	  Q281427 PRB: Microsoft Script Debugger Does Not Break at Error
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You should not enable the Enable Server-Side Script Debugging property on a
	production environment.
	
	The enabling of server-side script debugging causes ASP to run in a single
	threaded mode; therefore, one thread at a time only executes for each
	application. Even if you properly configure the Microsoft Script Debugger, this
	dramatically affects the Web server performance.
	
	Additional query words: iis 5 debugger Script pdm msscrdbg
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

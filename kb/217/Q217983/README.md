---
layout: page
title: "Q217983: Web Administration Is Not Removed by BackOffice Setup Program"
permalink: kb/217/Q217983/
---

## Q217983: Web Administration Is Not Removed by BackOffice Setup Program

	Article: Q217983
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbui
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run BackOffice Setup to uninstall BackOffice Server, you may experience
	the following symptoms:
	
	- Web Administration is not removed.
	
	- The BOAdmin and NTadmin folders are not removed.
	
	- The following reference to a virtual folder remains in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\BackOffice Web Administrator
	
	CAUSE
	=====
	
	This problem can occur because BackOffice Setup does not entirely remove all
	components.
	
	RESOLUTION
	==========
	
	To successfully uninstall individual components, use the Add/Remove Programs
	tool in Control Panel:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click the program you want to remove, and then click Add/Remove.
	
	3. Follow the instructions on the screen to uninstall the appropriate program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbsetup kbtool kbui 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

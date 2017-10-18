---
layout: page
title: "Q92773: WFWG: Problems when Windows Express Version 3.0 Run as Shell"
permalink: kb/092/Q92773/
---

## Q92773: WFWG: Problems when Windows Express Version 3.0 Run as Shell

	Article: Q92773
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	If you use hDC Windows Express 3.0 as the Windows shell with Microsoft Windows
	for Workgroups, the following errors may occur:
	
	- The LOAD= and RUN= lines in the WIN.INI file may not run correctly.
	
	- Closing Windows Express may not end the current Windows session.
	
	CAUSE
	=====
	
	Because of the differences between the shell logic used in Windows Express and
	Windows for Workgroups, Windows Express loads itself as a normal application
	without establishing a Windows shell. Because no shell has been established, the
	only way to end the Windows session is to restart (reboot) the computer.
	
	WORKAROUND
	==========
	
	To work around this problem, use Program Manager as the Windows shell and do one
	of the following to run Windows Express:
	
	- Use Windows Program Manager to Add an icon for Windows Express to the StartUp
	  group.
	
	  -or-
	
	- Add EXPRESS to the RUN= line in your WIN.INI file.
	
	MORE INFORMATION
	================
	
	When you use Windows Express version 3.0 as the Windows shell, it expects to be
	started before all other Windows applications. However, when you use this
	application with Windows for Workgroups, Windows Express cannot be started first
	because Windows for Workgroups starts two hidden applications (NETDDE.EXE and
	CLIPSRV.EXE) prior to loading Windows Express.
	
	This feature is by design.
	
	For additional information about Windows Express, contact hDC Computer
	Corporation.
	
	hDC Windows Express 3.0 is manufactured by hDC Computer Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.1 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

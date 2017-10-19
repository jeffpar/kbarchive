---
layout: page
title: "Q225275: Err Msg: The Dynamic Link Library, Nwprovau.dll, Could Not Be..."
permalink: /kb/225/Q225275/
---

## Q225275: Err Msg: The Dynamic Link Library, Nwprovau.dll, Could Not Be...

	Article: Q225275
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Migration tool for NetWare on Small Business Server
	(SBS), you may receive the following error message:
	
	  The dynamic link library, NWPROVAU.DLL, could not be found in the following
	  path <current path used by SBS>
	
	CAUSE
	=====
	
	This error message can occur if Gateway Services for NetWare is not installed.
	Gateway Services for NetWare must be installed on the server before the
	Migration tool can be used.
	
	RESOLUTION
	==========
	
	To install Gateway Services for NetWare on the server:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click the Services tab.
	
	4. Click Add, and then click "Gateway Services for NetWare."
	
	5. Click OK, and then click OK.
	
	6. When you are prompted to restart the server, do so.
	
	When you run the Migration tool, you should migrate only files. Users should be
	created using the SBS wizards.
	
	Additional query words: smallbiz nwconv.exe
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

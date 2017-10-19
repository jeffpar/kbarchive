---
layout: page
title: "Q181023: Migration Tool for Netware Err Msg: Unable to locate DLL"
permalink: /kb/181/Q181023/
---

## Q181023: Migration Tool for Netware Err Msg: Unable to locate DLL

	Article: Q181023
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetworkkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run the Migration Tool for NetWare (NWConv.exe), you may
	receive the following error message:
	
	  NWCONV.EXE - Unable to locate DLL
	  The dynamic link library NWAPI32.DLL could not be found in the
	  specified path Drive:\<systemroot>\system32
	
	NOTE: The path in the error message differs depending on the path variable on
	your computer running Windows NT.
	
	CAUSE
	=====
	
	This behavior can occur if Gateway Services for NetWare (GSNW) is not installed
	on this computer running Windows NT Server.
	
	RESOLUTION
	==========
	
	To successfully run the Migration Tool for NetWare, install GSNW on your
	computer running Windows NT Server. To install GSNW, follow these steps:
	
	1. Click Start, click Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Services tab, click Add, and then double-click Gateway (and Client)
	  Services for NetWare.
	
	3. When prompted, provide the location of your Windows NT Server source files.
	
	4. Restart your computer when prompted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: NWCONV Migrate convert
	======================================================================
	Keywords          : kberrmsg kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

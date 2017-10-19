---
layout: page
title: "Q122899: No Network Functionality in The Microsoft Hearts Network"
permalink: /kb/122/Q122899/
---

## Q122899: No Network Functionality in The Microsoft Hearts Network

	Article: Q122899
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.11 3.50
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run The Microsoft Hearts Network under Windows NT, you may not be able
	to use the networking features. You cannot be the dealer or connect to another
	game.
	
	NOTE: This problem only happens if you use the Windows for Workgroups version
	3.11 MSHEARTS.EXE.
	
	CAUSE
	=====
	
	The Microsoft Hearts Network that came with Windows for Workgroups version 3.11
	attempts to call the NDDEGetWindow function in NDDEAPI.DLL. This function is not
	included with the version of NDDEAPI.DLL that came with Windows NT. Also, since
	the NDDEAPI.DLL is a Win32 dynamic link library (DLL), the call would fail since
	The Microsoft Hearts Network is a 16-bit application.
	
	
	WORKAROUND
	==========
	
	Replace MSHEARTS.EXE with the version that came with Windows for Workgroups
	version 3.10 and the networking functionality of The Microsoft Hearts Network
	will return.
	
	Additional query words: wfw wfwg prodnt 3.10 3.11
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	

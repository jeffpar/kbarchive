---
layout: page
title: "Q155450: Windows NT 3.51 Resource Kit Utilities Do not Run on 4.0"
permalink: kb/155/Q155450/
---

## Q155450: Windows NT 3.51 Resource Kit Utilities Do not Run on 4.0

	Article: Q155450
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT 3.51 Domain Monitor on Windows NT 4.0, you receive the
	following error:
	
	  LAN Manager error %<various 7-digit #>% occurred
	
	This is often followed by an access violation.
	
	When you run Windows NT 3.51 Server Manager on Windows NT 4.0, you receive the
	following error:
	
	  Srvmgr.exe - Entry Point Not Found: The procedure entry point
	  ??OSERVICE_ENUM@@QAE@PBGHI@Z could not be located in the dynamic link library
	  Netui1.dll.
	
	When you run Windows NT 3.51 User Manager for Domains on Windows NT 4.0, you
	receive the following error:
	
	  Usrmgr.exe - Entry Point Not Found: The procedure entry point
	  ?Connect@DEVICE2@@QAEJPBG000@Z could not be located in the dynamic link
	  library Netui1.dll.
	
	Note: This error may also occur if File and Print Services for Netware version
	3.51 is installed on an NT 4.0 server.
	
	CAUSE
	=====
	
	Utilities from the Microsoft Windows NT version 3.51 Resource Kit are meant to
	run on Microsoft Windows NT version 3.51, and not on any other version of
	Microsoft Windows NT.
	
	Utilities from the Microsoft Windows NT version 3.51 Resource Kit are version
	specific and do not run correctly on Windows NT version 4.0. When you try to run
	Windows NT 3.51 Resource Kit versions of User Manager for Domains, Server
	Manager for Domains, and Domain Monitor, you receive various errors.
	
	RESOLUTION
	==========
	
	Run the appropriate version of the Resource Kit utilities for the version of
	Windows NT you are using.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
